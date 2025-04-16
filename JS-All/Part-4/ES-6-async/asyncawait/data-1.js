let employees=[
    {eid:101,ename:'Rahul',esal:45000},
    {eid:102,ename:'Sonia',esal:55000},
]
let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag ===true ? resolve("Data Inserted") : reject('Error in creating employee');
            employees.push(emp);
        },4000);
    });
}
let displayEmployees=()=>{
    setTimeout(()=>{
      let rows='';
        employees.forEach((emp)=>{
            rows+=`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                    </tr>`;
        })
        document.getElementById('tableData').innerHTML=rows;
    },1000)
}
createEmployee({eid:103,ename:"Priyanka",esal:650000})
.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})
displayEmployees()