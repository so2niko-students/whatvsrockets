export default class ViewChange{
    constructor(handleSubmitChangeName){
        this.DOMFormWrapper = document.querySelector('.form_change');
        this.handleSubmitChangeName = handleSubmitChangeName;
    }

    render(date){
        this.DOMFormWrapper.innerHTML = this.renderForm(date);
        document.querySelector('.btn_submit_change_name').addEventListener('click', this.handleSubmitChangeName);
    }

    renderForm({ name }){
        return `<div class="field">
            <label class="label" for="inp_name">Name</label>
            <div class="control">
            <input class="input" type="text" 
                placeholder="No one is chosen" 
                id="inp_name" value="${ name }">
            </div>
            <button 
                class="button is-danger is-light btn_submit_change_name">Submit</button>
            </div>`;
    }

    getName(){
        return document.querySelector('#inp_name').value;
    }

}