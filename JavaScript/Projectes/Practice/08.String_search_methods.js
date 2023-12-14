
/*
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");                     // return -1 if not found

console.log("Found index :"+index); 

// last occurance of index 

let text2 = "Please locate where 'locate' occurs!";
let index2 = text.lastIndexOf("locate");                    // return -1 if not found 

// seacrch

let text3 = "Please locate where 'locate' occurs!";
text3.search(/locate/);

/*
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/


// match

let text4 = "The rain in SPAIN stays mainly in the plain";
text4.match("ain");
text4.match(/ain/g);        // global search 
text4.match(/ain/gi);       // global case sensetive search