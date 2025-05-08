import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import Item from "../components/Item/Item";
import './Css/ShopCategory.css'
import Footer from "../components/Footer/Footer";
const ShopCategory = (props) => {
  const { allAnimalsData } = useContext(ShopContext);

  return (
    <div className="content-div">
      
      <div className="banner-holder">
        <img src={props.banner} alt={props.banner} className="banner" />
      </div>
      
      <div className="main-holder">
        {allAnimalsData.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                breed={item.breed}
                price={item.price}
                gender={item.gender}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Footer/>
    </div>
  );
};

// Filter animals based on category prop
// const filteredAnimals = allAnimalData.filter(item => item.category === props.category);

export default ShopCategory;
