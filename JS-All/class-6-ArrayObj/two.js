let numbers=[34,55,67,88,12]
//index       0 1  2   3  4
//print sum of numbers for given array 
// using for, and for..of loop
let sum=0
for(let number of numbers){
    sum=sum+number
}
console.log("Sum of Array:",sum)