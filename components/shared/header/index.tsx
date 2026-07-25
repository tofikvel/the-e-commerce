"use client";

import Link from "next/link";
import Image from "next/image";
import NavMenu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b mb-4">
      <div className="flex justify-between mx-auto h-16 max-w-7xl items-center px-6">
        <div className="flex">
          <Link href="/" className="flex items-center">
            <Image src="/images/brand-logo.png" alt="brand-logo" width={48} height={48} priority={true} />
            <span className="hidden md:block font-bold text-2xl ml-3">Merchstore</span>
          </Link>
        </div>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
