function add(a,b){
    console.log(a+b);
}
// Arrow function
const add1 = (a,b) => {
    console.log(a+b);
};
add1(1,2)

//spread operatior
let arr1 = [1,2,3];
let arr2 =[...arr1,4,5,6];
console.log(arr2);
