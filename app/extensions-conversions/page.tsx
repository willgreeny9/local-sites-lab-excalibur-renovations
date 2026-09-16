import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";

export const metadata: Metadata = {
  title: "Extensions and conversions",
  description: "House extensions and conversions from Excalibur Renovations Ltd in Bishop's Stortford.",
};

export default function ExtensionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Extensions & conversions"
        title="Larger projects and space conversions"
        lead="Extensions and conversions are listed among the firm's core services, alongside new build homes and wider renovations."
        imageSrc="/images/project-build-b.jpg"
        imageAlt="Extension and conversion building work"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell prose">
          <h2>Planning through to build</h2>
          <p>
            The About page invites clients to schedule a home visit and consultation — call or email
            to discuss extensions, conversions and related building work. This concept does not claim
            appointments on the business&apos;s behalf; use the published contact details to arrange a
            visit directly.
          </p>
          <p>
            <Link href="/building">Building services</Link> · <Link href="/contact">Contact</Link>
          </p>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
