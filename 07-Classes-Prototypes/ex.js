// http://csbin.io/oop

/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/
/*
function makePerson(name, age) {
  return {
    name,
    age
  };
}

const vicky = makePerson("Vicky", 24);
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24
// */

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
/*
const personStore = {
  greet() {
    console.log("hello");
  }
};

personStore.greet(); // -> Logs 'hello'
*/

/*** CHALLENGE 2 of 3 ***/
/*
function personFromPersonStore(name, age) {
  const newUser = Object.create(personStore);
  newUser.name = name;
  newUser.age = age;
  return newUser;
}

const personStore = {
  greet() {
    console.log("hello");
  }
};

const sandra = personFromPersonStore("Sandra", 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'
*/

/*** CHALLENGE 3 of 3 ***/
/*
function personFromPersonStore(name, age) {
  const newUser = Object.create(personStore);
  newUser.name = name;
  newUser.age = age;
  return newUser;
}

const personStore = {
  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

const sandra = personFromPersonStore("Sandra", 26);

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
*/
/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
/*
function PersonConstructor() {
  this.greet = () => {
    console.log("hello");
  };
}

const simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'
*/

/*** CHALLENGE 2 of 3 ***/
/*
function personFromConstructor(name, age) {
  this.name = name;
  this.age = age;
}
personFromConstructor.prototype.greet = function() {
  console.log("hello");
};

const mike = new personFromConstructor("Mike", 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'
*/

/*** CHALLENGE 3 of 3 ***/
/*
function personFromConstructor(name, age) {
  this.name = name;
  this.age = age;
}
personFromConstructor.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name}`);
};

const mike = new personFromConstructor("Mike", 30);

console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.introduce(); // -> Logs 'Hi, my name is Mike'
*/

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
/*
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("hello");
  }
}

// const george = new PersonClass();
// george.greet(); // -> Logs 'hello'
// */

/*** CHALLENGE 2 of 2 ***/
/*
class DeveloperClass extends PersonClass {
  // super()
  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
}

const thai = new DeveloperClass("Thai", 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'
*/
/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  },
  sharePublicMessage: function() {
    console.log(`Welcome users!`);
  }
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

// const adminFunctionStore /* Put code here */ ;

function adminFactory(name, score) {
  let admin = Object.create(userFunctionStore);
  admin.name = name;
  admin.score = score;
  admin.type = "Admin";
  return admin;
}

/* Put code here for a method called sharePublicMessage*/

const adminFromFactory = adminFactory("Eva", 5);
// adminFromFactory.sayType(); // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage(); // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log("Woof!");
  }
}

const robotMixin = {
  skin: "metal",
  speak() {
    console.log(`I am made of ${this.skin}`); //have ${this.legs} legs and
  }
};

let robotFido = new Dog();

robotFido = Object.create(robotMixin);

robotFido.speak(); // -> Logs "I am made of metal"
