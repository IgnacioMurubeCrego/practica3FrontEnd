import type { FunctionalComponent } from "preact";

const Header: FunctionalComponent = () => {
  return (
    <header class="header">
      <a href="/" class="home-button">
        Home
      </a>
      <form action="/search" method="GET" class="header-form">
        <input
          type="text"
          name="q"
          placeholder="Buscar libros por título"
          class="header-input"
        />
        <button type="submit" class="header-button">Buscar</button>
      </form>
    </header>
  );
};

export default Header;
