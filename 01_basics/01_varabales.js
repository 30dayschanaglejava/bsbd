const accountId = 15858522
let accountEmail = "purahan@google.com"
var accountPassword = "5415441052410"
accountCity = "Gurugram"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "152520"
accountCity = "Gurugram"



/*
Prefer not to use var
beacause of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
