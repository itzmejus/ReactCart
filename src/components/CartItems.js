import React from "react";
import { useSelector } from "react-redux";
function CartItems() {
  const data = useSelector((state) => state.product.value);
  return (
    <div>
      
    </div>
  );
}

export default CartItems;
