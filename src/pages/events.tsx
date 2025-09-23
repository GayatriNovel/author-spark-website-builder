// src/pages/events.tsx
import React from "react";

type EventItem = {
  id: string;
  title: string;
  city: string;
  venue: string;
  date: string; // human-friendly date/time text
  description?: string;
  registrationUrl?: string;
  status: "upcoming" | "past";
  cover?: string; // optional image path under /public/lovable-uploads
};

const EVENTS: EventItem[] = [
  {
    id: "2025-10-09-kolkata",
    title: "Author Talk & Signing — The Wildflower of Assam",
    city: "Kolkata",
    venue: "Oxford Bookstore, Park Street",
    date: "Thu, Oct 9, 2025 · 6:00 PM (IST)",
    description:
      "Conversation and reading from the novel, followed by audience Q&A and signing.",
    registrationUrl:
      "https://www.facebook.com/events/1430072651429073",
    status: "upcoming",
    cover: "/lovable-uploads/kolkata.jpg",
  },
  {
    id: "2025-10-12-bengaluru",
    title: "In Conversation — The Wildflower of Assam",
    city: "Bengaluru",
    venue: "Atta Galatta, Koramangala",
    date: "Sun, Oct 12, 2025 · 5:00 PM (IST)",
    description:
      "An evening on historical & women's fiction, migration, and resilience.",
    registrationUrl:
      "https://www.facebook.com/events/REPLACE_WITH_EVENT_ID_BANGALORE",
    status: "upcoming",
    cover: "/lovable-uploads/bangalore.jpg",
  },
  {
    id: "2025-10-18-pune",
    title: "Author Event — The Wildflower of Assam",
    city: "Pune",
    venue: "Read & Brew",
    date: "Sat, Oct 18, 2025 · 5:00 PM (IST)",
    description: "Reading, discussion, audience Q&A, and book signing.",
    registrationUrl:
      "https://www.facebook.com/events/REPLACE_WITH_EVENT_ID_PUNE",
    status: "upcoming",
    cover: "/lovable-uploads/pune.jpg",
  },
  {
    id: "2025-09-18-brisbane",
    title: "Book@Stones Brisbane — Completed",
    city: "Brisbane",
    venue: "Books@Stones, Stones Corner",
    date: "Thu, Sep 18, 2025 · 6:00 PM (AEST)",
    description:
      "Thanks to everyone who joined! Photos and videos from the evening are below.",
    status: "past",
    cover: "/lovable-uploads/brisbane.jpg",
  },
];

// Put your uploaded photos (exact filenames) under /public/lovable-uploads
const BRISBANE_PHOTOS: string[] = [
  "/lovable-uploads/B1D08258-B77C-4761-81D0-7DC269260C93_1_102_o.jpeg",
  "/lovable-uploads/84D2F757-E641-4EEE-AA89-10072F649042_1_102_o.jpg",
  "/lovable-uploads/brisbane-2025-09-3.jpg",
  "/lovable-uploads/brisbane-2025-09-4.jpg",
];

// Optional: YouTube/Vimeo embed for Brisbane highlights
const BRISBANE_VIDEOS: { title: string; embedUrl: string }[] = [
  { title: "Highlights Reel", embedUrl: "https://www.youtube.com/embed/REPLACE_VIDEO_ID" },
];

export default function Events() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming");
  const past = EVENTS.filter((e) => e.status === "past");

  return (
    <main style={{ maxWidth: 1040, margin: "0 auto", padding: "2rem 1rem" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>Author Events — India Tour</h1>
        <p style={{ color: "#555" }}>
          RSVP below to secure your spot. Limited seating at bookstores.
        </p>
      </header>

      {/* Upcoming */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Upcoming Events</h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {upcoming.map((e) => (
            <article
              key={e.id}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: 12,
                padding: 16,
                background: "#fff",
              }}
            >
              {e.cover && (
                <img
                  src={e.cover}
                  alt={`${e.city} event`}
                  style={{
                    width: "100%",
                    height: 176,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 8,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h3 style={{ fontSize: 18, margin: 0 }}>{e.title}</h3>
                <span
                  style={{
                    fontSize: 12,
                    border: "1px solid #ddd",
                    borderRadius: 999,
                    padding: "2px 8px",
                  }}
                >
                  {e.city}
                </span>
              </div>

              <p style={{ margin: "6px 0", color: "#666", fontSize: 14 }}>
                {e.venue}
              </p>
              <p style={{ margin: "2px 0", fontSize: 14 }}>{e.date}</p>
              {e.description && (
                <p style={{ marginTop: 8, fontSize: 14 }}>{e.description}</p>
              )}

              {e.registrationUrl ? (
                <div style={{ marginTop: 12 }}>
                  <a
                    href={e.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      border: "1px solid #222",
                      borderRadius: 999,
                      padding: "8px 14px",
                      fontSize: 14,
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    RSVP / Register
                  </a>
                </div>
              ) : (
                <p style={{ marginTop: 12, fontSize: 12, color: "#777" }}>
                  Registration link coming soon.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Past (Brisbane Gallery) */}
      <section>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Past Events</h2>
        {past.map((e) => (
          <article
            key={e.id}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: 12,
              padding: 16,
              background: "#fff",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 8,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <h3 style={{ fontSize: 18, margin: 0 }}>{e.title}</h3>
              <span
                style={{
                  fontSize: 12,
                  border: "1px solid #ddd",
                  borderRadius: 999,
                  padding: "2px 8px",
                }}
              >
                {e.city}
              </span>
            </div>

            <p style={{ margin: "6px 0", color: "#666", fontSize: 14 }}>
              {e.venue}
            </p>
            <p style={{ margin: "2px 0", fontSize: 14 }}>{e.date}</p>
            {e.description && (
              <p style={{ marginTop: 8, fontSize: 14 }}>{e.description}</p>
            )}

            {/* Brisbane-only media */}
            {e.id === "2025-09-18-brisbane" && (
              <div style={{ marginTop: 16 }}>
                {BRISBANE_VIDEOS.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <h4 style={{ marginBottom: 8 }}>Videos</h4>
                    <div
                      style={{
                        display: "grid",
                        gap: 16,
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(320px, 1fr))",
                      }}
                    >
                      {BRISBANE_VIDEOS.map((v, i) => (
                        <div
                          key={i}
                          style={{
                            position: "relative",
                            paddingTop: "56.25%",
                            border: "1px solid #eee",
                            borderRadius: 8,
                            overflow: "hidden",
                          }}
                        >
                          <iframe
                            src={v.embedUrl}
                            title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              border: 0,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {BRISBANE_PHOTOS.length > 0 && (
                  <div>
                    <h4 style={{ marginBottom: 8 }}>Photo Gallery</h4>
                    <div
                      style={{
                        display: "grid",
                        gap: 8,
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(160px, 1fr))",
                      }}
                    >
                      {BRISBANE_PHOTOS.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Brisbane event photo ${i + 1}`}
                          style={{
                            width: "100%",
                            height: 176,
                            objectFit: "cover",
                            borderRadius: 8,
                            border: "1px solid #eee",
                          }}
                        />
                      ))}
                    </div>
                    <p style={{ marginTop: 6, fontSize: 12, color: "#777" }}>
                      Add/edit photos in <code>/public/lovable-uploads</code> and
                      update the list above as needed.
                    </p>
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </section>

      <footer style={{ marginTop: 24, textAlign: "center", fontSize: 12, color: "#777" }}>
        For venue-specific questions, please contact the host bookstore.
      </footer>
    </main>
  );
}



