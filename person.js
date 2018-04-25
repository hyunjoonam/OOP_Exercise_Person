function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  
  Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
  };
//   Write code to
  
//   Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', 
//      and phone of '483-485-4948', store it in the variable sonny.
//   Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', 
//      and phone of '495-586-3456', store it in the variable 'jordan'.
//   Have sonny greet jordan using the greet method.
//   Have jordan greet sonny using the greet method.
//   Write a print statement to print the contact info (email and phone) of Sonny.
//   Write another print statement to print the contact info of Jordan.

//  #1
var sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");

//  #2
var jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

//  #3
sonny.greet(jordan);

//  #4
jordan.greet(sonny);

//  #5
console.log(sonny.name, sonny.email, sonny.phone);

//  #6
console.log(jordan.name, jordan.email, jordan.phone);