import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container nav__container">
        {/* LOGO */}
        <Link href="/" passHref>
          <a className="nav__logo">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
          </a>
        </Link>

        {/* LIST */}
        <ul className="nav__list">
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className="btn">Explore</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
