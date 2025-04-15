let goToGoa=(success,failure)=>{
    let acc_Bal=10700
    if(acc_Bal>10000){
            success("Go and Enjoy")
    }else{
        failure("Go to PSA!- Practice")
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})