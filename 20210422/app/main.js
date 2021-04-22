
const o = {
    w : 3, 
    h : 3, 
    d : 2
};

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
    get h(){
        return this.#h;
    }
    get d(){
        return this.#d;
    }


}

class Box2{
    setSizes(w, h, d){
        this.w = w;
        this.h = h;
        this.d = d;
    }
}
// SIZE
// camelCase
// PascalCase

const b = new Box(3,3,2);
const b3 = new Box(1,5,2);
const b2 = new Box2();
b2.setSizes(3,3,2);

b.setW('тысяча');
b.w = 1000; // b.w(1000);
console.log(o);
console.log(b);
console.log(b.getVolume());
console.log(b.w);
// b.#checkWHD(100000000000000000000);

console.log(Box.getCount());

class BoxMagic extends Box{
    #material;
    #weight;
    #thickness;
    // #w;
    // #h;
    // #d;
    constructor(w, h, d, material, weight, thickness){
        console.log(222);
        super(w, h, d);
        this.#material = material;
        this.#weight = weight;
        this.#thickness = thickness;
    }

    getVolume(){
        const thickness2 = this.#thickness * 2;
        const v = (super.w + thickness2) * (super.h + thickness2) * (super.d + thickness2) ;
        return v;//Вызов getVolume родителя
    }
}

const bm = new BoxMagic(3, 2, 1, 'plastic', 0.3, 0.005);

console.log(bm);
console.log(bm.getVolume());