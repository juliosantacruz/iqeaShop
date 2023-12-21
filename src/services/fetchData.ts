const API_URL_STRAPI = "http://localhost:1337/api";

export async function getProductCategories() {
  const res = await fetch(
    `${API_URL_STRAPI}/product-categories?fields[0]=title&fields[1]=slug&fields[2]=description&populate[cover][fields][3]=url&populate[cover][fields][4]=alternativeText&populate[products][fields][5]=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
}

export async function getCustomerData() {
  const jwtCookie =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE3LCJpYXQiOjE3MDMxODU4NDAsImV4cCI6MTcwNTc3Nzg0MH0.kDgSurjAcPHpgv26yr-gvZPtOuBj8Au5pAH12CpOhP8";
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${jwtCookie}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
 try {
    const response = await fetch(
      `${API_URL_STRAPI}/users/me?populate[customer][populate][orders][populate]=*&populate[customer][populate][base_address][populate]=*`,
      requestOptions as any
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
