const options = {method: 'GET'};

fetch('https://fakestoreapi.com/products', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));