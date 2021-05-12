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

    findMinMaxDates(){
        const { min, max } = this.#data.reduce((acc, el) => {
            const d = new Date(el.date);
            if(d < acc.min) acc.min = d;
            if(d > acc.max) acc.max = d;
            return acc;
        },{
            max : 1,
            min : Number.MAX_SAFE_INTEGER
        });

        return {
            min : this.convertDate(min),
            max : this.convertDate(max),
        }
    }

    convertDate(date){
        const year = date.getFullYear();
        const month = this.getLeaderZero(+date.getMonth() + 1);
        const dateDay = this.getLeaderZero(date.getDate());

        return `${ year }-${ month }-${ dateDay }`;
    }

    getLeaderZero(d){
        return d < 10 ? `0${ d }` : d; 
    }

    filterByDates(dates){
        const min = new Date(dates.min);
        const max = new Date(dates.max);

        const filteredDates = this.#data.filter(el => {
            const d = new Date(el.date);
            return d > min && d < max;
        });

        return filteredDates;
    }

}