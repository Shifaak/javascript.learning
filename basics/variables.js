const accountId = 123456
let accountEmail = "shifa@gmail.com"
var accountPassword = "123"
accountCity = "bhilai"

//accountId = 2 // not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])