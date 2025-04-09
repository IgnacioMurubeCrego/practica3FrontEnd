import { FunctionalComponent } from "preact/src/index.js";

type Props = {
  book: {
    id: string;
    title: string;
    cover_i?: number;
    author: string;
  };
};

const Card: FunctionalComponent<Props> = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={coverUrl} alt={book.title} class="w-full h-80 object-cover" />
      <div class="p-4">
        <b class="block text-lg">{book.title}</b>
        <span class="text-gray-700 block mb-2">{book.author}</span>
        <a href={`/book/${book.id}`} class="text-blue-500 hover:underline">
          Details
        </a>
      </div>
    </div>
  );
};

export default Card;
