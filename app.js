const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600";

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit.";

const main = document.querySelector('main');

const createCard = () => {
  const card = document.createElement('div');
  card.classList.add('card');

  const imgCard = document.createElement('img');
  imgCard.src = img;
  imgCard.alt = "imagen de producto";

  const titleProduct = document.createElement('h2');
  titleProduct.textContent = "producto";

  const category = document.createElement('p');
  category.textContent = "category";

  const lorem = document.createElement('p');
  lorem.textContent = "text";

  const price = document.createElement('p');
  price.classList.add('price'); // Use add() method instead of assigning a string directly

  card.appendChild(imgCard);
  card.appendChild(titleProduct);
  card.appendChild(category);
  card.appendChild(lorem);
  card.appendChild(price);

  main.appendChild(card); // Append the card to the main element
}

const URL = 'https://fakestoreapi.com/products?limit=5'

function objects(URL) {
  return fetch(URL)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.error(err));  
}

const createCards= async ()=>{
  const datas= await objects(URL)
  console.log(datas)
  datas.forEach(product => {
    createCard()
  });
}

window.addEventListener('DOMContentLoaded', createCard)




