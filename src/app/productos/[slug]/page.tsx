import { getProductBySlug } from "@/services/fetchData";
import { setDataProduct, setDataTag } from "@/services/transformStrapiData";
import { Products } from "@/types/Products";
import Image from "next/image";
import React from "react";
import "./ProductDetail.scss";
import AddCart from "./AddCart";

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const productRawData = await getProductBySlug(params.slug as string);
  const productData: Products = setDataProduct(productRawData);

  const {
    id,

    title,
    description,
    price,
    unit,
    image_1,
    image_2,
    isNew,
    product_tags,
    product_categories,
  } = productData;

  return (
    <section className="productDetail">
      {image_1.url&& (
        <Image
          src={image_1.url}
          alt={image_1.alternativeText||'image'}
          width={400}
          height={400}
        />
      )}
      <h1>{title}</h1>
      <p>{description}</p>

      {isNew && <h3>Producto Nuevo :D</h3>}
      {product_tags && <p>tag</p>}
      {product_categories && <p>{product_categories.title}</p>}

        <AddCart
        price={price}
        unit={unit}
        id={id}
        title={title}
        />

    </section>
  );
}
