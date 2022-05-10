import React from "react";
import { Link } from "react-router-dom"

function Shop(props) {
    const { list, loaded, addToCart } = props
    return (
        <article className="itemDisplay">
            {
                loaded ?//if API hasnt loaded dont diplay any items

                    <div className="itemDisplayGrid">
                        {list.map((item) => {
                            // eslint-disable-next-line
                            {/*map trhough items and add them to grid*/ }
                            return <section key={item.itemId} className="itemCard">
                                {/*link below makes it so each item will take you to its page if clicked on */}
                                <Link data-id={item.itemId} to={`/shop/${item.itemId}`} style={{ textDecoration: 'none' }}>
                                    <figure>
                                        <img className="itemImg" src={item.url} alt="not available" />
                                        <figcaption>
                                            {item.itemName.toUpperCase()}
                                            <br></br>
                                            {`$ ${item.cost}`}

                                        </figcaption>
                                    </figure>
                                </Link>

                                <button data-id={item.itemId} onClick={addToCart} className="addBtn">Add to Cart</button>
                            </section>
                        })
                        }
                    </div>
                    :
                    <div>Loading...</div>
            }
        </article>
    );
}

export default Shop;

