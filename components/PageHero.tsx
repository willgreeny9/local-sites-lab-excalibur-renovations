import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  imageSrc: string;
  imageAlt: string;
  actions?: React.ReactNode;
};

export function PageHero({ eyebrow, title, lead, imageSrc, imageAlt, actions }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div className="page-hero-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p>{lead}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
        <div className="page-hero-image">
          <Image src={imageSrc} alt={imageAlt} width={1200} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
