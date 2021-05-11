import ViewChange from './viewChange.js';
import ModelChange from './modelChange.js';

export default class ControllerChange{
    constructor(publisher){
        this.view = new ViewChange(this.handleSubmitChangeName);
        this.model = new ModelChange();

        this.publisher = publisher;
        this.publisher.subscribe('ADD_TO_FORM', this.handleAddToForm);
    }

    handleAddToForm = date => {
        console.log(date);
        this.model.date = date;
        this.view.render(date);
    }

    handleSubmitChangeName = () => {
        const name = this.view.getName();
        this.model.updateDate(name);
    }
}