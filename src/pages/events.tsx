// /app/events/page.tsx (Next.js App Router) or /pages/events.tsx (Pages Router)
// Drop this file into your repo and adjust paths as needed.
// Tailwind assumed. Uses shadcn/ui Buttons if available, but falls back gracefully.

import React from "react";
import Link from "next/link";

// ---- 1) Edit your events here ----
// Replace the registrationUrl placeholders with your live Facebook Event links or a form link (Tally/Google Forms).
// If you add a video URL (YouTube/Vimeo), it will be rendered in the Brisbane Past Event gallery.

export type EventItem = {
  id: string;
  title: string;
  city: string;
  venue: string;
  date: string; // ISO 8601 (local time ok) e.g. "2025-10-09T18:00:00+05:30"
  timezone: string; // e.g. "Asia/Kolkata" or "Australia/Brisbane"
  description?: string;
  registrationUrl?: string;
  status: "upcoming" | "past";
  cover?: string; // optional image path
};

const EVENTS: EventItem[] = [
  {
    id: "2025-10-09-kolkata",
    title: "Author Talk & Signing — The Wildflower of Assam",
    city: "Kolkata",
    venue: "Oxford Bookstore, Park Street",
    date: "2025-10-09T18:00:00+05:30",
    timezone: "Asia/Kolkata",
    description:
      "Conversation and reading from the novel, followed by audience Q&A and signing.",
    registrationUrl: "https://facebook.com/events/1430072651429073",
    status: "upcoming",
    cover: "/images/events/kolkata.jpg",
  },
  {
    id: "2025-10-12-bangalore",
    title: "In Conversation — The Wildflower of Assam",
    city: "Bengaluru",
    venue: "Atta Galatta, Koramangala",
    date: "2025-10-12T17:00:00+05:30",
    timezone: "Asia/Kolkata",
    description:
      "An evening on historical & women's fiction, migration, and resilience.",
    registrationUrl: "https://facebook.com/events/786696447487878",
    status: "upcoming",
    cover: "/images/events/bangalore.jpg",
  },
  {
    id: "2025-10-18-pune",
    title: "Author Event — The Wildflower of Assam",
    city: "Pune",
    venue: "Read & Brew",
    date: "2025-10-18T17:00:00+05:30",
    timezone: "Asia/Kolkata",
    description:
      "Reading, discussion, audience Q&A, and book signing.",
    registrationUrl: "https://facebook.com/events/807002092292494",
    status: "upcoming",
    cover: "/images/events/pune.jpg",
  },
  {
    id: "2025-09-18-brisbane",
    title: "Book@Stones Brisbane — Completed",
    city: "Brisbane",
    venue: "Books@Stones, Stones Corner",
    date: "2025-09-18T18:00:00+10:00",
    timezone: "Australia/Brisbane",
    description:
      "Thanks to everyone who joined! Photos and videos from the evening are below.",
    registrationUrl: undefined,
    status: "past",
    cover: "/images/events/brisbane.jpg",
  },
];

// ---- 2) Optional: add media for past events here (Brisbane) ----
// Place the files under /public/media/brisbane-2025-09/ and reference below.

const BRISBANE_PHOTOS: string[] = [
  "/media/brisbane-2025-09/photo1.jpg",
  "/media/brisbane-2025-09/photo2.jpg",
  "/media/brisbane-2025-09/photo3.jpg",
  "/media/brisbane-2025-09/photo4.jpg",
];

const BRISBANE_VIDEOS: { title: string; embedUrl: string }[] = [
  // For YouTube, use https://www.youtube.com/embed/VIDEO_ID
  // For Vimeo, use https://player.vimeo.com/video/VIDEO_ID
  { title: "Highlights Reel", embedUrl: "https://www.youtube.com/embed/REPLACE_VIDEO_ID" },
];

// ---- Helpers ----
function formatEventDate(iso: string, tzLabel?: string) {
  try {
    const d = new Date(iso);
    // Browser will format in local timezone; if you want fixed tz text, append tz label
    return `${d.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })} · ${d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })}${
      tzLabel ? ` (${tzLabel})` : ""
    }`;
  } catch {
    return iso;
  }
}

export default function EventsPage() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming").sort((a, b) => +new Date(a.date) - +new Date(b.date));
  const past = EVENTS.filter((e) => e.status === "past").sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Author Events — India Tour</h1>
        <p className="mt-2 text-sm text-neutral-600">RSVP below to secure your spot. Limited seating at bookstores.</p>
      </header>

      {/* Upcoming */}
      <section className="mb-14">
        <h2 className="text-2xl font-medium mb-6">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {upcoming.map((e) => (
            <article key={e.id} className="rounded-2xl border p-5 shadow-sm bg-white">
              {e.cover && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={e.cover} alt={`${e.city} event`} className="h-44 w-full object-cover rounded-xl mb-4" />
              )}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs">
                  {e.city}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-600">{e.venue}</p>
              <p className="mt-1 text-sm">{formatEventDate(e.date, e.timezone)}</p>
              {e.description && <p className="mt-3 text-sm text-neutral-800">{e.description}</p>}

              {e.registrationUrl ? (
                <div className="mt-4">
                  <Link
                    href={e.registrationUrl}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium border hover:bg-neutral-50"
                  >
                    RSVP / Register
                  </Link>
                </div>
              ) : (
                <p className="mt-4 text-xs text-neutral-500">Registration link coming soon.</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Past / Brisbane Gallery */}
      <section className="mb-6">
        <h2 className="text-2xl font-medium mb-6">Past Events</h2>
        {past.map((e) => (
          <article key={e.id} className="mb-10 rounded-2xl border p-5 shadow-sm bg-white">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-xl font-semibold">{e.title}</h3>
              <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs">{e.city}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">{e.venue}</p>
            <p className="mt-1 text-sm">{formatEventDate(e.date, e.timezone)}</p>
            {e.description && <p className="mt-3 text-sm text-neutral-800">{e.description}</p>}

            {/* Brisbane gallery only if media exists */}
            {e.id === "2025-09-18-brisbane" && (
              <div className="mt-6 space-y-8">
                {BRISBANE_VIDEOS.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium mb-3">Videos</h4>
                    <div className="grid gap-6 md:grid-cols-2">
                      {BRISBANE_VIDEOS.map((v, i) => (
                        <div key={i} className="aspect-video w-full overflow-hidden rounded-xl border">
                          <iframe
                            className="h-full w-full"
                            src={v.embedUrl}
                            title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {BRISBANE_PHOTOS.length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium mb-3">Photo Gallery</h4>
                    <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
                      {BRISBANE_PHOTOS.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={i} src={src} alt={`Brisbane event photo ${i + 1}`} className="h-44 w-full object-cover rounded-lg border" />
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-neutral-500">To add more photos, drop files in /public/media/brisbane-2025-09/ and append their paths in BRISBANE_PHOTOS.</p>
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </section>

      <footer className="mt-12 text-center text-xs text-neutral-500">
        For venue-specific questions, please contact the host bookstore.
      </footer>
    </main>
  );
}
