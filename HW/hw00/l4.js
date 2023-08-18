// function Human(id,name, username, email, address = {}, phone, website, company = {}) {
//    this.id = id;
//    this.name = name;
//    this.username = username;
//    this.email = email;
//    this.address = address;
//    this.phone = phone;
//    this.website = website;
//    this.company = company;

// }

// let i = new Human(1, 'Vasia', 'Pupkin', 'vasia@gmail.com',
//  { 
// street: 'Kulas Light',
// suite: 'Apt. 556',
// city: 'Gwenborough',
// zipcode: '92998-3874',
// geo: {
//     lat: '-37.3159',
//     lng: '81.1496'}},
//     '1-770-736-8031 x56442',
//     'hildegard.org',
//     {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
//     )

//     console.log(i);
//     console.log(i.company.name);


// class Tag{
//     constructor(
//         tegname, desc, attr = []){
//         this.tegname = tegname;
//         this.desc = desc;
//         this.attr = attr;
//         // this.attr = attr;
//     }

// };

// const a = new Tag('a','бла-бла-бла', [
// {titleOfTag: 'name',actionOfAttr: 'desc'}, {titleOfTag: 'name1',actionOfAttr: 'desc1'},
//  {titleOfTag: 'name2',actionOfAttr: 'desc2'}
// ]);

// console.log(a);


class Client{
    constructor(
        id, name, surname , email, phone, order =[]
    ){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order;
    }
};

let clients = [];
const c1 = new Client(01,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03, 04]);
const c2 = new Client(02,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03]);
const c3 = new Client(03,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03, 04, 05]);
const c4 = new Client(04,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03]);
const c5 = new Client(05,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03, 04, 05, 06]);
const c6 = new Client(06,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03]);
const c7 = new Client(07,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03, 04, 05]);
const c8 = new Client(08,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03]);
const c9 = new Client(09,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03, 04]);
const c10 = new Client(10,' Vasia', 'Pupkin', 'a@blur.call', '+380111111', [01, 02, 03]);
clients.push(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);
console.log(clients);

sorts = clients.sort((a,b) => a.order.length-b.order.length);
console.log(sorts);

