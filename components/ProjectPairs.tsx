import Image from "next/image";
import Link from "next/link";
import { projectShowcase } from "@/lib/business";

/** Paired project panels — renovation portfolio layout (not fabricated before/after claims). */
export function ProjectPairs() {
  const pairs = [
    [projectShowcase[0], projectShowcase[1]],
    [projectShowcase[2], projectShowcase[3]],
  ] as const;

  return (
    <section className="section project-pairs" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-intro">
          <p className="eyebrow">Project photography</p>
          <h2 id="projects-title">Spaces the team renovates</h2>
          <p>
            Real images from the current Excalibur Renovations brochure — kitchens, bathrooms,
            external works and building projects. Captions sit on solid panels; photos are never
            overlaid with text.
          </p>
        </div>
        <div className="pair-stack">
          {pairs.map((pair, index) => (
            <div className="pair-row" key={index}>
              {pair.map((item) => (
                <Link className="pair-card" href="/projects" key={item.id}>
                  <div className="pair-card-media">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={900}
                      height={640}
                      sizes="(max-width: 800px) 100vw, 50vw"
                    />
                  </div>
                  <div className="pair-card-caption">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <p className="section-follow">
          <Link href="/projects">View the project gallery</Link>
        </p>
      </div>
    </section>
  );
}
