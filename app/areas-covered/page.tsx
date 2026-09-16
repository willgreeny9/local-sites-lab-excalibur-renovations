import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Areas covered",
  description: "Bishop's Stortford base and surrounding areas served by Excalibur Renovations Ltd.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas"
        title="Based in Bishop's Stortford"
        lead={business.areasSummary}
        imageSrc="/images/project-driveway.jpg"
        imageAlt="External works in the local area"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell">
          <div className="area-grid">
            {business.areas.map((area) => (
              <div className="area-card" key={area}>
                <h2>{area}</h2>
                <p>As referenced on the current Excalibur pages.</p>
              </div>
            ))}
            <div className="area-card">
              <h2>Registered office</h2>
              <p>
                {business.address.line1}, {business.address.locality}, {business.address.region}{" "}
                {business.address.postcode}
              </p>
            </div>
          </div>
          <p className="section-follow">
            Confirm coverage for your postcode when you request a quotation.
          </p>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
