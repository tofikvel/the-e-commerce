import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="flex items-center justify-between h-24 mx-auto max-w-7xl px-6">
        <div className="brand-logo-link">
          <Link href="/" className="flex items-center">
            <Image src="/images/brand-logo.png" alt="brand-logo" width={48} height={48} priority={true} />
            <span className="hidden lg:block font-bold text-2xl ml-3">Merchstore</span>
          </Link>
        </div>
        <div className="copyrights">
          <p>&copy; {new Date().getFullYear()} Merchstore. All rights reserved.</p>
        </div>
        <div className="nav-links">
          <ul className="flex gap-6">
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
