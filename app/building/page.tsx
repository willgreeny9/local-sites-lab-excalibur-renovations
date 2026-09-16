import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Building services",
  description: "Building services, renovations and extensions from Excalibur Renovations Ltd in Bishop's Stortford.",
};

export default function BuildingPage() {
  return (
    <>
      <PageHero
        eyebrow="Building"
        title="Elevate your home internally or externally"
        lead="The Bishop's Stortford based team delivers building services across surrounding areas — home and garden renovations, extensions, kitchen and bathroom installations and related work published on the current site."
        imageSrc="/images/project-build-a.jpg"
        imageAlt="Building renovation project"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell prose">
          <h2>What the current site says</h2>
          <p>
            Excalibur Renovations Limited offers comprehensive building services for residential and
            commercial projects. From new construction to renovations and extensions, the team states
            they work with flexibility and efficiency on projects of any size.
          </p>
          <p>
            Years of experience and a commitment to quality are emphasised, with bespoke solutions
            tailored to client needs. Contact the team for building services in Bishop&apos;s Stortford
            and surrounding areas.
          </p>
          <p>
            <Link href="/extensions-conversions">Extensions and conversions</Link> ·{" "}
            <Link href="/kitchens-bathrooms">Kitchens and bathrooms</Link> ·{" "}
            <Link href="/projects">Project photography</Link>
          </p>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
