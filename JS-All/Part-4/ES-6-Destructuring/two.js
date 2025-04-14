let state={
    ename:"Rahul",
    product:{
        pName:"Marker Pen",
        price:30,
        discout:true
    },
    user:{
        uid:101,
        uname:"Sonia"
    }
}

let {ename,product}  = state
let {pName}  = product
console.log(ename)
console.log(pName)