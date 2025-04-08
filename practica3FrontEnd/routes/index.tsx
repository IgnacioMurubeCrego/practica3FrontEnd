import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Card from "../components/Card.tsx";
import { openLibraryAPI } from "../types.ts";
import Axios from "axios";

const featuredBooks: string[] = [
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "Pride and Prejudice",
  "The Hobbit",
  "Moby-Dick",
  "Jane Eyre",
  "War and Peace",
  "The Catcher in the Rye",
  "Brave New World",
  "The Lord of the Rings",
  "Crime and Punishment",
  "The Alchemist",
  "The Picture of Dorian Gray",
  "Harry Potter and the Sorcerer's Stone",
];

type Data = {
  key: string;
  cover_i: string;
  title: string;
  author_name: string;
};

// Title URL : https://openlibrary.org/search.json?q={titulo}
// Covers URL : https://covers.openlibrary.org/b/id/{cover_i}-L.jpg

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Data>) {
    const title = featuredBooks[0];
    const titleURL = `https://openlibrary.org/search.json?q=${title}`;
    const response = await Axios<openLibraryAPI[]>(titleURL);
    const data = response.data.slice(0, 12);
    return ctx.render({ data });
  },
};

const Page = (props: PageProps<Data>) => {
  const data = props.data;
  return (
    <div>
      <Card props={data} />
    </div>
  );
};

export default Page;
