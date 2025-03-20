//print cdt;
let dt=new Date()
console.log(dt)
//print current time
let ct = new Date().toLocaleTimeString()
console.log(ct)
console.log(typeof ct)  //String
//print current year
let current_Year = new Date().getFullYear()
console.log(current_Year)  //2025
//print current date-only
let current_Date = new Date().toLocaleDateString()
console.log(current_Date)