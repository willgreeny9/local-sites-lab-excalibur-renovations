import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";

export const metadata: Metadata = {
  title: "Kitchens and bathrooms",
  description: "Kitchen and bathroom installations from Excalibur Renovations Ltd.",
};

export default function KitchensBathroomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Kitchens & bathrooms"
        title="Kitchen and bathroom installations"
        lead="Listed on the About and services pages, supported by tiling, decorating and related finishes. Project photography from the current site appears in the gallery."
        imageSrc="/images/project-kitchen.jpg"
        imageAlt="Kitchen installation"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell prose">
          <h2>Related trades</h2>
          <p>
            Plumbing and heating support bathroom refurbs; carpentry covers kitchen installations,
            flooring and related joinery. See the project gallery for published photography.
          </p>
          <p>
            <Link href="/plumbing-heating">Plumbing and heating</Link> ·{" "}
            <Link href="/projects">Projects</Link>
          </p>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
