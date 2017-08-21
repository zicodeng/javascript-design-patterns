/*

Module Design Pattern

Pros: 
    1. Keep particular piece of code independent of other components.
    2. Provide loose coupling to support well-structured code.

*/

console.log("------------------------------------");
console.log("        Module Design Pattern       ");
console.log("------------------------------------");

// Creating a module by using IIFE (Immediately Invoked Function Expression).
// IIFE is a function that calls itself immediately.
// This helps us wrap all of this component code inside a new scope,
// and only returning the parts we need,
// leaving the other code out of the global scope.
// Namespace our code by assigning IIFE to a variable,
// so that we can access any returned methods globally.
var module = (function() {
    var _content = "Hello, World!";

    // _ means this is a private method.
    var _privateMethod = function() {
        console.log(_content);
    };

    var publicMethod = function() {
        console.log(_content);
    }

    // Anything inside of this return statement will become public.
    return {
        publicMethod: publicMethod
    }
})();

// This will throw an error because privateMethod is undefined
// when it is being used out of its own scope.
// module.privateMethod();

module.publicMethod();
