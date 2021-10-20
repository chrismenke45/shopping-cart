import React from "react";

function ItemPage(props) {
    const { list, pageId } = props
    const item = list.filter(listItem => listItem.itemId === pageId)
    console.log(item)
    return (
        <div>
            {pageId}
        </div>
    );
}

export default ItemPage;