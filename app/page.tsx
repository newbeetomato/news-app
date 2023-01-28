
//rfce 
//bu bir sever component olduğu için async yapabiliyormuş

import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

// daha sonra geri dönüp yenileme işlemi yapabiliyor sync degilde async calısıyor
async function Homepage() {
  //const news: NewsResponse = await fetchNews(categories.join(','));
  return (
    <div>Homepage</div>
  )
}

export default Homepage