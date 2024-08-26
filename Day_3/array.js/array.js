let arr = [2,4,6,8,10,12]
console.log(arr[5]) // index number always start with 0
console.log(arr[6])
console.log(arr.length)
console.log(typeof arr)
console.log(arr.toString())


// pop method
let x = ["cat","Dog","Lion","Tiger"]

// console.log(x.pop())
// console.log(x)
// Cow
console.log(x.push("Cow","Duck"))
console.log(x)

// Shift Method remove the first element of an array
console.log(x.shift())
console.log(x)

// Unshift Method 
console.log(x.unshift("Monkey"))
console.log(x.sort())
let y = [1,2,3,4,5,6]
let result =x.concat(y)
for (const iterator of result) {
    console.log(iterator)
    
}
// join method add something in your array
let z = ["cat","Dog","Lion","Tiger"]
console.log(z.join(" * "))


// split method 
let a = [1,3,5,7,9,11,13]

// console.log(a.slice(0,4)) // no change appear in our original array (0,4) end number is exclude in splice method
// console.log(a)
// console.log(a.slice(0,3))
// console.log(a)

let b = [1,3,5,7,9,11,13]
console.log(b.splice(0,2,99,100))
console.log(b.includes(99))

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple",1) ;
console.log(position)





// console.log(b.splice(0,2,88,99,45))
// console.log(b)





