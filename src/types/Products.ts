import { ProductCategory } from "./ProductCategory"
import { ProductTag } from "./ProductTag"

export type ProductCategoryTag={
  id:string|number,
  title:string,
  slug:string,

}



export type Products={
  id:string|number,
  title:string,
  slug:string,
  description:string,
  price:number,
  unit:string,
  inventario:number,
  image_1?:any,
  image_2?:any,
  isNew:boolean,
  isFeatured:boolean,
  product_tags?:ProductTag[],
  product_categories?:ProductCategoryTag
  stripe_product_id:string,
}
