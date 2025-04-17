let emp={
    eid:101,
    ename:"RG",
    esal:45000,
    email:"rg@gmail.com"
}
let details={
    email:"rg@tcs.com",
    loc:"Wayanad"
}
let emp_Details={...emp,...details}

console.log(emp_Details)
//object doesnt allowed duplicate keys/properties