let selectionCard = document.getElementById('card')

const url = 'https://sky-frontend.herokuapp.com/movies';
fetch(url)
  .then(res => res.json())
  .then(data => {
    data.map(element => {
      for (let elem in element.movies) {
    //     sectionCard.innerHTML +=`${element.movies[elem].title}`;
        for (let qualquer in element.movies[elem].images) {
          sectionCard.innerHTML +=          
        `<div class="card">
        <img class="card-img-top" style="max-width: 18rem; align-items-center" src="${(element.movies[elem].images[qualquer].url)}" alt="Card image cap">
       </div>`
          break;
        }
      }
    })
  }
  )