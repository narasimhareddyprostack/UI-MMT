function cal_Age(dob_Year){
    //let cy = 2025;
    //get the current year from date object
    let cy = new Date().getFullYear()
    return cy-dob_Year;
}
let age1 = cal_Age(1983)
console.log(age1)  //42
let age2 = cal_Age(2001)
console.log(age2)  //24