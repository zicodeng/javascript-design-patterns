/*

Observer Design Pattern (Publish and Subscribe Pattern)

In observer design pattern, an object, called subject, maintains a list of its dependents,
called observers. The subject will notify observers if any state change has occurred.

For example: observer pattern is a key part of MVC architecture.
If the model changes, the view will be updated.

Pros:
    1. Promotes loose coupling.

Cons:
    1. Performance decreases significantly as the number of observers increase.

*/

console.log("------------------------------------");
console.log("      Observer Design Pattern       ");
console.log("------------------------------------");

// This function makes a Subject object.
var Subject = function() {

    // Each Subject has its own observers.
    var _observers = [];

    // subscribeObserver method pushes a new observer to our observers list.
    var subscribeObserver = function(observer) {
        _observers.push(observer);
    };

    // unsubscribeObserver method removes a specified observer from the observers list.
    var unsubscribeObserver = function(observer) {
        // Get the index of the removed observer.
        var index = _observers.indexOf(observer);

        // Check if the observer exists in our observers list.
        if(index > -1) {
            // Remove the observer at the given index.
            _observers.splice(index, 1);
        }
    };

    // notifyObserver method calls the observer's notify method.
    var notifyObserver = function(observer) {
        // Get the index of the removed observer.
        var index = _observers.indexOf(observer);
        
        // Check if the observer exists in our observers list.
        if(index > -1) {
            // Notify the observer at the given index.
            _observers[index].notify(index);
        }
    };

    // notifyAllObservers method notifies all observers in the observers list.
    var notifyAllObservers = function() {
        for(var i = 0; i < _observers.length; i ++) {
            _observers[i].notify(i);
        }
    };

    // JavaScript encapsulation:
    // only return what we need,
    // leaving everything else private.
    return {
        subscribeObserver: subscribeObserver,
        unsubscribeObserver: unsubscribeObserver,
        notifyObserver: notifyObserver,
        notifyAllObservers: notifyAllObservers
    }
};

// This function makes an Observer object.
var Observer = function() {

    // notify method informs the user which observer in the observers list is notified by the subject.
    var notify = function(index) {
        console.log("Observer " + (index + 1) + " is notified!");
    };

    return {
        notify: notify
    };
}

// Instantiating a new Subject.
var subject = new Subject("MySubject");


// Instantiating observers.
var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer3);

subject.notifyAllObservers();