class Bank {

    static getAccountdetails() {
        var accountDetails = {
            1000: { accno: 1000, name: "userone", balance: "6000", password:"user1" },
            1001: { accno: 1001, name: "usertwo", balance: "9000", password:"user2" },
            1002: { accno: 1002, name: "userthree", balance: "7000", password:"user3" },
            1003: { accno: 1003, name: "userfour", balance: "8000", password:"user4" },
            1004: { accno: 1004, name: "userfive", balance: "61000", password:"user5" },
        }
        return accountDetails
    }


    static login() {
        
        let accno = document.querySelector("#acno").value;
        let pwd = document.querySelector("#pswd").value;
        let data=Bank.getAccountdetails()
        {
            if(accno in data)
            {
                alert("exist")
                if(pwd==data[accno]["password"])
                {
                    alert ("login success")
                    window.location.href="banktbtn.htm";
                }
                else
                {
                    alert("not success")
                }
            }
            else{
                alert("not an acc")
            }
        }
        alert(accno + pwd)
    }

}