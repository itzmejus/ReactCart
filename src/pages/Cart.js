import React from "react";

function Cart({ productAddedToCart }) {
  // const DataOfCartItem=props.productAddedToCart;
  // console.log(productAddedToCart);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>cart items</h1>
      <div
        className="container"
        style={{
          backgroundColor: "#E5E5E5",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {productAddedToCart.map((item, key) => {
          return (
            <div style={{ textAlign: "center" }}>
              <img style={{ height: "80px" }} src={item.image} />
              <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
