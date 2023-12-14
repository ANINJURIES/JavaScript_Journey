/*
string methods 

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()

*/

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


console.log("Text slice : "+text.slice(7, 13));
console.log("Text length : "+text.length);

// If a parameter is negative, the position is counted from the end of the string:

let text2 = "Apple, Banana, Kiwi";
console.log(text2.slice(-12));  // why banana, kiwi ?
console.log(text2.substr(7, 6));   // substr(start,end)

// text replace

let text4 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");  // By default, the replace() method replaces only the first match
let newText2 = text.replace(/Microsoft/g, "W3Schools"); // to replace all matches