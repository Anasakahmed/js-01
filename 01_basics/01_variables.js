const accountID = 1232234
let accountEmail = "anas@google.com"
var accountPass = "12345"
accountCity = "Karachi"
let accountState;

// accountID = 12 // not possible

// console.log(accountID)

accountEmail = "anas.ahmed@google.com"
accountPass = "123"
accountCity = "Islamabad"

/*
Preferred not to use var
because of the use of block scope and functional scope
*/

console.table([accountEmail, accountID, accountPass, accountCity,accountState])