import Model from './model.js';
import View from './view.js';

export default class Controller{
    constructor(){
        this.model = new Model(this.handleLoadData);
        this.view = new View(this.handleClickGenerate);
    }

    handleClickGenerate = () => {
        this.model.load();
    }

    handleLoadData = (data) => {
        this.view.renderUser(data);
    }
}