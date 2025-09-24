// src/components/AmazonReviews.tsx
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

type AmazonReview = {
  id: string;
  title: string;
  rating: number;        // 1–5
  reviewer: string;
  date?: string;         // ISO or plain text
  country?: string;      // e.g. "IN", "AU"
  body: string;          // excerpt of review
  permalink?: string;    // optional direct link
};

const StarRow = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div className="flex items-center gap-1">
      {stars.map((on, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            on ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default function AmazonReviews() {
  const [reviews, setReviews] = useState<AmazonReview[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/amazon-reviews.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then(setReviews)
      .catch(() => setError("Could not load Amazon reviews."));
  }, []);

  if (error) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-red-600">
        {error}
      </div>
    );
  }

  if (!reviews.length) {
    return null; // or loading spinner
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Amazon Reviews</h2>
        <a
          href="https://www.amazon.in/dp/9798898790400#customerReviews"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-600 hover:underline"
        >
          See all on Amazon →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((r) => (
          <article
            key={r.id}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold">{r.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                  <StarRow rating={r.rating} />
                  <span>·</span>
                  <span>{r.reviewer}</span>
                  {r.country && <span>· {r.country}</span>}
                  {r.date && (
                    <span>
                      · {new Date(r.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-800">{r.body}</p>

            {r.permalink && (
              <div className="mt-4">
                <a
                  href={r.permalink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Read on Amazon
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
