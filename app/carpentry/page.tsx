import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";

export const metadata: Metadata = {
  title: "Carpentry and roofing",
  description: "Carpentry for Bishop's Stortford and Essex, plus roofing listed in the Excalibur service set.",
};

export default function CarpentryPage() {
  return (
    <>
      <PageHero
        eyebrow="Carpentry & roofing"
        title="Carpentry for commercial and domestic projects"
        lead="The current What We Do page covers carpentry in Bishop's Stortford and Essex — bespoke furniture, kitchen installations, flooring and decking — with roofing listed in the About service set."
        imageSrc="/images/project-portfolio.jpg"
        imageAlt="Carpentry and finished interiors"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell prose">
          <h2>Attention to detail</h2>
          <p>
            Skilled carpenters bring experience and attention to detail to every job, according to
            the current site. Contact the team for a consultation on commercial or domestic carpentry.
          </p>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
