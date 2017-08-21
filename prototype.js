/*

Prototype Design Pattern

Prototype design pattern focuses on creating an object that can be used as a blueprint
for other objects through prototypal inheritance.

Mainly used for creating objects in performance-intensive situations.

*/

console.log("------------------------------------");
console.log("      Prototype Design Pattern      ");
console.log("------------------------------------");

// Before discussing about prototype design pattern,
// we need to understand how to create an object in JavaScript.

// Person function defines a constructor for making a Person object.
function Person(name, gender) {
    this.name = name;
    this.gender = gender;

    this.getInfo = function() {
        return "Name: " + this.name + "\nGender: " + this.gender;
    }
}

var zico = new Person("Zico", "Male");
console.log(zico.getInfo());

// The problem with this method for make objects is that it is memory-expensive,
// because getInfo() method is recreated for every new object instance.

// This is where prototype comes in.
// It allows us to append common methods to the constructor function.

// How to use prototype design pattern to create an object?
// Step one: define the constructor and properties.
var Pet = function(name, species) {
    this.name = name;
    this.species = species;
};

// Step two: append prototype to the constructor.
Pet.prototype = (function() {
    var petInfo = function() {
        return "Pet: " + this.name + "\nSpecies: " + this.species;
    };

    return {
        petInfo: petInfo
    }
})();

var cici = new Pet("Cici", "Dog");
var jack = new Pet("Jack", "Cat");

console.log(cici.petInfo());
console.log(jack.petInfo());