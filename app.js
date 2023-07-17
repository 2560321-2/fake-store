const img ="https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600";
const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit."
const main = document.querySelector('main')


const createcard = ()=>{
    const card =document.createElement('div')
    card.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.src = img
    imgCard.alt = "imagen de producto"

    const titleProduct = document.createElement('h2')
    titleProduct.textContent = "Producto"

    const category1 = document.createElement('p')
    category1.textContent = "category"

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = "Descripcion"

    const prices = document.createElement('p')
    descriptionCard.textContent = "price"
    prices.textContent = '$price'

    card.appendChild(imgCard)
    card.appendChild(titleProduct)
    card.appendChild(category1)
    card.appendChild(descriptionCard)
    card.appendChild(prices)

    main.appendChild(card)
}

window.addEventListener('DOMContentLoaded', createcard)

