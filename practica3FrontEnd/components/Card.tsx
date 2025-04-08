import { FunctionalComponent } from "preact/src/index.js";

type Props = {
  key: string;
  cover_i: string;
  title: string;
  author_name: string;
};
const Card: FunctionalComponent<Props> = (props: Props) => {
  const { key, title, cover_i, author_name } = props;
  return (
    <div>
      <img src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`} />
      <b>Title: {title}</b>
      <b>Author: {author_name}</b>
      <a href={`/book/id/${key}`}>Details</a>
    </div>
  );
};

export default Card;
