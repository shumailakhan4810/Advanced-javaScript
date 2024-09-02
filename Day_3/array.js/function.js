// Function

// A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).

// without parameter
// with parameter
// with return
// Without return 


function add_number(){ // without parameter
    console.log("Add two number",5+5)
    console.log("Add two number")
}
// add_number()

function sum(a,b,){         //with parameter      
 console.log("Sum of two number is:" ,a+b)
}
// sum(5,10)
// sum(100,10)
// sum(32.5,50.5)

function sum_number(a=10,b=10){         //with parameter      
    console.log("Sum of two number is:" ,a+b)
   }
//    sum_number()

//arrow function
let user_data = (frist_name,secocond_name)=>{
    return frist_name+secocond_name
}
// console.log(user_data("Umar","Khan"))


// Arrow Function with No Parameters:
const name_fun = ()=>{
    console.log("Hello World")
}
name_fun()



const short_fun =(a,b)=>a+b
console.log(short_fun(100,100))


// Object 
student_data= {
    user_name:"Kaleem Khan",
    age:21,
    welcome_user:function(){
        console.log(`${this.user_name} welcome to our website`)
    }
    
}
student_data.welcome_user()











// const user = {
//     user_name :"Ali",
//     price : 250,
//     welcome_Message:function(){
//         console.log(`${this.user_name},welcome to website`) //this current context ko reffer krta ha
//     }
// }

// user.welcome_Message()







// function full_name(firstname,secondname){
//    return firstname+secondname
// }
// let result =full_name("Ali","khan")
// console.log(result)
// if(result==="Sohaib"){
//     console.log("You are selected")
// }else{
//     console.log("You are not selected")

// }