"use strict";
//  {
//     name: string,
//     age: number,
// } = 
var MyTable;
(function (MyTable) {
    MyTable[MyTable["ADMIN"] = 0] = "ADMIN";
    MyTable[MyTable["READ_ONLY"] = 1] = "READ_ONLY";
    MyTable[MyTable["AUTHOR"] = 2] = "AUTHOR";
})(MyTable || (MyTable = {}));
;
const person = {
    name: 'kareem',
    age: 24,
    nashat: ['le3b', 'programming'],
    myTable: MyTable.ADMIN,
};
if (person.myTable === MyTable.ADMIN) {
    console.log('admin tmam');
}
console.log();
for (const hobby of person.nashat) {
    console.log(hobby);
}
