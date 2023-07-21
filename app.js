const URL = 'https://fakestoreapi.com/products';
const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600";
const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit.`;

const finder= document.getElementById('finder-product')

finder.addEventListener('keyup', finderProducts)

  async function finderProducts(event){
    const products =await getObjects(URL)
    
    const filterProducts= products.filter(product=> product.title.toUpperCase().includes((event.target.value).toUpperCase()))
    console.log(filterProducts);

    main.innerHTML=''
    filterProducts.forEach(product=> createCard(product))
  }

const main = document.querySelector('main');

const createCard = (product) => {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const imgCard = document.createElement('img');
  imgCard.src = product.image || img;
  imgCard.alt = "Imagen de producto";

  const titleProduct = document.createElement('h2');
  titleProduct.textContent = product.title ;

  const categoryCard = document.createElement('p');
  categoryCard.textContent = product.category ;

  const descriptionCard = document.createElement('p');
  descriptionCard.textContent = product.description ;

  const priceCard = document.createElement('p');
  priceCard.classList.add('price');
  priceCard.textContent = `$${product.price}`;

  card.appendChild(imgCard);
  card.appendChild(titleProduct);
  card.appendChild(categoryCard);
  card.appendChild(descriptionCard);
  card.appendChild(priceCard);

  main.appendChild(card);
};

function getObjects(URL) {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));  
}

const makingCards = async () => {
  const products = await getObjects(URL);
  products.forEach(product => {
    createCard(product);
    
  });
};

window.addEventListener('DOMContentLoaded', makingCards);


