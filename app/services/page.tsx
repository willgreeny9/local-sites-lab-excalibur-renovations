import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { ServiceGrid } from "@/components/ServiceGrid";
import { business, serviceCatalogue } from "@/lib/business";

export const metadata: Metadata = {
  title: "Services",
  description: "Building, plumbing, heating, carpentry and renovation services from Excalibur Renovations Ltd in Bishop's Stortford.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services overview"
        title="Building and plumbing services for domestic and commercial clients"
        lead="The same public service set as the current Excalibur brochure — rewritten for clarity. Request a free quotation for the work you need."
        imageSrc="/images/service-building.jpg"
        imageAlt="Building services"
        actions={
          <>
            <Link className="button" href="/contact">Request a free quotation</Link>
            <a className="button button-secondary" href={`tel:${business.phoneMobileTel}`}>Call {business.phoneMobileDisplay}</a>
          </>
        }
      />
      <section className="section">
        <div className="shell">
          <div className="section-intro">
            <h2>Service pathways</h2>
            <p>Choose a pathway for more detail, or browse the full catalogue below.</p>
          </div>
          <ServiceGrid />
        </div>
      </section>
      <section className="section section-tint" id="groundworks">
        <div className="shell">
          <div className="section-intro">
            <h2>Full catalogue (as published)</h2>
          </div>
          <ul className="catalogue-list">
            {serviceCatalogue.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
