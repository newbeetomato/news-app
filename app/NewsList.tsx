import Article from "./Article";

type Props = {
  news: NewsResponse;
};
function NewsList({ news }: Props) {
  return (
  <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10"> {/*defaul medium adn large screenler için gridler telefon tablet pc */}
    {news.data.map((article) => (
        <Article key={article.title} article={article}/>
      ))
    }</main>
);
}

export default NewsList