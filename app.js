const img = "https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600";

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit.'

const main = document.querySelector('main');

const createCard = () => {
  const card = document.createElement('div');
  card.classList.add('card');

  const imgCard = document.createElement('img');
  imgCard.src = img;
  imgCard.alt = "Imagen de producto";

  const tittleProduct = document.createElement('h2');
  tittleProduct.textContent = "Producto";

  const categoryCard = document.createElement('p');
  categoryCard.textContent = "Category";

  const description = document.createElement('p');
  description.textContent = "Text";

  const priceCard = document.createElement('p');
  price.classList = "$price"

  card.appendChild(imgCard);
  card.appendChild(tittleProduct);
  card.appendChild(categoryCard);
  card.appendChild(description);
  card.appendChild(priceCard);
  main.appendChild(card)





}

window.addEventListener('DOMContentLoaded', createCard);

/*<div class="card">
      <img src="https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card-product">
      <h2>title-product</h2>
      <p>Category</p>
      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit.
        </span>
        <p class="price">$price</p>
      </p>      
    </div>*/