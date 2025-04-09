import { FunctionalComponent } from "preact/src/index.js";
import Card from "./Card.tsx";

type SearchResult = {
  key: string;
  cover_i?: number;
  title?: string;
  author_name?: string[];
};

type SearchResultsProps = {
  query: string;
  results: SearchResult[];
};

export const SearchResults: FunctionalComponent<SearchResultsProps> = ({
  query,
  results,
}) => {
  return (
    <div>
      <h1>Buscar libros</h1>
      <form action="/search" method="GET">
        <input
          type="text"
          name="q"
          placeholder="Buscar libros por título"
          defaultValue={query}
        />
        <button type="submit">Buscar</button>
      </form>
      {query && results.length === 0
        ? <p>No se encontraron libros con ese título.</p>
        : (
          <div class="books-grid">
            {results.map((result) => (
              <Card
                key={result.key}
                book={{
                  id: result.key.replace("/works/", ""),
                  title: result.title || "Sin título",
                  cover_i: result.cover_i,
                  author: result.author_name
                    ? result.author_name[0]
                    : "Autor desconocido",
                }}
              />
            ))}
          </div>
        )}
    </div>
  );
};
