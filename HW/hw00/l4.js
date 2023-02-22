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


class Tag{
    constructor(
        tegname, desc, attr = []){
        this.tegname = tegname;
        this.desc = desc;
        this.attr = attr;
        // this.attr = attr;
    }

};

const a = new Tag('a','бла-бла-бла', [
{titleOfTag: 'name',actionOfAttr: 'desc'}, {titleOfTag: 'name1',actionOfAttr: 'desc1'},
 {titleOfTag: 'name2',actionOfAttr: 'desc2'}
]);

console.log(a);