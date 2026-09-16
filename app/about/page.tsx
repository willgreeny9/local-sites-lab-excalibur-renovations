import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { business, credentials, serviceCatalogue } from "@/lib/business";

export const metadata: Metadata = {
  title: "About",
  description: "About Excalibur Renovations Ltd — established 2008 by Matthew Petchey in Bishop's Stortford.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Established in 2008 by Matthew Petchey"
        lead="From plumbing expertise to a renovations team of ten in Bishop's Stortford — the history published on the current About page."
        imageSrc="/images/about-history.jpg"
        imageAlt="Excalibur Renovations history imagery"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell about-split">
          <div className="about-copy prose">
            <h2>Our history</h2>
            <p>
              {business.name}, established in {business.established} by {business.founder}, began
              with a foundation of plumbing expertise and a vision for quality construction in
              Bishop&apos;s Stortford. Originally a plumber, Matthew&apos;s successful projects and
              strong relationships with local suppliers laid the groundwork for the company&apos;s
              growth.
            </p>
            <p>
              Today, with a team of {business.teamSizeClaim} skilled professionals, the firm tackles
              projects of all sizes — from large extensions to smaller renovations — prioritising
              customer satisfaction and competitive access to materials through local suppliers.
            </p>
            <p>
              Companies House lists the company as Active under number {business.companyNumber},
              incorporated 13 November 2008 (formerly M Petchey Plumbing and Heating Limited).
            </p>
          </div>
          <div className="about-media">
            <Image
              src="/images/credentials-gas-oftec.jpg"
              alt="Gas Safe and Oftec registration artwork from the current site"
              width={1158}
              height={1144}
              sizes="(max-width: 860px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
      <section className="section section-tint" id="credentials">
        <div className="shell">
          <div className="section-intro">
            <h2>Industry standards and credentials</h2>
            <p>
              Gas Safe and Oftec registration are stated on the current website. They are labelled
              here as current-site claims. Companies House status is independently verified.
            </p>
          </div>
          <ul className="trust-list">
            {credentials.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
                <p>
                  <a href={item.source} target="_blank" rel="noopener noreferrer">
                    Source ({item.status})
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="section-intro">
            <h2>Services listed on About</h2>
          </div>
          <ul className="catalogue-list">
            {serviceCatalogue.filter((s) => s !== "Air source heating").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="section-follow">
            Air source heating is highlighted separately on the homepage innovation section.{" "}
            <Link href="/services">Full services</Link>
          </p>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
