import Link from "next/link";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer-grid">
        <div>
          <p className="footer-brand">{business.name}</p>
          <p>
            {business.address.line1}, {business.address.locality}, {business.address.region}{" "}
            {business.address.postcode}
          </p>
          <p>
            Company {business.companyNumber} · Established {business.established}
          </p>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <p>
            <a href={`tel:${business.phoneMobileTel}`}>{business.phoneMobileDisplay}</a>
          </p>
          <p>
            <a href={`tel:${business.phoneOfficeTel}`}>{business.phoneOfficeDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Request a quote</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="shell footer-note">
        <p>
          Independent Local Sites Lab concept — not the official {business.shortName} website. Source:{" "}
          <a href={business.sourceUrl}>{business.sourceUrl}</a>
        </p>
      </div>
    </footer>
  );
}
