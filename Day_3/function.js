// Function

// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

// without parameter
// with parameter
// with return
// Without return 
//  Regular Function without parameter

// function add_number(){ // without parameter
//     console.log("Add two number",5+5)
//     console.log("Add two number")
// }
// add_number()

// function sum(a,b,){         //with parameter      
//  console.log("Sum of two number is:" ,a+b)
// }
// sum(5,10)
// sum(100,10)
// sum(32.5,50.5)

// function sum_number(a=10,b=10){         //with parameter   default prameter    
//     console.log("Sum of two number is:" ,a+b)
//    }
//    sum_number()

// use of return statement
// function product_number(a,b){
//     return a*b 
// }
// let result =product_number(5,3)
// if(result>=50){
//     console.log("You are selected")
// }else{
//     console.log("You are not selected")

// }
// let fname = "Shumaila";
// // for(let i =0;i<fname.length; i++){
// //     console.log(fname[i])
// // }
// for(let i  = fname.length-1;i>=0 ; i--){
//     console.log(fname[i])

// }

// ********************************************************
let a = "JavaScript";
// for(let i =0; i<=a.length;i++){
//     console.log(a[i])
// }

// for(let i =a.length-1;i>=0;i--){
//     console.log(a[i])
// }
// Palaindrome
// let str = "Javascript";
function isplaindrome(str){
    let reverse_str= "";
for(let i =str.length-1;i>=0;i--){
    reverse_str = reverse_str+str[i]
}
if(str === reverse_str){
    console.log("Its a plaindrome word")
}else{

    console.log("Its not a plaindrome word")
}
}
isplaindrome("madam")
isplaindrome("Javascript")
isplaindrome("racecar")

// ********************************Rock Paper and sessiror Game**********************
// let player1 = "Rock";
// let palyer2 ="Sessiors";
// if(player1==player2){
//     console.log("Tie")
// }else if(palyer1="Rock"&&player2="" ||){
    
// }

// loop intilize, condition, increment/decrement

// let i = 0;
// // let str = "shumaila"
// let arr= ["Sat","Sun","Mon","Tuesday"]
// while(i<arr.length){
//     console.log(arr[i])
//     i++

// }


// let  i =0;
// do{
//     console.log("print number 1 to 10",i)
//     i = i+3
// }while(i>=21)

// let str = "javascript";
// function isplaindrome(str){
//     let reverse_str ="";
//     for(let i = str.length-1;i>=0;i--){
//         reverse_str =reverse_str+str[i] 
//     }
//     if(str === reverse_str){
//         console.log("Its a plaindrome word")
//     }else{
    
//         console.log("Its not a plaindrome word")
//     }
// }

// isplaindrome("madam")
// // arrow function
// let arr_fun=()=>{
//     console.log("Hello world JavaScript")
// }
// arr_fun()

// let sub= (a,b)=>a-b
// console.log(sub(200,150))


// function hello_fun(){    //let a =6,b= 10
//     console.log("Hello World")

// }
// hello_fun()

// // with parameter
// function full_name(first_name,secocond_name){  //class practice
//     console.log(first_name+secocond_name)
// }
// full_name("Zeeshan","khan")
// full_name("Shumaila ","khan")

// // With return statement
// function add_Number(a,b){
//     return a+b 
// }
// let result= add_Number(20,30)
// console.log(result)
// if(result>=50){
//     console.log("You are selected")
// }else{
//     console.log("You are not selected")
    
// }

// function hello_fun(){ // (parameter a,b,c) a =10 ,b=43
//     console.log("Hello World")
// }
// hello_fun()


// function full_name (first_name,second_name){  //first_name = "Ali" ,second_name = "Khan"
//     console.log(first_name+second_name)
// }
// full_name("Ali","khan")

// function product_number(a,b){
//     return a*b
// }

// console.log(product_number(7,5))
// console.log(product_number(14,5))
// let result=product_number(5,5)
// if(result>50){
//     console.log("You are selected")
// }else{
//     console.log("You are not selected")

// }

//arrow function
// let student_name =(first_name,secocond_name) =>{
// console.log(first_name+secocond_name)
// }
// student_name("Shumaila","Sohaib")

// Plandrome 
// function isplaindrome(str){
// // let str = "Javascript";
//  let reverse_str= "";
// for(i =str.length-1;i>=0;i--){
//     reverse_str = reverse_str+str[i]
// }
// if(str === reverse_str){
//     return true
// }else{
//     return false
// }
// }
// console.log(isplaindrome("madam"))
// console.log(isplaindrome("shumaila"))


// let My_name = "shumailaa"
// for(i = My_name.length { //reverse print name
//     console.log(My_name[i])
// }
// for(let i =0;i<My_name.length ;i++){
//     console.log(My_name[i])
// }

// let addnumber= ()=>console.log("Hello World")
// addnumber()

// let sum = (a,b)=>a+b
// console.log(sum(10,20))


// let user_data = (frist_name,secocond_name)=>{
//     return frist_name+secocond_name
// }
// console.log(user_data("Umar","Khan"))


// Arrow Function with No Parameters:
// const name_fun = ()=>{
//     console.log("Hello World")
// }
// name_fun()

// const short_fun =(a,b)=>a+b
// console.log(short_fun(100,100))


// Object 
// student_data= {
//     user_name:"Kaleem Khan",
//     age:21,
//     welcome_user:function(){
//         console.log(`${this.user_name} welcome to our website`)
//     }
    
// }
// student_data.welcome_user()


// const user = {
//     user_name :"Ali",
//     price : 250,
//     welcome_Message:function(){
//         console.log(`${this.user_name},welcome to website`) //this current context ko reffer krta ha
//     }
// }

// user.welcome_Message()


