
const API_URL_STRAPI ='http://localhost:1337/api'


export async function getProductCategories() {
  const res = await fetch(`${API_URL_STRAPI}/product-categories?fields[0]=title&fields[1]=slug&fields[2]=description&populate[cover][fields][3]=url&populate[cover][fields][4]=alternativeText&populate[products][fields][5]=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}
