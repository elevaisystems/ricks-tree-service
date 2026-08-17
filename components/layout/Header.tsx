"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="Rick's Tree Service">
          <Image
            src="/images/branding/ricks-logo.png"
            alt="Rick's Tree Service"
            width={170}
            height={170}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <a href="tel:9035992073" className="header-phone">
          <span className="phone-icon">
            <Phone size={24} strokeWidth={2.5} />
          </span>

          <span>
            <small>CALL US TODAY!</small>
            <strong>903-599-2073</strong>
            <strong>903-875-4834</strong>
          </span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <a href="tel:9035992073" className="mobile-phone">
            <Phone size={18} />
            903-599-2073
          </a>

          <a href="tel:9038754834" className="mobile-phone secondary">
            <Phone size={18} />
            903-875-4834
          </a>
        </nav>
      )}
    </header>
  );
}
