const username: string = 'PabloMontoya';

const sum =(a: number, b: number )=>{
  return a+b;
}

sum(3,5);

class Person {

  constructor( public age: number, public lastName: string){}
}

const pablo = new Person(33,'montoya');
