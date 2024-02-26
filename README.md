# Object and Object Constructor

Hello beautiful people. These codes demonstrate how to use object and object constructor in JavaScript.
* What is object?: It is the basic unit of JS which represents data structures with properties and methods.
* What is object constructor?: It is function used to create objects based on predefined blueprints and instantiate objects that has specific properties and method.
* In simple words, object constructor helps with **code reusability** and we can use it to create many, many objects without having to write all the codes manually.

# Examples used in this demonstration are:
**1. Player and thier number**
   * Object constructor function (Pemain)
       *This constructor function used to create 'player(pemain)' object.
       * It accepts 2 parameters, namely 'name' and 'number'
       * Properties (name and numner) are assigned to the object using 'this'.
       * Two methods are defined 'this.sayName' and 'this.sayNumber'to access those properties.
   * Ceating Objects
       * Two new players are created using the keyword 'new'followed by the constructor function we defined earlier
       * The specific 'name' and 'values' attributed to the new playes act as 'argument' to the constructor function.
   * Accessing Object properties and methods
       * the 'sayName' methods is called using **dot notation** to log player's name on the console.
       * The same goes with 'sayNumber' method.
         
2. Book and it's properties
    * As you can see in example 1, example 2 uses the exact steps in its execution.
    * We have **object constructor function**, **Object Creation** and **Accessing Object Method**
    * The object 'Buku'has 4 properties inisde the constructor function
    *  Properties are assigned to the objects using 'this'
    * A method called 'info' is defined to log information about the book to the console
    * A book object is created with the 'new' keyword followed by the constructor function
    * The construction fuction is called using dot notation to display the properties of 'buku1' object.
    
3. Cars and their properties
   * The same concepts in example 1 and 2 are applied in these codes. 
