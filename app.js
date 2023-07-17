const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600" 
const texts=  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit."

const main = document.querySelector('main')

const createCard= () =>{



  const card = document.createElement('div')
  card.classList.add('card')

  const image = document.createElement('img')
  image.src=img
  image.alt='card-product'

  const title= document.createElement('h2')
  title.textContent='title-product'

  const textCategory = document.createElement('p')
  textCategory.textContent='Category'

  const textLong= document.createElement('p')
  textLong.textContent= texts

  const price= document.createElement('p')
  price.classList.add('price')
  price.textContent= '$price'

  card.appendChild(image)
  card.appendChild(title)
  card.appendChild(textCategory)
  card.appendChild(textLong)
  card.appendChild(price)

  main.appendChild(card)

}

window.addEventListener('DOMContentLoaded', createCard)

const cards= () =>{
  for (let index = 0; index < 30; index++) {
    createCard()
  }
}

cards()

