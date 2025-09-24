export default function GoodreadsReviews() {
  return (
    <section
      className="relative bg-gray-50 py-16 sm:py-20"
      aria-labelledby="goodreads-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="goodreads-heading"
          className="text-3xl font-bold tracking-tight text-gray-900"
        >
          What readers say on Goodreads
        </h2>

        <div className="mt-8 rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 bg-white">
          <iframe
            title="Goodreads Reviews"
            src="https://www.goodreads.com/api/reviews_widget_iframe?isbn=9781764216371&links=660&review_back=%23ffffff&stars=%23f59e0b&text=%23000000"
            width="100%"
            height="600"
            frameBorder="0"
            loading="lazy"
          />
        </div>

        <p className="mt-6">
          <a
            className="text-indigo-600 font-medium underline underline-offset-4 hover:text-indigo-800"
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
