import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ContactSection } from "@/components/ContactSection";
import { CredentialsStrip } from "@/components/CredentialsStrip";
import { ProjectPairs } from "@/components/ProjectPairs";
import { QuoteBand } from "@/components/QuoteBand";
import { ServiceGrid } from "@/components/ServiceGrid";
import { SocialProof } from "@/components/SocialProof";
import { business } from "@/lib/business";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: business.name,
    telephone: [business.phoneMobileTel, business.phoneOfficeTel],
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.line1,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    foundingDate: business.established,
    areaServed: business.areas,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://excalibur-renovations.localsiteslab.com",
    sameAs: [business.sourceUrl, business.companiesHouseUrl],
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero" aria-labelledby="home-hero-title">
        <div className="hero-split">
          <div className="hero-panel">
            <p className="eyebrow">Bishop&apos;s Stortford · Hertfordshire</p>
            <h1 id="home-hero-title">
              Renovations, building and plumbing — from a team of ten.
            </h1>
            <p>
              Established in {business.established}, {business.name} provides building and plumbing
              services for domestic and commercial clients in Bishop&apos;s Stortford. Request a free
              quotation for extensions, kitchens, bathrooms, heating and wider renovations.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Request a free quotation
              </Link>
              <a className="button button-secondary" href={`tel:${business.phoneMobileTel}`}>
                Call {business.phoneMobileDisplay}
              </a>
            </div>
            <div className="hero-facts" aria-label="Quick facts">
              <span className="hero-fact">Est. {business.established}</span>
              <span className="hero-fact">Team of ten (stated)</span>
              <span className="hero-fact">Gas Safe &amp; Oftec (stated)</span>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/images/hero-team.jpg"
              alt="Excalibur Renovations team"
              width={1600}
              height={1200}
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      <CredentialsStrip />
      <SocialProof />
      <QuoteBand />
      <ProjectPairs />

      <section className="section section-tint" aria-labelledby="services-home-title">
        <div className="shell">
          <div className="section-intro">
            <p className="eyebrow">What we do</p>
            <h2 id="services-home-title">Multi-trade renovation pathways</h2>
            <p>
              Building, plumbing and heating, carpentry and related finishes — the same public
              service set as the current brochure, rewritten for clarity.
            </p>
          </div>
          <ServiceGrid limit={6} />
          <p className="section-follow">
            <Link href="/services">See the full services overview</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="about-home-title">
        <div className="shell about-split">
          <div className="about-copy">
            <p className="eyebrow">About the firm</p>
            <h2 id="about-home-title">From plumbing roots to a renovations team</h2>
            <p>
              {business.name} was established in {business.established} by {business.founder},
              beginning with plumbing expertise and growing into a team of {business.teamSizeClaim}{" "}
              skilled professionals tackling projects from large extensions to smaller renovations.
            </p>
            <p>
              The current site emphasises relationships with local suppliers, continuous training
              and innovative options such as air source heating.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/about">
                Read the about page
              </Link>
              <Link className="button button-secondary" href="/projects">
                Project photography
              </Link>
            </div>
          </div>
          <div className="about-media">
            <Image
              src="/images/about-work.jpg"
              alt="Renovation work by Excalibur Renovations"
              width={900}
              height={1200}
              sizes="(max-width: 860px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="areas-home-title">
        <div className="shell">
          <div className="section-intro">
            <p className="eyebrow">Service area</p>
            <h2 id="areas-home-title">Based in Bishop&apos;s Stortford</h2>
            <p>{business.areasSummary}</p>
          </div>
          <div className="area-grid">
            {business.areas.map((area) => (
              <div className="area-card" key={area}>
                <h3>{area}</h3>
                <p>Published coverage note from the current site.</p>
              </div>
            ))}
          </div>
          <p className="section-follow">
            <Link href="/areas-covered">Areas covered</Link>
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
