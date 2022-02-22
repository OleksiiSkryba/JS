
// function Comp(name, freq, ram) {
//     this.name=name;
//     this.freq=freq;
//     this.ram=ram;
//     this.isOn=false;

// 
// };

class Comp {
    constructor(name, freq, ram){
        this.name=name;
        this.freq=freq;
        this.ram=ram;
        this.isOn=false;
    }
    power() {
    this.isOn?this.isOn=false:this.isOn=true;
    };
    upgradeFreq(){
        this.freq+=(this.freq*0.1);
    }
    upgradeRam(){
        this.ram+=(this.ram*2);
    }
}

// const serv = new Comp('Host', 500, 16);
// serv.fps = serv.freq/serv.ram;
// serv.game = function (GAME_NAME) {
//     console.log(`You are playing ${GAME_NAME} with ${serv.fps} FSP`);
// }

class Serv extends Comp{
    constructor(name, freq, ram){
        super(name, freq, ram);
        this.fps = (this.freq / this.ram );
        this.game = function (GAME_NAME) {
            console.log(`You are playing ${GAME_NAME} with ${this.fps} FSP`);
        }
    }
};

const gameStation = new Serv('Gamestation', 800, 32);
gameStation.fps = gameStation.fps*2;
gameStation.upgradeFreq();

class Nout extends Comp {
    constructor(name, freq, ram, screen, acc){
super(name, freq, ram);
this.screen = screen;
this.acc = acc;
this.res = this.freq/(this.screen*this.ram);
    }

}
gameStation.power();

const notik = new Nout('Notik', 600, 8, 15.4, 8);


class Ubook extends Nout{
    constructor(name, freq, ram, screen, acc, kg){
        super(name, freq, ram, screen, acc);
        this.kg = kg;
    }
    
    power() {
        (this.kg>2||this.acc<4)?console.log('error!'):this.isOn?this.isOn=false:this.isOn=true;
    };
};

const ultra = new Ubook('Ultra', 700, 4, 13, 3, 2);
ultra.power();
// gameStation.game('GTA');
// console.log(notik);
// console.log(gameStation);
// console.log(ultra);



class Gold{
    constructor(name, age, size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
};

let gArr = [];

for (let g = 0; g < 10; g++) {
    // const element = gArr[g];
    const girl = new Gold(`Goldy${g}`, Math.random()*10+18, 36+g);
    gArr.push(girl);
};

class Prince extends Gold{
    constructor(name, age, size){
        super(name, age, size)
    }
    searchGold(arr = []){
        for (const g of arr) {
            if( g.size===this.size){
                this.girl = g.name;
                     console.log(`${this.name} женится на ${g.name}`);
            }
        }
    }
};

const vasia = new Prince('Vasia', 48, 41);
vasia.searchGold(gArr);
console.log(vasia);
console.log(gArr);
