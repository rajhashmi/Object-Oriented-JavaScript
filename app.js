// object notions 

var userOne = {
    userName : "shahid hashmi",
    userEmail: "shahidhashmicoder@gmail.com",
    password : "this is my password",
    login(){
        console.log(this.userName + " is online")
    }
}
console.log(userOne.login());
// ========================================= updating object ========================================

userOne.userName = "hashmi shahid";

userOne["userEmail"] = "shahidhashmi@gmail.com";
//  ========================================= adding properties =====================================

userOne.age = 19;

// ========================================== Classes ===============================================



class UsersCreator {
    constructor(userName,userEmail,userAge){
        this.userName = userName,
        this.userEmail = userEmail,
        this.userAge = userAge
    }
    loggin(){
       return `${this.userName} is online 🟡`;
    }
    showAge(){
       console.log(this.userAge);
       return this
    }
    updateAge(){
        this.userAge++;
        return this
    }
}
const userTwo = new UsersCreator("shahid", "shahidhashmi@gmail.com",19);

console.log(userTwo.loggin());

// ======================== method chaining ======================
//  to make mehod chaing make sure you are returning object in method like return this

userTwo.showAge().updateAge()

// ======================================== class inheritence ====================================


class Admin extends UsersCreator {
    constructor(userName,userEmail,userAge,account){
        super(userName,userEmail,userAge)
        this.account = account
    }
}
let userThree = new Admin("shahid", "shahidhashmi@gmail.com",19,10);
console.log(userThree)