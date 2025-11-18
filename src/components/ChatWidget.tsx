import React, { useState } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function sendMessage() {
    if (!input.trim() || isSending) return;

    const userMsg = input.trim();
    setMessages((m) => [...m, { sender: "user", text: userMsg }]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((m) => [
          ...m,
          {
            sender: "bot",
            text:
              data.error ||
              "The assistant is temporarily unavailable. Please try again later.",
          },
        ]);
      } else {
        setMessages((m) => [...m, { sender: "bot", text: data.answer }]);
      }
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating bubble button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Chat with Gayatri's assistant"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.25)] bg-gradient-to-tr from-[#2B4A9E] to-[#F37A5C] text-white border border-white/40 hover:scale-105 hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)] transition-transform duration-150"
      >
        <span className="text-xl">💬</span>
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-[90vw] max-w-sm rounded-3xl bg-white shadow-[0_20px_45px_rgba(0,0,0,0.25)] border border-slate-200/80 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#fef6f2] via-[#f9f3ff] to-[#eef3ff] border-b border-slate-200/60">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#2B4A9E] text-white font-semibold">
              GS
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900">
                Ask Gayatri&apos;s Assistant
              </div>
              <div className="text-xs text-slate-500 leading-tight">
                Questions about the book, author, or events.
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-slate-700 transition-colors text-xl leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto max-h-80 bg-slate-50/60">
            {messages.length === 0 && (
              <div className="text-xs text-slate-500 bg-white/70 border border-dashed border-slate-200 rounded-2xl px-3 py-2">
                👋 Hi! You can ask about{" "}
                <span className="font-medium">
                  The Wildflower of Assam, where to buy it, or Gayatri&apos;s
                  events.
                </span>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#2B4A9E] text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white border border-slate-200 px-3 py-2 text-xs text-slate-500">
                  <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-75" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-pulse delay-150" />
                  </span>
                  <span>Typing…</span>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="border-t border-slate-200 bg-white/95 px-3 py-2">
            <div className="flex items-center gap-2">
              <input
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2B4A9E]/40 focus:border-[#2B4A9E]/60"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question about the book…"
              />
              <button
                onClick={sendMessage}
                disabled={isSending || !input.trim()}
                className="rounded-full bg-[#2B4A9E] text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-[#223c7f] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
