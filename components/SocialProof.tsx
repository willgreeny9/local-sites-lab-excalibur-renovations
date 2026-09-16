import Link from "next/link";
import { business } from "@/lib/business";

/**
 * No verified public platform rating was found at build time.
 * Do not invent stars/scores — link to trust facts and quotation instead.
 */
export function SocialProof() {
  return (
    <section className="social-proof" aria-label="Trust signals">
      <div className="shell social-proof-inner">
        <Link className="social-proof-card" href="/about#credentials">
          <div className="social-proof-copy">
            <strong>Gas Safe &amp; Oftec stated · Team of ten · Est. {business.established}</strong>
            <span>
              Public credentials and company facts from the current site and Companies House — no invented review score.
            </span>
          </div>
          <span className="social-proof-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
        <div className="social-proof-chips">
          <Link className="social-proof-chip" href="/testimonials">
            Trust notes
          </Link>
          <a
            className="social-proof-chip"
            href={business.companiesHouseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Companies House {business.companyNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
