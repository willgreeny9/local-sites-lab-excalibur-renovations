import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/business";

export function ServiceGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;
  return (
    <div className="service-grid">
      {items.map((service) => (
        <Link className="service-card" href={service.href} key={service.slug}>
          <div className="service-card-media">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={640}
              height={420}
              sizes="(max-width: 700px) 100vw, 33vw"
            />
          </div>
          <div className="service-card-body">
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
            <span className="service-card-cta">Explore</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
