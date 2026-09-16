import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Plumbing and heating",
  description: "Plumbing and heating services — Gas Safe and Oftec stated — from Excalibur Renovations Ltd.",
};

export default function PlumbingHeatingPage() {
  return (
    <>
      <PageHero
        eyebrow="Plumbing & heating"
        title="Reliable plumbing and heating for homes and businesses"
        lead="Repairs, bathroom refurbs, replacement boilers and complete heating system installations. The current site states Gas Safe and Oftec compliance."
        imageSrc="/images/service-heating.jpg"
        imageAlt="Plumbing and heating work"
        actions={
          <>
            <Link className="button" href="/contact">Request a free quotation</Link>
            <a className="button button-secondary" href={`tel:${business.phoneMobileTel}`}>Call {business.phoneMobileDisplay}</a>
          </>
        }
      />
      <section className="section">
        <div className="shell prose">
          <h2>Services described on the current site</h2>
          <p>
            Skilled plumbers handle routine maintenance and repairs through to complex installations.
            Whether a simple fix or a complete plumbing system overhaul, the firm states it delivers
            prompt, efficient and cost-effective solutions.
          </p>
          <p>
            Heating engineers keep up to date with energy-efficient solutions, including air source
            heating as an innovation highlighted on the homepage. Gas Safe and Oftec registration are
            stated on the About and Plumbing pages — labelled here as current-site claims pending
            independent register confirmation.
          </p>
          <p>
            <Link href="/about#credentials">Credentials notes</Link> ·{" "}
            <Link href="/kitchens-bathrooms">Bathrooms</Link>
          </p>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
