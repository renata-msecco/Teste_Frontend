let carousel = document.getElementById('carousel')
let pick = document.getElementById('pick')

const link = 'https://sky-frontend.herokuapp.com/movies';

function getApi() {

   fetch(link)
      .then(res => res.json())
      .then(data => {
         data.map(element => {
            picCarousel(element.items)
         })
      })
   fetch(link)
      .then(res => res.json())
      .then(data => {
         getCategories(data[2].movies)
         console.log(data)
      })
}

function picCarousel(item) {
  carousel.innerHTML =
    `<div class="carousel-item active">
      <img class="d-block w-100" src="${item[0].images[0].url}"  alt="Poster do Filme ${item[0].title}">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${item[1].images[0].url}"  alt="Poster do Filme ${item[1].title}">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${item[2].images[0].url}"  alt="Poster do Filme ${item[2].title}">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${item[3].images[0].url}"  alt="Poster do Filme ${item[3].title}">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${item[4].images[0].url}"  alt="Poster do Filme ${item[4].title}">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>`

}

  function getCategories(picture) {
    console.log(picture);
    let categories = new Map();
    for (let i = 0; i < picture.length; i++) {
        let splits = picture[i].categories.split(', ');
        console.log(splits)
        splits.forEach(element => {
            console.log(element)
            let cardsCategories = categories.get(element);
            if (cardsCategories === undefined) {
                cardsCategories = [picture[i]];
                categories.set(element, cardsCategories);
            } else {
                cardsCategories.push(picture[i])
            }
        });
    }

    categories.forEach(function (picture,section ) {
        let divCategoria = document.createElement('div')
        pick.appendChild(divCategoria);
        let titleCategoria = document.createElement('h5')
        pick.appendChild(titleCategoria)
        divCategoria.classList.add('div-categoria')
        titleCategoria.innerHTML += section
        for (let i = 0; i < picture.length; i++) {
            let menuCard = document.createElement('div');
            divCategoria.appendChild(menuCard);
            menuCard.classList.add('menuCard')
            menuCard.innerHTML += `<img class="cardsCategories" src="${picture[i].images[0].url}" alt="Card do filme">`
        }

    }, categories)

}
getApi()