/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global binding:

when you use "this" in the global context, you'll get the "global object" or "window object" 
which has a lot of the data that makes up the JS language.


* 2. implicit binding :

when you use "this" inside an object, "this" will implicitly bind to that object

* 3. new binding :

when you make a constructor function you can use "this" inside of it.
in this context, when you use "new" to create an object with the constructor function
the "this" in the constructor function will apply to that object you created when you called "new"
* 
* 4. explicit binding:

you can use methods such as ".call" or ".apply" or ".bind" to specifically bind the keyword "this" to refer to
whatever object you tell it to bind to.
*
* write out a code example of each explanation above
*/

// Principle 1: global binding

console.log(this); 
//"this" is the window object


// Principle 2: implicit binding
/*
const joscelyn = {
    name: 'joscelyn',
    age: 29,
    favoriteColor: 'blue',
    tellMeThis: function() {
        console.log(this)
    }
}

joscelyn.tellMeThis(); // will return the object "joscelyn"
*/

// Principle 3: new binding

function heroFactory(name, weapon, quest, favoriteColor) {
    this.name = name;
    this.weapon = weapon;
    this.quest = quest;
    this.favoriteColor = favoriteColor;
    this.speak = function() {
        console.log(`My name is ${name}. My quest is ${quest}. My favorite color is ${favoriteColor}.`);
    }
}

const sirArthur = new heroFactory('King Arthur', 'sword', 'to find the holy grail', 'blue');

sirArthur.speak();
// in this example the keyword "this" in heroFactory, refers to the object I created "sirArthur";



// Principle 4: explicit binding

const anna = {
    name: 'Anna',
    age: null,
    favoriteColor: null
}

const joscelyn = {
    name: 'joscelyn',
    age: 29,
    favoriteColor: 'blue',
    tellMeThis: function() {
        return this;
    }
}


const newAnnaFunction = joscelyn.tellMeThis.bind(anna);
console.log(newAnnaFunction());