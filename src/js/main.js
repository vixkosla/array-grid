
var cardContainer = document.querySelector('.card-container');

fetch('https://jsonplaceholder.typicode.com/photos')

  .then(response => response.json())
  
  .then(function(json){
    for (let i = 0 ; i < 20 ; i++ ) {

        debugger

        let card = document.createElement('div');
        let description = document.createElement('div');

        card.classList.add('card');
        description.classList.add('description');

        let url = json[i].url;
        let title = json[i].title;

        console.log(json[i]);

        card.innerHTML = `<img src="${url}">`;
        description.innerHTML = `<p>${title}</p><span>album 1</span>`;

        card.appendChild(description);
        cardContainer.appendChild(card)
    }
  });

// const response = async() => fetch('https://jsonplaceholder.typicode.com/todos/1');

// console.log(response.json());

// const myJson = await response.json();

// console.log(myJson.length);