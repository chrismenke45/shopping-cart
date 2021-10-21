import React from "react";

function ItemPage(props) {
    const { list, pageId, loaded, addToCart } = props
    const [item] = list.filter(listItem => listItem.itemId === pageId)
    console.log(item)
    console.log(loaded)
    return (
        <div className="itemPage">
            {loaded ?//only display if api has been succesfully called
                <div className="individualPage">
                    <h2>{item.itemName}</h2>
                    <img src={item.url} alt="Not available at this time" />
                    <p>{item.description}</p>
                    <p>${item.cost}</p>
                    <button data-id={item.itemId} onClick={addToCart} className="addBtn">Add to Cart</button>
                </div>
                :
                <h3>Loading...</h3>
            }
        </div>
    );
}

export default ItemPage;