class Account{
    min_Bal=500
    acc_Bal=0

    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount;
    }
    withdrawl_Amount(amount){
        this.acc_Bal= this.acc_Bal-amount;
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal;
    }
}

let a1=new Account()
console.log(a1)
a1.deposit_Amount(500)
a1.deposit_Amount(50)

a1.withdrawl_Amount(15)
let a2=new Account()
console.log(a2)
a2.deposit_Amount(150)
a2.deposit_Amount(501)
a2.deposit_Amount(15)
a2.withdrawl_Amount(66)

console.log(a1.get_Bal())
console.log(a2.get_Bal())
