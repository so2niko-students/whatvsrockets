export default class Model{
    url = 'http://api.open-notify.org/iss-now.json';

    load(){
        return fetch(this.url)
            .then(r => r.json())
            .then(d => {
                const {
                    latitude,
                    longitude
                } = d.iss_position;
                const arr = [ +longitude, +latitude];
                const str = arr.map(el => el.toFixed(0)).join(', ');
                return { arr, str };
            });
    }
}