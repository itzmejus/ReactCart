import React from "react";
import { useDispatch } from "react-redux";
import { view } from "../features/productData";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="btn btn-outline-success"
      onClick={()=>{
          dispatch(view({title: "chicken",image:'https://kitchmenow.com/wp-content/uploads/2020/10/JUICY-ROASTED-CHICKEN.jpg', price: 120}))
      }}>View</button>
      <button className="btn btn-outline-success">Add To cart</button>
    </div>
  );
}

export default Login;
