type BookDetails = {
  title: string;
  description?: string;
  first_publish_date: string;
  number_of_pages?: number;
  cover_i?: number;
  author: {
    name: string;
    id: string;
  };
};

export default function Book({
  title,
  description,
  first_publish_date,
  number_of_pages,
  cover_i,
  author,
}: BookDetails) {
  return (
    <div>
      <h1>{title}</h1>
      {cover_i && (
        <img
          src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
          alt={title}
        />
      )}
      {description && (
        <>
          <h2>Descripción</h2>
          <p>{description}</p>
        </>
      )}
      {first_publish_date && (
        <p>
          <strong>Año de publicación:</strong> {first_publish_date}
        </p>
      )}
      {number_of_pages && (
        <p>
          <strong>Número de páginas:</strong> {number_of_pages}
        </p>
      )}
      {author.id && (
        <p>
          <strong>Autor:</strong>{" "}
          <a href={`/author/${author.id}`}>Ver detalles del autor</a>
        </p>
      )}
    </div>
  );
}
