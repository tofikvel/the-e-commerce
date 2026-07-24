import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t">
      <div className="flex items-center justify-between h-24 mx-auto max-w-7xl px-6">
        <div className="nav-links">
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
      </div>
    </footer>
  );
};

export default Footer;
