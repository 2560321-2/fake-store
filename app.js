const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600"

const main = document.querySelector('main')

const URL = 'https://fakestoreapi.com/products'
const URL2 = 'https://fakestoreapi.com/products/categories'

const search = document.getElementById('search')
const finderCategory = document.getElementById('finderCategory')

const createCard = (product) => {

  const card = document.createElement('div')
  card.classList = 'card'

  image = document.createElement('img')
  image.src = product.image
  image.alt = "Imagen del producto"

  title = document.createElement('h2')
  title.textContent = product.title

  category = document.createElement('p')
  category.textContent = product.category

  description = document.createElement('p')
  description.textContent = product.description

  price = document.createElement('p')
  price.classList = 'price'
  price.textContent = product.price

  // {card, myImg, titleH2, textCategory, textLong, textPrice} = info

  card.appendChild(image)
  card.appendChild(title)
  card.appendChild(category)
  card.appendChild(description)
  card.appendChild(price)

  main.appendChild(card)
}

function data(URL) {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
}

const createCards = async () => {
  const datas = await data(URL)
  datas.forEach(product => {
    createCard(product)
  });
}

/**
 * Lista de las categorias.
 */

async function categories(URL2){
  return await fetch(URL2)
      .then(res =>res.json())
      .then(json => console.log(json))
    }

const searchCategories = () =>{
  const newCategory = document.createElement('option')
  const categories2 = categories(URL2)
  console.log(categories2);
  // categories2.forEach(element =>{
  //   console.log(element);
  // })
}

searchCategories()


    

search.addEventListener('keyup', finderProducts)
async function finderProducts(event) {
  const products = await data(URL)
  const filterProducts = products.filter(product => product.title.includes(event.target.value))
  main.innerHTML = ''
  filterProducts.forEach(product => createCard(product));

}

window.addEventListener('DOMContentLoaded', createCards)



