const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600"

const createCard = () => {
  const card = document.createElement("div");
  card.classList.add("card");

  const Img = document.createElement('img')
  Img.src = img
  Img.alt = "Imagen del producto"

  const title2 = document.createElement('h2')
  title2.textContent = "Producto"

  const textCategory = document.createElement('p')
  textCategory.textContent = "Category"

  const textLong = document.createElement('p')
  textLong.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt."

  const textPrice = document.createElement('p')
  textPrice.classList = 'price'
  textCategory.textContent = "$price"

  card.appendChild(Img)
  card.appendChild(title2)
  card.appendChild(textCategory)
  card.appendChild(textLong)
  card.appendChild(textPrice)

  main.appendChild(card)
  
}

window.addEventListener('DOMContentLoaded', createCard);