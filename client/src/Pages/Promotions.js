import React,{useEffect,useState} from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../components/product";

const Promotion = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [productData, setProductData] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:5000/api/products').then(res=>{
          if(res.data.status){
              setProductData(res.data.result);
          }else{
              console.log("Something went wrong");
          }
          
      }).catch(err=>{
          console.log(err);
      });

  },[setProductData]);

  const product = productData.map((item )=>(<Product 
    name={item.EventName}
    price={item.EventPrice}
    url={item.EventImg}
    description={item.EventDescription}
  />));

  return (
    //autoPlay={this.props.deviceType !== "mobile" ? true : false}
    <div className="promotion-container">
      <h1 className="title"> Promotion</h1>
      <Carousel responsive={responsive} infinite={true}   autoPlay={true}
        autoPlaySpeed={2000} >
            {product}
      </Carousel>
      ;
    </div>
  );
};

export default Promotion;
