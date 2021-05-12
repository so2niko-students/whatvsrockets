export default class ViewDates{
    btnsAddToFav = '.btn_add_to_fav';
    btnsAddToForm = '.btn_add_to_form';
    constructor(handleClickAddToFavorites, handleClickAddToForm){
        this.dom = document.querySelector('.dates');
        this.handleClickAddToFavorites = handleClickAddToFavorites;
        this.handleClickAddToForm = handleClickAddToForm;
    }

    render(d){
        this.dom.innerHTML = d.map(el => this.renderCard(el)).join('');

        this.addListeners();
    }

    renderCard({ img, date, name, createdAt, loc_city, loc_country, id }){
        return `<div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="${ img }" alt="${ name }">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">${ name } </p>
              <p class="title is-4">${ date } </p>
            </div>
          </div>
          <div class="content">
            <p>${ loc_country }, ${ loc_city }</p>
            Created at <time datetime="2016-1-1">${ createdAt }</time>
            <div>
                <button 
                    class="button is-success is-light btn_add_to_fav"
                    data-id="${ id }">Add to favorites</button>
                <button 
                    class="button is-info is-light btn_add_to_form"
                    data-id="${ id }">Add to form</button>
            </div>
          </div>          
        </div>
      </div>`;
    }

    addListeners(){
        [...document.querySelectorAll(this.btnsAddToFav)]
            .forEach(btn => btn.addEventListener('click', this.handleClickAddToFavorites));

        [...document.querySelectorAll(this.btnsAddToForm)]
            .forEach(btn => btn.addEventListener('click', this.handleClickAddToForm));
    }
}