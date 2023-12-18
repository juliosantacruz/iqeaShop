import { ProductCategory } from "./ProductCategory"
import { ProductTag } from "./ProductTag"

export type Products={
  title:string,
  slug:string,
  description:string,
  price:number,
  unit:string,
  inventario:number,
  image1:string,
  image2:string,
  isNew:boolean,
  isFeatured:boolean,
  product_tag:ProductTag,
  product_categories:ProductCategory
}
