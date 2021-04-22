# class

литерально

```js
const o = {
    w : 3, 
    h : 3, 
    d : 2
};
```

с помощью классов

```js
class Box{
    #w;
    #h; 
    #d;
    
    static count = 0;

    static getCount(){
        return `Count of object class Box = ${ Box.count }`;
    }

    constructor(w, h, d){
        this.setSizes(w, h, d);
        Box.count++;
    }

    setSizes(w, h, d){
        this.#w = w;
        this.#h = h;
        this.#d = d;
    }
    getVolume(){
        const v = this.#w * this.#h * this.#d;
        return v;
    }
    setW(w){
        if(w < 0 || w > 1000000 || isNaN(+w)){
            return false;
        }

        this.#w = w;
    }

    #invalidWHD(len){
        return len < 0 || len > 1000000 || isNaN(+len);
    }

    set w(width){ //setter, receive 1 argument
        if(this.#invalidWHD(width)){
            return false;
        }

        this.#w = width;
    }

    set h(height){ 
        if(this.#invalidWHD(height)){
            return false;
        }

        this.#h = height;
    }

    set d(depth){ 
        if(this.#invalidWHD(depth)){
            return false;
        }

        this.#d = depth;
    }

    get w(){// getter, no arguments
        return this.#w;
    }
}

const b = new Box(3,3,2);
```

через __this__ можно обращаться как к свойствам объекта, так и к его методам.

__super__ в конструкторе ребенка должен быть вызван до того момента, как будет обращение к __this__
