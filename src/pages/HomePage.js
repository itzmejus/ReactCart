import React,{useState,useEffect} from "react";
import axios from "axios";
import Banner from "../components/Banner";
import FoodItemList from "../components/FoodItemList";
import SpecialDishes from "../components/SpecialDishes";
function HomePage() {
  let [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setMenuItems(res.data.categories);
      });
  }, []);
  return (
    <div>
      <Banner />
      <div>
        <SpecialDishes allItemsData={menuItems} />
        <FoodItemList allItemsData={menuItems} />
        
      </div>
    </div>
  );
}

export default HomePage;
