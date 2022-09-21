import React, { useState } from "react";

function SpecialDishes(props) {
  const [singleItem, setSingleItem] = useState("");
  const indiviadualItem = (id) => {
    // let indiviadualItemData=id
    setSingleItem(id);
    console.log(id);
  };
  const SpecialDishesList = props.allItemsData;
  let maxSpecialDishes = 5;
  return (
    <div style={{ backgroundColor: "#FBEEF0" }}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "cursive",
          fontWeight: "bolder",
        }}
      >
        Our Special Dishes
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // margin: "5px",
          // backgroundColor: "#E589A8",
        }}
      >
        {SpecialDishesList.map((item, index) => {
          if (index < maxSpecialDishes) {
            return (
              <div
                className="card"
                style={{
                  width: "15rem",
                  alignItems: "center",
                  margin: "5px",
                  marginLeft: "5px",
                  marginBottom: "5px",
                  textAlign: "center",
                  backgroundColor: "#E5E5E5",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={item.strCategoryThumb}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "180px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.strCategory}</h5>
                  <button
                    className="btn btn-outline"
                    style={{
                      backgroundColor: "#E7D3D9",
                      color: "#0F0E0E",
                    }}
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      indiviadualItem(item);
                    }}
                  >
                    View
                  </button>
                  <h1></h1>
                </div>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog "
                    style={{ display: "flex", justifyContent: "center" ,textAlign:"center"}}
                  >
                    <div class="modal-content"  >
                      <div class="modal-header" >
                        <h5 class="modal-title" id="exampleModalLabel">
                          {singleItem.strCategory}
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <img
                          src={singleItem.strCategoryThumb}
                          style={{ width: "180px" }}
                        />
                      </div>
                      <div class="modal-body"
                      style={{fontSize:"15px"}}>
                        <p>{singleItem.strCategoryDescription}</p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Chicken Soup
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <img src="https://th.bing.com/th/id/OIP.4jw9ULBKY-QHRBdfd2bhOgHaFA?pid=ImgDet&rs=1" />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="modal-dialog modal-dialog-scrollable">...</div> */}
      </div>
    </div>
  );
}

export default SpecialDishes;
