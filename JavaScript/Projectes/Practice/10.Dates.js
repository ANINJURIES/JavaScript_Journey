
// By default, JavaScript will use the browser's time zone and display a date as a full text string:


/*

Date declaration

new Date()
new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds)

*/

const d = new Date("October 13, 2014 11:13:00");
const d2 = new Date("2022-03-25");
const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);  // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

/*
******
JavaScript counts months from 0 to 11:
January = 0.
December = 11.
*/