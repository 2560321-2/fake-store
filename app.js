const img='https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600';

const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eveniet unde sunt hic mollitia nihil reprehenderit, vero neque sint saepe debitis quibusdam iusto fugiat illum voluptatum quo repellendus veritatis impedit.';

const mainCard = document.getElementById('main');

const createCard =() => {
    const card =document.createElement('div');
    card.classList.add('card');

    const imgCard=document.createElement('img');
    imgCard.src =img;
    imgCard.alt = 'imagen de la carta';

    const title = document.createElement('h2');
    title.textContent = 'producto';

    const titleCategory=document.createElement('p');
    titleCategory.textContent = 'category';

    const boxText = document.createElement('p');
    boxText.textContent= description;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent ='$price';

    card.appendChild(card);
    imgCard.appendChild(imgCard);

}

window.addEventListener('DOMContentLoaded', createCard);
