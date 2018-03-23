var square = x => x * x;
console.log(square(3));

var user = {
  name: 'Moose',
  sayHi: () => {
    console.log(`Hello ${name}`);
  },

  sayHiAlt() {
    console.log(arguments);
    console.log(`Hello ${this.name}`);
  }
};

user.sayHiAlt(1, 222, 'zzz');
