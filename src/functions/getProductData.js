async function getProductData() {//async function to get hero data from api
    const response = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const data = await response.json();
  // console.log(data.data)
    return data.data
  }
  export default getProductData;

  // books polih site https://wolnelektury.pl/api/books/
  //fortnite new itsms https://fortnite-api.theapinetwork.com/upcoming/get
  //firtnite all items https://fortnite-api.theapinetwork.com/store/get