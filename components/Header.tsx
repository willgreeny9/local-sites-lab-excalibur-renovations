"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/business";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/areas-covered", label: "Areas" },
  { href: "/contact", label: "Quote" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link className="site-logo" href="/" aria-label={`${business.name} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-white.png" alt={business.name} width={200} height={60} />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="button button-header" href={`tel:${business.phoneMobileTel}`}>
            Call {business.phoneMobileDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
