import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
//this gonna be async fonksiyon
const fetchNews = async (
  category?: Category | string, //fetch new takes few arguments catogory gibi bu arguman strin olabilir yada
  //Category diye belirtilen şeylerin içinden olabilir
  keywords?: string,
  isDynamic?: boolean //belli aralıklaralacathing işlemi yapıcak onu kontrol etmek için
) => {
  //graphQl query stepzen sitesinden aldık geldik yavrum it means String!  değer gerekli
  const query = gql`
  query MyQuery {
    myQuery(
      access_key: "9df36a6494e26279b0b8a0933e63a495"
      countries: "tr,gb"
      sort: "published_desc"
    ) {
      data {
        author
        category
        country
        description
        image
        language
        published_at
        source
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }

  `;
  // fetch fonksiyonu with next js 13 cathing`
  const res = await fetch(
    "https://moorhead.stepzen.net/api/jaundiced-puffin/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      // Neden Content type dersen graphql formunda json dan bilgi aktarıyormuşuz ondan
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        //  Authorization: `Apikey ${"moorhead::stepzen.net+1000::5e91929f0d1e019a80d3f0a67cd9c9d5203ac7df33a3435eff22cb519aea7bcc"}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          acces_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log(
    "LOADING NEW DATA FROM API for category >>> ",
    category,
    keywords
  );
const newsResponse = await res.json(); 
  //sort funcition by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);
  return news;
};
export default fetchNews;

// Example Import
// stepzen import curl http://api.mediastack.com/v1/news?access_key=9df36a6494e26279b0b8a0933e63a495&sources=business,sports
