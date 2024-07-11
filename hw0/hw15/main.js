 let users = [
     {color: 'red', name: 'Dima', age: 10},
     {color: 'green', name: 'Nastya', age: 22},
     {color: 'blue', name: 'Volodya', age: 19},
     {color: 'orange', name: 'Yarko', age: 39},
     {color: 'pink', name: 'Yevhen', age: 14},
     {color:  'brown', name: 'Taras', age: 44}
];

let container = document.getElementById('container');
for(let user of users) {
    let outerDiv = document.createElement('div');
        outerDiv.classList.add('outer');
        outerDiv.style.backgroundColor = user.color;

    for (const field in user) {
          let innerDiv = document.createElement('div');
          innerDiv.innerText = `${user[field]}`;
          outerDiv.appendChild(innerDiv);
          innerDiv.classList.add(field);  
    };

    container.appendChild(outerDiv);
};

// // jsonplaceholder

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos => {console.log(todos);

//   for (let todo of todos) {
//      let todoDiv = document.createElement('div');
//      todoDiv.classList.add('todo');

//      for (const key in todo) {
//          let keyDiv = document.createElement('div');
//          keyDiv.innerText = `${todo[key]}`;
//          keyDiv.classList.add(key); 
//          todoDiv.appendChild(keyDiv);
//      }

//      document.body.appendChild(todoDiv);
//   }
//   });

//   function

function appender(type, content,) {
    let element = document.createElement(type);
    element.innerText = content;
    document.body.appendChild(element);
}

appender('p', 'qwerty');


// String

// recursion
 
let peoples = {
    u1 :{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    u2 :{
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    u3 :{
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    u4 :{
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    u5 :{
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    u6 :{
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    u7 :{
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    u8 :{
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    u9:{
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    u10 :{
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
 };

// let people = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models"
//       }
//     };

//  console.log(people);

    function explorePeoples(peoples) {
    for (const key in peoples) {
        if (typeof peoples[key] == 'object') {
           console.log(peoples[key]);
            explorePeoples(peoples[key]);
        }
    }
};
explorePeoples(peoples);


// classes

class User {
    constructor(name, age,){
        this.name = name;
        this.age = age;
    }
    greating(msg){
    console.log(`${msg}, i am ${this.name} and i am ${this.age}.`)
    };
};

let homer = new User('Simpson', 45,);
console.log(homer);

class Costomer extends User{
    constructor(name, age, status,){
    super(name, age,);
    this.status  = status;
    }
};

let bart = new Costomer('Simpson', 9, false,);
console.log(bart.greating(`Hallo`));

// callbacks

let namWithSuprise = [1, 2, 3, 'suprise', 4, 5, 6, ];
console.log(namWithSuprise);

 let stringElement = namWithSuprise.find(
     element => typeof element === 'string'
    // element => {
    //    if (typeof element === 'string'){
    //         return true;
    //     }
    // }
);

console.log(stringElement);

let sorts = users.sort((user1, user2,) => user1.age - user2.age);

console.log(sorts);

function Calc(a, b, callback){
    console.log(callback(a, b ,));
};
Calc(3, 2, function(a, b, ){
    return a + b
});


function costomPrintArray(array, callback){
        callback(array)
    };
    costomPrintArray([1,2,3,4,5,], function(arr){
        for (const element of arr) {
           console.log(element); 
        }
    });

    costomPrintArray([1,2,3,4,5,], (arr) => {
        for (let i = arr.length -1; i>=0; i--) {
        const revers = arr[i];
           console.log(revers); 
        }
    });

    // DOM Node vs Element

    let dom = document.body.children;
    console.log(dom);

    // for (const child of dom) {
    //   child.setAttribute('class', 'main');
    // };

    console.log(dom);


    // forms

    console.log(document.forms.mainform);

    // Events

    let buttons = document.getElementsByTagName('button');
let button = buttons[1];
// button.onclick = function(eventObject){
// console.log('CLICK!', eventObject);
// } ;
    button.addEventListener('click', function (eventObject) {
      console.log('Click 1!');
    });
    button.addEventListener('click', function (eventObject) {
      console.log('Click 2!');
      console.log(eventObject);
    });

let inputs = document.getElementsByTagName('input');
let input = inputs[0];

input.oninput = function(e){
  console.log(this.value);
  inputs[1].style.background = this.value;
};

  let check = document.getElementById("cbox");
//  let check = document.getElementsByName('box');
console.log(check);

let res = document.getElementsByClassName('resolver')[0];

for (const user of users) {
let div = document.createElement('div');
div.innerText = JSON.stringify(user);
res.appendChild(div);
};
// console.log(res);
check.onclick = function() {
 res.innerText = ''
  if (this.checked ) {
    for (const user of users) {
    let div = document.createElement('div');
div.innerText = JSON.stringify(user);
res.appendChild(div);
  }
}
  else{
    for (const user of users) {
      if (user.age > 20) {
              let div = document.createElement('div');
  div.innerText = JSON.stringify(user);
  res.appendChild(div);
    };
      };
  };
}; 

//  EventObject

let target = document.querySelector('.target');
w = 
target.addEventListener('mousemove', function(e) {
  console.log(e.clientX, e.clientY);
  let r = e.clientX;
  let g = e.clientY-255;
  let b = Math.floor(255-((r+g)/2));
  console.log(r,g,b);
  this.style.background = `rgb(${r},${g},${b})`;
});

// Type of events

// document.onkeypress = function(e){
//   console.log(e.code);
// };
document.body.onmouseout = function(e){
  console.log(document.getSelection().toString());
};

//  LocalStorage

 window.localStorage.setItem('key',' value');
localStorage.setItem('user',JSON.stringify({name:' Vasa '}));
let value = JSON.parse(localStorage.getItem('user'));
console.log(value);

// localStorage.clear();

let list = document.getElementsByClassName('list')[0];
let basket = document.getElementsByClassName('basket')[0];

  for (const user of users) {
  let div = document.createElement('div')
  div.innerText = JSON.stringify(user)
  let addBtn = document.createElement('button')
  addBtn.innerText = 'ADD'
   div.appendChild(addBtn);
  addBtn.onclick = function(e) {

    let favorite = JSON.parse(localStorage.getItem('favorite'))
      if(Array.isArray(favorite) && localStorage.getItem('favorite') != null){
        favorite.push(user)
    localStorage.setItem('favorite', JSON.stringify(favorite))
    }
    else{
      let userFavArr = [];
      userFavArr.push(user);
      localStorage.setItem('favorite', JSON.stringify(userFavArr)
      );
    }
  //  basket.appendChild(div);
  };
//  basket

  // let delBtn = document.createElement('button')
  // delBtn.innerText = 'DELITE'
  //  div.appendChild(delBtn);
  // delBtn.onclick = function(e) {
  //   let favorite = JSON.parse(localStorage.getItem('favorite'))
  //     if(Array.isArray(favorite) && localStorage.getItem('favorite') != null){
  //       favorite.push(user)
  //   localStorage.setItem('favorite', JSON.stringify(favorite))
  //   }
  //   else{
  //     let userFavArr = [];
  //     userFavArr.push(user);
  //     localStorage.setItem('favorite', JSON.stringify(userFavArr)
  //     );
  //   }
  // };



 list.appendChild(div)
  };



  let btn = document.querySelector('#knopka')
btn.onclick = function() {
} ;

//  BOM

console.log(window);

navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position);
});

navigator.mediaDevices.getUserMedia({video : true}).then(function (stream){
  let video = document.getElementById('video');
  video.srcObject = stream;
  video.play();
});

console.log(location.href);
// history.forward();
// history.back();

// setInterval(function () {
//   console.log("Hello!");
// },500);

// setTimeout(function () {
//   console.log('HELLO!');
// },500);



//            Fetch


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos => {console.log(todos);
// });

//  fetch('https://jsonplaceholder.typicode.com/users')
//    .then(value => {return value.json()})
//    .then(value => {console.log(value);
//    });


//         Promise resolve

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let x = '!';
    console.log(x);
    resolve(x);
  }, 5000);
});

promise.then(function (value) {
  console.log(value);
  return new Promise(resolve => {
setTimeout(() => {
  let y = 'YES';
  let result = y + value ;
  resolve(result)
}, 5000);
  });

}).then(function (val) {
  console.log(val);
});


function asincfu(msg, timeout) {
  return new Promise (resolve =>{
    setTimeout(() => {
      console.log(msg);
      resolve('result')
    }, timeout);
  })
};

Promise.all([asincfu('oOo', 5000), asincfu('OoO', 3000)])
.then(function (result) {
  console.log('!!!!!', result[0]);
});

//             Promise reject

function calculator(a, b, action) {
  if (action === '+') {
   return a+b;
  } else if (action === '-') {
    return a-b;
  }else if (action === '*') {
    return a*b;
  } else if (action === '/') {
    return a/b;
  } else {
    return 0;    
  }
};

let a = 10;
let b = 0;
let action ='/';

let promises = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (b !== 0 ||b === 0 && action !== '/') {
           let sum = calculator(a, b, action)
       resolve(sum);
    } else {
      reject('!!!ERROR!!!');
        // <!--  на ноль не делят -->
    }
  }, 5000)
});

promises.then(function(value){
  console.log(value)
}).catch(reason => console.log(reason));


//          async


function asyncCalc(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a+b);
    }, 5000);
  })
};

async function foobar(){
  let temp = await asyncCalc(4, 6)
  console.log(temp)
};
 
foobar();

//         closures
//           

function createUser() {
 let vasa = {name: 'Vasa', age: 46};
 return {
   getName: function() {
     return vasa.name;
   },
   getAge: function() {
     return vasa.age;
   },

   setName: function(newName){
     vasa.name = newName;
   },
   setAge: function (newAge){
     if (newAge < 0) {
       alert(`!ERROR!`)
     }
     vasa.age = newAge;
   }
  }
};

let user = createUser();

user.setName('Illa');
user.setAge(9);

console.log(user.getName());
console.log(user.getAge());


//             call apply bind

let user1 = {
  name: 'Vasya', 
  age: 46,
  greating: function(msg, a, b){
    console.log(`${msg}, my name is ${this.name}`);
  }
};

let user2 = {
  name: 'Ilia', 
  age: 9,
};

// user1.greating.apply(user2, ['Hallo', ]);
//  user1.greating.call(user2, 'HI!',);
 let newGreating = user1.greating.bind(user2, ['yo!', ]);
 newGreating();