import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { projectShowcase } from "@/lib/business";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project photography from the current Excalibur Renovations brochure.",
};

const extra = [
  {
    title: "Team",
    src: "/images/hero-team.jpg",
    alt: "Excalibur Renovations team",
    caption: "Team photography from the current site hero.",
  },
  {
    title: "Building detail",
    src: "/images/project-mbr.jpg",
    alt: "Building project detail",
    caption: "Additional project imagery from the brochure assets.",
  },
  {
    title: "Plumbing",
    src: "/images/service-plumbing.jpg",
    alt: "Plumbing work",
    caption: "Plumbing imagery published on the current site.",
  },
  {
    title: "Air source heating",
    src: "/images/service-air-source.jpg",
    alt: "Air source heating",
    caption: "Innovation imagery for air source heating.",
  },
] as const;

export default function ProjectsPage() {
  const tiles = [
    ...projectShowcase.map((p) => ({
      title: p.title,
      src: p.src,
      alt: p.alt,
      caption: p.caption,
    })),
    ...extra,
  ];

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Renovation project photography"
        lead="Real images from the current Excalibur Renovations website. Captions sit on solid panels — never over photos."
        imageSrc="/images/project-portfolio.jpg"
        imageAlt="Portfolio project photography"
        actions={<Link className="button" href="/contact">Request a free quotation</Link>}
      />
      <section className="section">
        <div className="shell">
          <div className="gallery-grid">
            {tiles.map((tile) => (
              <article className="gallery-tile" key={tile.src}>
                <div className="gallery-tile-media">
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    width={900}
                    height={675}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </div>
                <div className="gallery-tile-caption">
                  <h2>{tile.title}</h2>
                  <p>{tile.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <QuoteBand />
    </>
  );
}
