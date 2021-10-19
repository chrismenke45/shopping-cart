import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Shop from "./components/Shop";
import getProductData from "./functions/getProductData";
import apiDataToArray from "./functions/apiDataToArray";
import CartView from "./components/CartView";

function App() {
  const [list, setList] = useState([]);
  const [cart, setCart] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [displayCart, setDisplayCart] = useState(false)


  useEffect(() => {
    getProductData().then(data => {
      let items = apiDataToArray(data, 16, 16)
      setList(items)
      setLoaded(true)
      
    })
  }, []);

  const displayCartToggle = () => {
    setDisplayCart(prevState => !prevState)
  }

  const addToCart = (e) => {
    let newList = list.map(item => {
      if (e.target.getAttribute('data-id') === item.itemId) {
        item.quantity = item.quantity + 1
      }
      return item;
    })
    setList(newList);
    setCart(prevState => prevState + 1)
  }

  const removeFromCart = (e) => {
    let newList = list.map(item => {
      if (e.target.getAttribute('data-id') === item.itemId) {
        if(item.quantity <= 0) {
          return item;
        } else {
        item.quantity = item.quantity - 1
        setCart(prevState => prevState - 1);
        }
      }
      return item;
    })
    setList(newList);
  }

  //console.log(items)
  return (
    <BrowserRouter>
      <Navbar displayCartToggle={displayCartToggle}/>

      <CartView list={list} displayCart={displayCart} addToCart={addToCart} removeFromCart={removeFromCart}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop list={list} loaded={loaded} addToCart={addToCart} removeFromCart={removeFromCart}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
