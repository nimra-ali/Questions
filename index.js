// q no 1
// reverse string 
var string = prompt("enter your string");
var lenstr = string.length;
var reversestr = '';
for(var i = lenstr-1;i>=0;i--){
    reversestr += string[i];
}
console.log(reversestr);

//   q no 2
// palindrome 
var strings = prompt("enter your palindrome")
var len = strings.length;
var msg = 'it is a palindrome';
for(var i = 0; i < len/2 ; i++){
    if(strings[i] != strings[len -1 -i]){
        msg = 'it is not a palindrome'
    }
}
console.log(`${strings}: ${msg}`);

//  qno 3
// find max 
function maximum(){
    let array = [1,3,4,67,9,12,9,17];
    let max = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
           max = array[i]
        }

    }
console.log(`the largest number is ${max}`);
}
maximum();
// q no 4
// find occurrence of number
function Occurrences(arr) {
    const count = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
  
    return count;
  }
  const ar = [1, 2, 3, 2, 1, 2, 3, 4, 5, 1];
  const occur = Occurrences(ar);
  console.log(occur);


// q no 5
// sort an array
const sortedLen = sortStr => sortStr.sort((a,b) => a.length - b.length);
const ara = ["abc", "ab" ,"acbkd" ," jjgdjcncbhxjk" ,"sfdsxj"];
const sortedArray = sortedLen(ara);
console.log(sortedArray);


//  q no 6
// Fibonacci sequence
function adding(){
var a = 0, b = 1;
console.log(a);
console.log(b);
for(var i=0;i<=10;i++){
    var temp = a + b;
    console.log(temp)
    a = b;
    b = temp;
}
}
adding();

// q no 7



// q no 8
// flattens nested array
var aar = [1, [2, [3, 4], 5], 6,]
console.log(aar.flat(2));


// q no 9
// remove duplicate array
let arrr = [1 , 1 , 1 , 2, 2 , 23 , 33 , 4 , 4 , 5 , 5 , 6 , 6 , 6 , 7 , 7 , 8 , 8 , 9 , 9]
let uniquearr = [...new Set(arrr)];
console.log(uniquearr);

// q no 10
// intersection two array
let arra1 = [1,2,3,4,5]
let arra2 = [1,6,3,7,5]
const arra3 = arra1.filter(data=>arra2.includes(data))
console.log(arra3);

// part 02

// qno 1
// find prime number

var number = prompt("enter your number");
if(number == 1){
  console.log(`${number} is neither prime nor composite number`);
}else if(number < 1){
  console.log(`${number} negative integer is not a prime`)
}else{
  for(var i = 2; i<number; i++){
    if(number%i == 0){
      var res = `${number} is not a prime number`;
      break;
    }else{
      var res = `${number} ia a prime number`;
    }
  }
}
console.log(res);

// qno 2
// find vowels and lenght
var string = prompt("enter your string");
const reg = /[a,e,i,o,u]/gi;
var chars = string.match(reg);
console.log(chars.join(','));
console.log(chars.length);

// qno 3
// first letter in uppercase
var sting = prompt("enter your alphabet");
var first = string.charAt(0)
var rem = string.slice(1);
var caps =  first.toUpperCase() + rem;
console.log(`${caps}`);

// part 03
// q no 1
// find traingle sides
function checkTriangle() {
  var side1 = Number(prompt("Enter the length of side 1:"));
  var side2 = Number(prompt("Enter the length of side 2:"));
  var side3 = Number(prompt("Enter the length of side 3:"));

  if (side1 === side2 && side2 === side3) {
    return "Equilateral triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "Isosceles triangle";
  } else {
    return "Scalene triangle";
  }
}
console.log(checkTriangle());

//  q no 2
// find leap year
function checkLeapYear() {
  var year = Number(prompt("Enter a year:"));

  if ( year % 4 === 0) {
    return year + " is a leap year";
  } else {
    return year + " is not a leap year";
  }
}

console.log(checkLeapYear());

  // question no 3
//  sum array
function sumArray(numbers) {
  var sum = 0;
  
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}
var numbers = [1, 2, 3,  3, 4, 5];
console.log(sumArray(numbers)); 

//  q no 4
// reverse array

const arry = [1,2,3,4,5];
let res = arry.reverse();
console.log(res)


// part 04
// get fname & lname properties
// q no 1
var arr = [
  {fname: " john " , lname : "Doe"},
];
const mapp = arr.map(f =>{
 return (`${f.fname}  ${f.lname}`)
})
console.log(mapp);


// q no 2
// count properties lenght
// count properties
const student = { 
  name: 'Esha',
  age: 20,
  hobbies: ['reading', 'games', 'coding'],
  email:'abc@.com'
};
let count = 0;
for(let key in student) {
++count;
}
console.log(count);

// q no 3
// merge two objects
function mergeobject(obj1,obj2){
return {...obj1 , ...obj2}
}
const obj1 = {a : 5 , b: 9,}
const obj2 = {c: 8 , d: 17,}
const merged = mergeobject(obj1,obj2)
console.log(merged);

// q no 4

// q no 5
// find average age
let obj = [
  {name: "Ali"},
  {Age: 12},

 {name: "uzair"},
  {Age: 18},

  {name: "fahad"},
  {Age: 25},

  {name: "eshal"},
  {Age: 25},

  {name: "fatima"},
  {Age: 25},
];
const agge = obj.filter(ag =>{
  return (ag.Age == 25)
 })
 console.log(agge);

// part 05
// q no 1
// greet user  in function
const greet = (user =>{
  if(user === "john"){
    return("hello " +  user)
  }
  else{
    return "invalid name"
  }
})
 let userName = prompt("enter your name");
 console.log(greet(userName)); 

  // q no 2
//  calculate square
 function calsqr(num){
  return(Math.pow(num,2))
 }
 let num = prompt("enter your num")
 console.log(calsqr(num));

//  q no 3
// find even number
const number = prompt("Enter a number: ");
if(number % 2 == 0) {
    console.log("true");
}
else {
    console.log("false");
}

// q no 4
// concatenation of two string
function concatestr(str1,str2){
  return str1+str2
}
let doublestr = concatestr("hello" , "fahad");
console.log(doublestr);

//  q no 5
// get length in string
function lgth(string){
  return string.length
}
console.log(lgth("nimra"))

























