export default function GoodreadsReviews() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="goodreads-heading"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-assam.jpg')" }}
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2
          id="goodreads-heading"
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-white"
        >
          What readers say on Goodreads
        </h2>

        <div className="mt-6 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <iframe
            title="Goodreads Reviews"
            src="https://www.goodreads.com/api/reviews_widget_iframe?isbn=9781764216371&links=660&review_back=%23ffffff&stars=%23000000&text=%23000000"
            width="100%"
            height="600"
            frameBorder="0"
            loading="lazy"
          />
        </div>

        <p className="mt-4">
          <a
            className="text-white/90 underline decoration-white/40 underline-offset-4 hover:text-white"
            href="https://www.goodreads.com/book/show/239324662-the-wildflower-of-assam"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all reviews on Goodreads →
          </a>
        </p>
      </div>
    </section>
  );
}
