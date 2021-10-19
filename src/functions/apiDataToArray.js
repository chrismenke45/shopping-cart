function apiDataToArray(data, dataStartLocation, itemCount) {//takes data from api fetch and takes in argument on how many items to return in array
    if (itemCount + dataStartLocation > data.length) {
        // eslint-disable-next-line
        throw ('item count too high, not enough items from api')
    } else {
        let itemArray = []
        for (let i = dataStartLocation; i < itemCount + dataStartLocation; i++) {
            itemArray[i - dataStartLocation] = {
                cost: data[i].store.cost,
                itemName: data[i].item.name,
                url: data[i].item.images.icon,
                description: data[i].item.description,
                itemId: data[i].itemId,
                type: data[i].item.type,
                quantity: 0
            }
        }
        return itemArray
    }
}
export default apiDataToArray;