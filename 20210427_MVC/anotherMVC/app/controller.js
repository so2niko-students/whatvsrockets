import Model from "./model.js";
import View from "./view.js";

export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View();

        this.timer = setInterval(this.load, 3000);
    }

    load = () => {
        this.model.load()
            .then(d => this.view.addLayer(d));
    }
}