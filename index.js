//array element add,remove,specific number change the position,etc

const students=['masud','sakib','rayhan','sobuj','rokay','rabbi'];
students[0]='rana';
students.splice(3, 0, "Lene");

const removeItem=students.indexOf('rayhan');
if(removeItem>-1){
    students.splice(removeItem,1);
}
console.log(students);

