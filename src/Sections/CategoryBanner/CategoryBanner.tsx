import { getProductCategories } from "@/services/fetchData";
import Image from "next/image";
import React from "react";
import './CategoryBanner.scss'
import Link from "next/link";


// Pendiente agregar Link hacia pagina de categorias

export default async function CategoryBanner() {
  const rawData = await getProductCategories();
  const categoriesData = rawData.map((element: any) => {
    const newCategoryData = {
      id: element.id,
      title: element.attributes.title,
      slug: element.attributes.slug,
      imgUrl: element.attributes.cover.data.attributes.url,
      imgAlt:
        element.attributes.cover.data.attributes.alternativeText || "icon",
    };
    return newCategoryData;
  });

  // console.log(categoriesData);

  return (
    <section className="categoryBanner">
      <p>Categorias:</p>

      {categoriesData ?
        categoriesData.map((category: CategoryIconProps) => {
          return (
            <CategoryIcon
              key={category.id}
              title={category.title}
              imgUrl={category.imgUrl}
              imgAlt={category.imgAlt}
              slug={category.slug}
            />
          )
        }):
        <h4>no data</h4>}
    </section>
  );
}

type CategoryIconProps = {
  id?: string;
  imgUrl: string;
  imgAlt: string;
  title: string;
  slug?:string;
};

const CategoryIcon = (props: CategoryIconProps) => {
  return (
    <Link href={`/categoria/${props.slug}`} >

    <div className="categoryIcon">
      <div className="categoryImg">
        <Image src={props.imgUrl} alt={props.imgAlt} width={80} height={80} />
      </div>
      <div className="categoryTitle">
        <h4>{props.title}</h4>
      </div>
    </div>
    </Link>
  );
};
