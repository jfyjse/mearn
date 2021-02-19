class Bank
{
    constructor(accno,name,minbal)
    {
        this.accno=accno;
        this.name=name;//this.name is instance variable
        this.bal=minbal;
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log("credited with "+amount+" avail bal ="+this.bal);
    }

    withdraw(amount)
    {
        if(amount>this.bal)
        {
            console.log("no bal");
        }
        else
        {
            this.bal-=amount;
            console.log("debited "+amount+" avail bal "+this.bal);
        }
    }
}

var o1= new Bank(985589,"janett",1000)
{
    // o1.createAccount(87675,"janet",1000)
    
    o1.deposit(9000)
    o1.withdraw(5000);
}