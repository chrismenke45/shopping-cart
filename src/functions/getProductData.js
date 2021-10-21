async function getProductData() {//async function to get item data from api
    const response = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const data = await response.json();
    return data.data
  }
  export default getProductData;