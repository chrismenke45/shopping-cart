import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Shop from "./components/Shop";
import getProductData from "./functions/getProductData";
import apiDataToArray from "./functions/apiDataToArray";
import CartView from "./components/CartView";
import ItemPage from "./components/ItemPage";

function App() {
  const [list, setList] = useState([]); //list of items gotten from API
  const [cart, setCart] = useState(0) //quantity of items in cart
  const [loaded, setLoaded] = useState(false) //set to true once api has been loaded
  const [displayCart, setDisplayCart] = useState(false) //displays shopping cart if true


  useEffect(() => {//once page mounts then api is called
    getProductData().then(data => {//call api
      let items = apiDataToArray(data, 0, 32)//put data in useful array, only use some of the data
      setList(items)//set list to the api data array
      setLoaded(true)//set it to loaded
    })
    .catch(error => {
      console.log(error.message)//show error in consile
      alert("Item data not loading, please try again later") //alert user that somehting is wrong
    })
  }, []);

  const displayCartToggle = () => {
    setDisplayCart(prevState => !prevState)//this toggles the visibility of the shopping cart
  }

  const addToCart = (e) => {//this adds item to cart
    let newList = list.map(item => {//map through items
      if (e.target.getAttribute('data-id') === item.itemId) {//if item is the one that got clicked on
        item.quantity = item.quantity + 1//add to quantity
      }
      return item;//otheriwse leave as is
    })
    setList(newList);//reset list
    setCart(prevState => prevState + 1)//show 1 more cart item has been added
  }

  const removeFromCart = (e) => {//this removes items from cart
    let newList = list.map(item => {
      if (e.target.getAttribute('data-id') === item.itemId) {//if item is the one that was clicked on
        if (item.quantity <= 0) {//if item already has no quantity dont make it negative, leave as is
          return item;
        } else {
          item.quantity = item.quantity - 1//lower item quantity
          setCart(prevState => prevState - 1);//lower total cart quantity
        }
      }
      return item;
    })
    setList(newList);//reset list
  }

  return (
    <BrowserRouter>
      <Navbar displayCartToggle={displayCartToggle} cartQuantity={cart} />

      <CartView list={list} displayCart={displayCart} addToCart={addToCart} removeFromCart={removeFromCart} displayCartToggle={displayCartToggle}/>
      {/*bellow is tall the different pages that can be switched to*/}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop list={list} loaded={loaded} addToCart={addToCart} />
        </Route>
        <Route path="/shop/:id" render={({ match }) => (
          <ItemPage
            list={list}
            pageId={match.params.id}
            loaded={loaded}
            addToCart={addToCart}
          />
        )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
