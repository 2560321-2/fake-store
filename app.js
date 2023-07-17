const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600"

const main = document.querySelector('main')

const createCard = () => {

  const card = document.createElement('div')
  card.classList = 'card'

  const myImg = document.createElement('img')
  myImg.src = img
  myImg.alt = "Imagen del producto"

  const titleH2 = document.createElement('h2')
  titleH2.textContent = "Producto"

  const textCategory = document.createElement('p')
  textCategory.textContent = "Category"

  const textLong = document.createElement('p')
  textLong.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit."

  const textPrice = document.createElement('p')
  textPrice.classList = 'price'
  textCategory.textContent = "$price"

  card.appendChild(myImg)
  card.appendChild(titleH2)
  card.appendChild(textCategory)
  card.appendChild(textLong)
  card.appendChild(textPrice)

  main.appendChild(card)
}

window.addEventListener('DOMContentLoaded', createCard)

const thirtyCard = () => {
  for (let index = 0; index < 30; index++) {
    createCard()
  }
}

thirtyCard()


