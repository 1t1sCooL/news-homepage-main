import { useRouter } from "next/router";

const NAV_LINKS = ["Home", "New", "Popular", "Trending", "Categories"];

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const { basePath } = useRouter();

  return (
    <header className="header">
      <a href="#" className="header__logo" aria-label="W. home">
        <img src={`${basePath}/images/logo.svg`} alt="W." width={65} height={40} />
      </a>

      <button
        type="button"
        className="header__toggle"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}
      >
        <img src={`${basePath}/images/icon-menu.svg`} alt="" width={40} height={17} />
      </button>

      <div
        className={`header__overlay ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
        <button
          type="button"
          className="header__close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <img src={`${basePath}/images/icon-menu-close.svg`} alt="" width={32} height={31} />
        </button>
        <ul className="header__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#" onClick={() => setMenuOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
