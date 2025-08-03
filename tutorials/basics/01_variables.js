const accountId = 12345
let accountName = "TestName"
var accountDetails = "Some Details"
accountEmail = "a@b.com"

//accountId = 4567 // This is not allowed. You cannot change the value of const

/*
var has issues with scope, so var is not recommended to use in JS
*/

console.table([accountId, accountName, accountDetails, accountEmail]);

console.log(accountId);
console.log(accountName);
console.log(accountDetails);
console.log(accountEmail);



