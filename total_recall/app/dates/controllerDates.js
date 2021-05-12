import ModelDates from './modelDates.js';
import ViewDates from './viewDates.js';

export default class ControllerDates{
    constructor(Publisher){
        this.model = new ModelDates();
        this.view = new ViewDates(this.handleClickAddToFavorites, this.handleClickAddToForm);

        this.load();
        this.publisher = Publisher;
        this.publisher.subscribe('TO_RELOAD_DATES', this.handleReloadDates);
        this.publisher.subscribe('FILTER_BY_DATES', this.handleFilterByDates);
    }

    load(){
        this.model.load()
            .then(d => {
                this.view.render(d);
                const minMaxDates = this.model.findMinMaxDates();    
                this.publisher.notify('FIND_MIN_MAX_DATES', minMaxDates);
            });

    }

    handleClickAddToFavorites = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_FAVORITES', date);
    }

    handleClickAddToForm = ev => {
        const date = this.getDateByEvent(ev);
        this.publisher.notify('ADD_TO_FORM', date);
    }

    getDateByEvent(ev){
        const id = ev.target.dataset.id;
        return this.model.getDateById(id);
    }

    handleReloadDates = () => {
        this.load();
    }

    handleFilterByDates = dates => {
        console.log(dates);
        const filteredDates = this.model.filterByDates(dates);
        this.view.render(filteredDates);
    }
}