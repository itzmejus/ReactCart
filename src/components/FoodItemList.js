import React, { useState } from "react";
import Cart from "../pages/Cart";

function FoodItemList(props) {
  const [addedToCartItem, setAddedToCartItem] = useState([ ]);
  const DataOfFood = props.allItemsData;
  // console.log("props is ", DataOfFood);

  const addToCart = (cartItemImage, cartItemName) => {
    setAddedToCartItem([
      ...addedToCartItem,
      {
        image: cartItemImage,
        title: cartItemName,
      },
    ]);
    // console.log(addedToCartItem);
  };

  // console.log(addedToCartItem);
  return (
    <div style={{ backgroundColor: "#FBEEF0" }}>
      <Cart productAddedToCart={addedToCartItem} />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "cursive",
          fontWeight: "bolder",
        }}
      >
        Available Items
      </h1>
      <div
        style={{
          display: "flex",
          paddingLeft: "20px",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {DataOfFood.map((item, key) => {
            return (
              <div
                key={key}
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
                <img
                  src={item.strCategoryThumb}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.strCategory}</h5>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      addToCart(item.strCategoryThumb, item.strCategory);
                    }}
                  >
                    Add To Cart
                  </button>
                  <h1></h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FoodItemList;
