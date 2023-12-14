

class Car{
    constructor(name, year){
        this.name= name;        // prop defined as this. 
        this.year= year;

    }

    // function of class
    name(){
        console.log(this.name+"name is this")
    }

    year(){
        console.log(this.year+"this is year")
    }
}
// new object is define by new keyword and parameter according to class is passed 
const obj = new Car("Ford",2014);

console.log("car name : "+obj.name+" Car year : "+obj.year);  // you can refer class props by obj_name.Class_propname


/*

this referses to object

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.

*/