export type ProductCart = {
  id: string;
  title: string;
  price: number;
  unit: string;
  quantity: number;
};

export type Cart = {
  id: string;
  products: ProductCart[];
};
