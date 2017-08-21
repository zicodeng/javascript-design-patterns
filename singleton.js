/*

Singleton

A Singleton restricts clients from creating multiple instances.
After the first instance is created, it will return the existing one.

*/

console.log("------------------------------------");
console.log("      Singleton Design Pattern      ");
console.log("------------------------------------");

var Printer = (function() {
    var printerInstance;

    // _createPrinter is a private method that makes a new printer object.
    var _createPrinter = function() {
        var print = function() {
            console.log("Printing...");
        };

        var scan = function() {
            console.log("Scanning...");
        };

        return {
            print: print,
            scan: scan
        }
    };

    
    // getInstance is a public method that gets an existing printer.
    // If no existing printer exists, it will create a new one.
    var getInstance = function() {
        if(printerInstance === undefined) {
            printerInstance = _createPrinter();
        }

        return printerInstance;
    };

    return {
        getInstance: getInstance
    }
})();

var homePrinter = Printer.getInstance();

// This will throw en error
// because Printer is not a constructor.
// var officePrinter = new Printer();

homePrinter.print();
homePrinter.scan();

// This is not creating a new Printer object.
// It returns the existing one, which is the same as homePrinter.
var officePrinter = Printer.getInstance();