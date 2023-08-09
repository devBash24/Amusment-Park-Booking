import React from "react";


const Product = (props) => {

    return (
        <div className="card">
            <img className="product--image" src={"images/"+props.url} alt="#"/>
            <h4>{props.name}</h4>
            <p className="price">{"$"+props.price}</p>
            <p>{props.description}</p>
            <button className="cart">Book Now</button>
        </div>
    );
}

export default Product;