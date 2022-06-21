//  {
//     name: string,
//     age: number,
// } = 

enum MyTable { ADMIN, READ_ONLY, AUTHOR};


const person = {
    name: 'kareem', 
    age: 24,
    nashat: ['le3b', 'programming'],
    myTable: MyTable.ADMIN,
};

if(person.myTable === MyTable.ADMIN){
    console.log('admin tmam');
}
console.log()
for (const hobby of person.nashat){
    
    console.log(hobby);
}