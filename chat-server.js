import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import { fileURLToPath } from "url";

// ESM-friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load API key from environment
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is not set in .env");
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(cors());
app.use(express.json());

// Read the site knowledge file once at startup
const knowledgePath = path.join(__dirname, "site_knowledge.md");
let SITE_CONTEXT = "";

try {
  SITE_CONTEXT = fs.readFileSync(knowledgePath, "utf8");
  console.log("✅ Loaded site_knowledge.md");
} catch (err) {
  console.error("❌ Could not read site_knowledge.md:", err.message);
  process.exit(1);
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  const userMessage = (req.body && req.body.message) || "";

  if (!userMessage.trim()) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant for gayatrisarkar.com.au. " +
            "Use ONLY the information in the provided CONTEXT. " +
            "If the context does not contain the answer, say you are not sure " +
            "and suggest the user visit the website or use the contact form.\n\n" +
            "CONTEXT START:\n" +
            SITE_CONTEXT +
            "\nCONTEXT END.\n",
        },
        { role: "user", content: userMessage },
      ],
    });

    const answer = completion.choices[0].message.content;
    res.json({ answer });
  } catch (err) {
    console.error("❌ OpenAI error:", err);
	if (err.code === "insufficient_quota") {
      return res.status(503).json({
        error:
          "The assistant is temporarily unavailable due to configuration limits. Please try again later.",
      });
    }
    res.status(500).json({ error: "Something went wrong talking to the AI." });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Chat server running at http://localhost:${PORT}`);
});
