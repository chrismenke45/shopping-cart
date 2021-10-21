function apiDataToArray(data, dataStartLocation, itemCount) {//takes data from api fetch and takes in argument on how many items to return in array
    if (itemCount + dataStartLocation > data.length) {
        // eslint-disable-next-line
        throw ('item count too high, not enough items from api') //have error if inputs dont make sense
    } else {
        let itemArray = []
        for (let i = dataStartLocation; i < itemCount + dataStartLocation; i++) {//add objects to aray with important info from APi
                itemArray[i - dataStartLocation] = {
                    cost: data[i].store.cost,
                    itemName: `${data[i].item.name} ${data[i].item.type}`,
                    url: data[i].item.images.icon,
                    description: data[i].item.description,
                    itemId: data[i].itemId,
                    quantity: 0
                }
                if (data[i].item.name.toLowerCase().includes(data[i].item.type.toLowerCase())) {//if theitem name already include the type, change it so the type isnt repeated
                    itemArray[i - dataStartLocation].itemName = data[i].item.name
            }
        }
        return itemArray
    }
}
export default apiDataToArray;