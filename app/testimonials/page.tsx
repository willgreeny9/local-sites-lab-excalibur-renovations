import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { credentials } from "@/lib/business";

export const metadata: Metadata = {
  title: "Trust notes",
  description: "Trust and credential notes for Excalibur Renovations Ltd — no invented review scores.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="No invented review scores"
        lead="At build time no verified public Google or Checkatrade star rating was confirmed for this business. This page shares published credentials instead of fabricated testimonials."
        imageSrc="/images/about-work.jpg"
        imageAlt="Renovation craftsmanship"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell prose">
          <h2>What we can show publicly</h2>
          <p>
            Ask the firm directly for recent references when you request a quotation. Below are the
            credential and company facts used on this concept.
          </p>
          <ul className="trust-list">
            {credentials.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/about#credentials">Full credentials notes</Link>
          </p>
        </div>
      </section>
    </>
  );
}
