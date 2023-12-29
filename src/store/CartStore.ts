import { ProductCart } from "@/types/Cart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


interface CartState {
  products:ProductCart[]
  addProduct:(product:ProductCart)=>void
}

export const useCartStore= create<CartState>()(
  persist(
    (set) => ({
      products:[],
      // addProduct:(product:ProductCart)=>
      //   set((state)=>({
      //     products: state.products.find((productFind)=>product.id===productFind.id)?
      //     [...state.products, {...productFind, product}]:
      //     [...state.products, product]
      //     ,
      //   }))
      addProduct: (product: ProductCart) =>
        set((state) => {
          const existingProduct = state.products.find((productFind) => product.id === productFind.id);

          if (existingProduct) {
            // Update the existing product (e.g., increase quantity)
            console.log('exitente', existingProduct)
            const updatedProducts = state.products.map((p) =>
              p.id === existingProduct.id ? { ...p, quantity: product.quantity  } : p
            );

            return { products: updatedProducts };
          } else {
            // Add the new product to the cart
            return { products: [...state.products, product] };
          }
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
