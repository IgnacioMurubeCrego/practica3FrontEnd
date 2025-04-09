import { FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "https://esm.sh/axios@1.8.1";
import Author from "../../components/Author.tsx";

type AuthorDetails = {
  name: string;
  bio?: string;
  works: {
    title: string;
    key: string;
    cover_i?: number;
  }[];
};

type Work = {
  title: string;
  key: string;
  covers: number[];
};
export const handler = async (
  _req: Request,
  ctx: FreshContext<unknown, AuthorDetails>,
) => {
  const authorId = ctx.params.id;
  try {
    // Obtener detalles del autor
    const authorResponse = await Axios.get(
      `https://openlibrary.org/authors/${authorId}.json`,
    );
    const authorData = authorResponse.data;
    const name = authorData.name;
    const bio = authorData.bio ? authorData.bio.value : "No disponible";

    // Obtener los trabajos del autor
    const worksResponse = await Axios.get(
      `https://openlibrary.org/authors/${authorId}/works.json`,
    );
    const worksData = worksResponse.data;

    if (!Array.isArray(worksData.entries)) {
      throw new Error("La propiedad 'entries' no está disponible en worksData");
    }

    // Filtrar los primeros 6 libros disponibles
    const books = worksData.entries.slice(0, 6).map((work: Work) => (
      {
        title: work.title,
        key: work.key.replace("/works/", ""),
        cover_i: work.covers?.[0] ?? null,
      }
    ));

    // Organizar la información del autor y los libros
    const authorDetails: AuthorDetails = {
      name,
      bio,
      works: books,
    };

    return ctx.render(authorDetails); // Pasar los detalles al componente
  } catch (e) {
    console.error("Error fetching author or works:", e);
    return ctx.render();
  }
};

const AuthorPage = (props: PageProps<AuthorDetails>) => {
  const data = props.data;

  if (!data) {
    return <p>No se encontró el autor.</p>;
  }

  return (
    <div class="author-detail-page">
      <Author name={data.name} bio={data.bio} books={data.works} />
    </div>
  );
};

export default AuthorPage;
