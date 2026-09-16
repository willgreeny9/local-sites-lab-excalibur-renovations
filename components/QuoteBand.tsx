import Link from "next/link";
import { business } from "@/lib/business";

export function QuoteBand() {
  return (
    <section className="quote-band" aria-labelledby="quote-band-title">
      <div className="shell quote-band-inner">
        <div>
          <p className="eyebrow eyebrow-inverse">Free quotations</p>
          <h2 id="quote-band-title">Ask a question or request a free quotation today</h2>
          <p>
            Call, email or use the quote page. The current Excalibur site invites free quotations
            for domestic and commercial projects in Bishop&apos;s Stortford and surrounding areas.
          </p>
        </div>
        <div className="quote-band-actions">
          <Link className="button button-on-teal" href="/contact">
            Request a free quotation
          </Link>
          <a className="button button-ghost-light" href={`tel:${business.phoneMobileTel}`}>
            Call {business.phoneMobileDisplay}
          </a>
          <a className="text-link-light" href={`mailto:${business.email}?subject=Free%20quotation%20request`}>
            Email {business.email}
          </a>
        </div>
      </div>
    </section>
  );
}
