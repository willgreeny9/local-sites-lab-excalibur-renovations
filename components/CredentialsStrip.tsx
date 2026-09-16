import Link from "next/link";
import { credentials } from "@/lib/business";

export function CredentialsStrip() {
  return (
    <section className="credentials-strip" aria-label="Credentials and company facts" id="credentials">
      <div className="shell credentials-strip-inner">
        {credentials.map((item) => (
          <a
            key={item.label}
            className="credential-chip"
            href={item.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{item.label}</strong>
            <span>{item.status === "verified" ? "Verified" : "Current-site claim"}</span>
          </a>
        ))}
        <Link className="credential-chip credential-chip-cta" href="/contact">
          <strong>Free quotation</strong>
          <span>Request a quote</span>
        </Link>
      </div>
    </section>
  );
}
