
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

    // function Human(id, name, username, email,street, suite, city, zipcode, lat, long, phone,
    // company = {name, catchPhrase, bs}){
    //     this.id = id;
    //     this.name = name;
    //     this.username = username;
    //     this.email = email;
    //     this.address = {};
    //     this.address.street = street;
    //     this.address.suite = suite;
    //     this.address.city = city;
    //     this.address.zipcode = zipcode;
    //     this.address.geo = {};
    //     this.address.geo.lat = lat;
    //     this.address.geo.long = long;
    //     this.phone = phone;
    //     this.company = {};
    //     this.company.name = company.name;
    //     this.company.catchPhrase = company.catchPhrase;
    //     this.company.bs = company.bs
    // }

    class Human{
    constructor(id, name, username, email, street, suite, city, zipcode, lat, long, phone, company = {name, catchPhrase, bs}) {
            this.id = id;
            this.name = name;
            this.username = username;
            this.email = email;
            this.address = {};
            this.address.street = street;
            this.address.suite = suite;
            this.address.city = city;
            this.address.zipcode = zipcode;
            this.address.geo = {};
            this.address.geo.lat = lat;
            this.address.geo.long = long;
            this.phone = phone;
            this.company = {};
            this.company.name = company.name;
            this.company.catchPhrase = company.catchPhrase;
            this.company.bs = company.bs
    }
    }

    let adam = new Human(1,'Leanne Graham', 'Bret',  'Sincere@april.biz','Kulas Light','Apt. 556',  'Gwenborough', '92998-3874', '-37.3159',
        '81.1496', '1-770-736-8031 x56442', {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        });

console.log(adam);

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }