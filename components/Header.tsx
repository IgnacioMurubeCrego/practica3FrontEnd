import type { FunctionalComponent } from "preact";

const Header: FunctionalComponent = () => {
  return (
    <header class="header">
      <a href="/" class="header-title">
        Home
      </a>
      <b class="header-title">
        Open Library Website
      </b>
    </header>
  );
};

export default Header;
