import { navLinks } from "@/utils/constants";
import Link from "next/link";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar__root">
      <ul className="container">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
