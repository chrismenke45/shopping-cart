import React from "react";

function CartView(props) {
    const { list, displayCart, addToCart, removeFromCart } = props

    const sumTotal = (arr) => {
        return arr.reduce((sum, obj) => sum + obj.cost * obj.quantity, 0)
    }

    return (
        <div className="cartDisplay">
            {
                displayCart ?
                    <div className="cartDisplayGrid">
                        <h3>Your Shopping Cart</h3>
                        {list.map((item) => {
                            if (item.quantity == 0) {
                                return null
                            } else {
                                return <div key={item.itemId}>
                                    <h4>
                                        {item.itemName.toUpperCase() + ' ' + item.type.toUpperCase()}
                                    </h4>

                                    <p>{item.quantity}</p>
                                    <button data-id={item.itemId} onClick={addToCart}>plus</button>
                                    <button data-id={item.itemId} onClick={removeFromCart}>minus</button>
                                </div>
                            }
                        })

                        }
                        <p>{sumTotal(list)}</p>
                    </div>
                    :
                    <div>Your Shopping Cart unshown</div>
            }
        </div>
    );
}

export default CartView;