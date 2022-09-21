import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
function CartItems() {
  const data = useSelector((state) => state.data.value);
  // console.log(data);
  return (
    <div
      className="card"
      style={{
        width: "15rem",
        alignItems: "center",
        marginLeft: "5px",
        marginBottom: "5px",
        textAlign: "center",
        backgroundColor: "#E5E5E5",
      }}
    >
      <h1>{data.title}</h1>
      <p>{data.price}</p>
      <img src={data.image} className="card-img-top" />
      <Login />
    </div>
  );
}

export default CartItems;
