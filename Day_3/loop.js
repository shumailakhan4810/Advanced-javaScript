//  Loop
// for----loop

// for(let i = 0;i<5 ; i++){
//     console.log(i)
// }
// for(let x = 20;x>10;x--){
//     if(x%2==0)
//     console.log(x)
// }


// for(let x = 20;x>10;x--){
//     if(x%2!==0)
//     console.log(x)
// }
// let table = 5;
// for(let i =1;i<=10;i++){
//     console.log(table +"X" +i + "=" + (table*i))
  
// }
let arr = ["ali", "Umar","Aleem","Qasim"]
for (const i of arr) {
    console.log(i)
    
}


for (const iterator of "Shumaila Sohaib") {
    console.log(iterator)
    
}
// for ---in --loop


let stud_Obj = {
    name :"shumaila",
    skill:"Programmer",
    habbit:["Backing","Reading"]
}
// for (const key in stud_Obj) {
    
//         const element = stud_Obj[key];
//         console.log(element)
  
// }

for (const key in stud_Obj) {
    
  console.log(key+":"+stud_Obj[key])
}










// for ---in --loop
// for---of ---loop

// x= "Shumaila sohaib";
// for (const i of x) {
//     console.log(i)
// }

// x= [10,20,30,40,50,60,70];
// for (const i of x) {
//     console.log(i)
// }