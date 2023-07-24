const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600" 
const texts=  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit."
const URL = 'https://fakestoreapi.com/products'
const main = document.querySelector('main')


const createCard= (product) =>{


  const card = document.createElement('div')
  card.classList.add('card')

  const image = document.createElement('img')
  image.src=product.image
  image.alt='card-product'

  const title= document.createElement('h2')
  title.textContent=product.title

  const textCategory = document.createElement('p')
  textCategory.textContent=product.category

  const textLong= document.createElement('p')
  textLong.textContent= product.description

  const price= document.createElement('p')
  price.classList.add('price')
  price.textContent= product.price

  card.appendChild(image)
  card.appendChild(title)
  card.appendChild(textCategory)
  card.appendChild(textLong)
  card.appendChild(price)

  main.appendChild(card)

}



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
    createCard(product)
  });

}

search.addEventListener("keyup", finderProducts);

async function finderProducts(event) {
  const products = await objects(URL);
  const filterProducts = products.filter((product) =>
    product.title.includes(event.target.value)
  );
  main.innerHTML = "";
  filterProducts.forEach((product) => createCard(product));
}



window.addEventListener('DOMContentLoaded', createCards)



