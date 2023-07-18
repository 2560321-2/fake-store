const img= "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600"

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit."

const main = document.querySelector('main')

const createCard = ()=> {
 
  const card=document.createElement('div')
  card.classList.add('card')

  const imgCard=document.createElement('img')
  imgCard.src= img
  imgCard.alt="imagen de producto"

  const tittleProduct =document.createElement('h2')
  tittleProduct.textContent="producto"

  const category= document.createElement('p')
  category.textContent ="category"

  const lorem=document.createElement('p')
  lorem.textContent = "text"

  const price=document.createElement('p')
  price.classList= "$price"

  card.appendChild(card)
  imgCard.appendChild(imgCard)
  titleProduct.appendChild(tittleProduct)
  category.appendChild(category)
  lorem.appendChild(lorem)
  price.appendChild(price)
  main.appendChild(card)


  
}

window.addEventListener('DOMContentLoaded', createCard)

{/* <div class="card">
<img src="https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card-product">
<h2>title-product</h2>
<p>Category</p>
<p>
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit.
  </span>
  <p class="price">$price</p>
</p>      
</div> */}