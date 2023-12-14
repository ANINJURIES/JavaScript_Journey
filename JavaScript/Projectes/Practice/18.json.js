// JavaScript Object Notation, format to store and transfer data


let jsonObj = {
    name: "Vedant",
    Year: 3,
    color: "silver"
}

// convert json to string 

let mystring = JSON.stringify(jsonObj);
console.log(mystring);

// conver valid json string to json 

let newjson = JSON.parse(mystring);
console.log(newjson);


// now we can transfer json file as string anywhere and on delivery location we can destring the json file.
// when there are class with multiple obj, obj with multi props we use json coz lightweight and easy to transfer 