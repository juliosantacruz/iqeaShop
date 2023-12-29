"use client";

import React, { useState } from "react";
import {useCartStore} from '@/store/CartStore'
enum Operation {
  minus = "minus",
  plus = "plus",
}

export default function AddCart(props: any) {
  const [quantity, setQuantity] = useState<number>(0);

  const {addProduct} = useCartStore()

  const handleProductQuantity = (operation: Operation) => {
    if (operation === "minus") {
      if (quantity <= 0) {
        return setQuantity(0);
      }

      setQuantity(quantity - 1);
    }

    if (operation === "plus") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddProduct=()=>{
    const cartProduct ={
      id:props.id,
      title:props.title,
      price:props.price,
      unit:props.unit,
      quantity:quantity,

    }
    addProduct(cartProduct)
    // console.log(cartProduct)
  }

  return (
    <>
      <div className="productPrice">
        <p>
          ${props.price}/{props.unit}
        </p>
      </div>
      <div className="quantity">
        <div className="cantidad">{quantity}</div>
        <div className="addButton">
          <button
            onClick={() => handleProductQuantity(Operation.minus)}
            className="minusBtn"
          >
            -
          </button>
          <button
            onClick={() => handleProductQuantity(Operation.plus)}
            className="plusBtn"
          >
            +
          </button>
        </div>
      </div>
      <div className="cartButton">
        <button className="addCart" onClick={handleAddProduct}>Agregar a Carrito</button>
        <button className="buyNow">Comprar Ahora</button>
      </div>
    </>
  );
}
