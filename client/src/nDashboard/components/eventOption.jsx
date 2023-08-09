import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

function EventOption() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date');
  const type = queryParams.get('ticketType');

  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/event-options')
      .then(response => {
        setItems(response.data.result);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);
  useEffect(() =>{
    
  })


  const addToCart = (item) => {
    if (!cart.find(cartItem => cartItem.EventID === item.EventID)) {
      setCart([...cart, item]);
      showMessage(`${item.EventName} added to cart`);
      setTimeout(() => {
        hideMessage();
      }, 3000);
    } else {
      showMessage(`${item.EventName} is already in the cart`);
      setTimeout(() => {
        hideMessage();
      }, 3000);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem !== item);
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const showMessage = (text) => {
    setMessage(text);
  };

  const hideMessage = () => {
    setMessage('');
  };

  const calculateTotalCost = () => {
    let cost = 0;
    cart.forEach(item => {
      cost += item.EventPrice;
    });
    return cost.toFixed(2);
  };

  const handleCheckout = () => {
    let cost = calculateTotalCost();
    console.log(cost);
    // Handle checkout logic, navigate to checkout page, etc.
    const data = {cart:cart, totalCost: cost, type:type, date: date};
    const encodedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/dashboard/book-ticket/check-out?data=${encodedData}`);
  };



  return (
    <div className="shop">
    <div className="cart-icon" onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      <span className="cart-item-count">{cart.length}</span>
    </div>
    {showCart && (
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.EventID}>
              {item.EventName} - ${item.EventPrice}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
    )}
    {message && (
      <div className="message">
        {message}
      </div>
    )}
    <div className="items">
      <h2>Items for Sale</h2>
      <div className="item-list">
        {items.map(item => (
          <div key={item.EventID} className="item-card">
            <h3>{item.EventName}</h3>
            <p>${item.EventPrice}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default EventOption;




