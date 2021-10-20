import React from "react";
import { Link } from "react-router-dom"

function Shop(props) {
    const { list, loaded, addToCart, removeFromCart } = props
    return (
        <div className="itemDisplay">
            {
                loaded ?
                    <div className="itemDisplayGrid">
                        {list.map((item) => {
                            return <div key={item.itemId}>
                                <Link data-id={item.itemId} to={`/shop/${item.itemId}`}>
                                    <figure className="itemCard">
                                        <img className="itemImg" src={item.url} alt="not available" />
                                        <figcaption>
                                            {item.itemName.toUpperCase() + ' ' + item.type.toUpperCase()}
                                        </figcaption>
                                    </figure>
                                </Link>
                                <p>{`$ ${item.cost}`}</p>
                                <button data-id={item.itemId} onClick={addToCart}>Add to Cart</button>
                                <button data-id={item.itemId} onClick={removeFromCart}>Remove from Cart</button>
                            </div>
                        })
                        }
                    </div>
                    :
                    <div>Shop</div>
            }

        </div>
    );
}

export default Shop;

