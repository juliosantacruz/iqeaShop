import { Products } from "./Products"

export type ProductCategory={
  id:string|number,
  title:string,
  slug:string,
  description:string,
  cover:{},
  products?:Products[]
}
