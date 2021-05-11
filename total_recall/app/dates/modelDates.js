export default class ModelDates{
    #apiUrl = 'https://609a76db0f5a13001721b1e9.mockapi.io/api/v1/dates';
    #data = [];

    constructor(){
    }

    load(){
        return fetch(this.#apiUrl)
            .then(r => r.json())
            .then(d => {
                this.#data = d;
                return this.data;
            });
    }

    get data(){
        // return this.#data.map(el => Object.assign({}, el));
        return this.copy(this.#data);
    }

    getDateById(find_id){
        return this.copy(this.#data.find(({ id }) => id === find_id));
    }

    copy(d){
        return JSON.parse(JSON.stringify(d));
    }

}