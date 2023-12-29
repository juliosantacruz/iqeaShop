import React from "react";
import { getProductCategoryBySlug } from "@/services/fetchData";
import { setDataCategory, setDataImage } from "@/services/transformStrapiData";
import { ProductCategory } from "@/types/ProductCategory";
import Link from "next/link";
import Image from "next/image";

export default async function page({
  params,
}: {
  params: { categoria: string };
}) {
  const categoryRawData = await getProductCategoryBySlug(
    params.categoria as string
  );

  const categoryData: ProductCategory = setDataCategory(categoryRawData);
  const categoryProducts = categoryData.products;
  // console.log("info cat", categoryData);

  return (
    <section>
      <h1>Categorias :D especial</h1>

      {categoryProducts !== undefined && categoryProducts?.length > 0 ? (
        <>
          {categoryProducts.map((product) => {
            // const imgData = setDataImage(product.image_1.data)

            return (
              <Link href={`/productos/${product.slug}`} key={product.id}>
                <article>
                  {product.image_1 && (
                    <Image src={product.image_1.url} alt={'category image'} width={120} height={120}/>
                  )}
                  <h3>{product.title}</h3>
                </article>
              </Link>
            );
          })}
        </>
      ) : (
        <h3>No products</h3>
      )}
    </section>
  );
}
