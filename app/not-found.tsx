import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>That route is not part of this Local Sites Lab concept.</p>
        <div className="not-found-actions">
          <Link className="button" href="/">
            Back to home
          </Link>
          <Link className="button button-secondary" href="/contact">
            Request a quotation
          </Link>
        </div>
      </div>
    </section>
  );
}
