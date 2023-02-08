
//rfce 
//bu bir sever component olduğu için async yapabiliyormuş

import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";

// daha sonra geri dönüp yenileme işlemi yapabiliyor sync degilde async calısıyor
async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(','));
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage