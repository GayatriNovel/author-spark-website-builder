function GoodreadsReviews() {
  return (
    <section style={{ textAlign: "center", margin: "2rem 0" }}>
      <h2>What readers say on Goodreads</h2>
      <iframe
        title="Goodreads Reviews"
        src="https://www.goodreads.com/api/reviews_widget_iframe?isbn=9781764216371&links=660&review_back=%23ffffff&stars=%23000000&text=%23000000"
        width="100%"
        height="600"
        frameBorder="0"
        loading="lazy"
      ></iframe>
      <p style={{ marginTop: "10px" }}>
        <a
          href="https://www.goodreads.com/book/show/239324662-the-wildflower-of-assam"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all reviews on Goodreads →
        </a>
      </p>
    </section>
  );
}

export default GoodreadsReviews;
