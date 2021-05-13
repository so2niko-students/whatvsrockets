export default class Date1000{
    day = 1;
    static #instanse = null;

    constructor(){
        if(!Date1000.#instanse){
            Date1000.#instanse = this;
        }

        return Date1000.#instanse;
    }

    #convert(str){//mm-dd-yyyy
        return str.replace(/(\d{1,2})-(\d{1,2})-(\d{4})/, '$2-$1-$3');
    }

    get methods(){
        return {
            convert : this.#convert
        };
    }
}