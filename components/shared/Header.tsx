"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="hidden md:block nav-links-gender">
          <ul className="flex gap-6">
            <li>
              <Link href="/men">Men</Link>
            </li>
            <li>
              <Link href="/women">Women</Link>
            </li>
          </ul>
        </div>
        <div className="brand-logo-link">
          <Link href="/" className="flex items-center">
            <Image src="/images/brand-logo.png" alt="brand-logo" width={48} height={48} priority={true} />
            <span className="hidden lg:block font-bold text-2xl ml-3">Merchstore</span>
          </Link>
        </div>
        <div className="nav-links hidden md:block">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Store</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden sm:block">
          <div className="mobile-menu-btn">
            <button className="" onClick={() => setIsMenuOpen((prev) => !prev)}>
              Menu
            </button>
          </div>
          <div className={`${isMenuOpen ? "hidden" : "sm:block"} mobile-menu`}>
            <ul className="flex gap-3">
              <li>
                <Link href="/">Store</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
