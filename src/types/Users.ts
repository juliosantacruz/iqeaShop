import { Orders } from "./Orders";

export interface User{
  username:string,
  email:string,
  role:string,
  orders?:Orders[]
}
