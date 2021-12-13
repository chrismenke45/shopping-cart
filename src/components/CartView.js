import React from "react";

function CartView(props) {
    const { list, displayCart, addToCart, removeFromCart, displayCartToggle } = props

    const sumTotal = (arr) => {
        return arr.reduce((sum, obj) => sum + obj.cost * obj.quantity, 0)
    }

    return (
        <aside className="cartDisplay">

            {
                displayCart ?//only display if user has clicked to make it visible
                    <div className="cartDisplayGrid">
                        <button className="closeBtn" onClick={displayCartToggle}>X</button>
                        <h2>Your Shopping Cart</h2>
                        {list.map((item) => {
                            if (item.quantity === 0) {
                                return null
                            } else {
                                return <div key={item.itemId} className="cartItemDisplay">
                                    <img className="cartPicture" src={item.url} alt="Not available at this time" />
                                    <h4 className="cartItemTitle">
                                        {item.itemName.toUpperCase()}
                                    </h4>
                                    <div className="cartItemQuantity">
                                        <button data-id={item.itemId} onClick={addToCart}>+</button>
                                        <p> {item.quantity} </p>
                                        <button data-id={item.itemId} onClick={removeFromCart}>-</button>
                                    </div>
                                </div>
                            }
                        })

                        }
                        {sumTotal(list) !== 0 ? //if cart is empty then say that, otherwise show total
                            <p>Total: ${sumTotal(list)}</p>
                            :
                            <p>Your cart is empty</p>
                        }

                    </div>
                    :
                    null
            }
        </aside>
    );
}

export default CartView;