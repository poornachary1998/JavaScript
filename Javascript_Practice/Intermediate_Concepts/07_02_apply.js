// // 1️⃣ Remove all even numbers

// Input: 
let array = [1, 2, 3, 4, 5, 6]

let filtered = array.filter((num)=>{
    return num % 2 !== 0
})

console.log(filtered)
// Output: [1, 3, 5]

// //---------------------------------------------------

// 2️⃣ Filter names that start with "A"

// Input: 
let names = ["Ajay", "Kiran", "Arun", "Mahesh"]

let checkName = 
names.filter(name =>{
    if (name.startsWith("A")){
        return name
    }
})

console.log(checkName)

// Output: ["Ajay", "Arun"]
//---------------------------------------------------

// 3️⃣ Filter objects by age > 18
const ages = [
  { name: "Rahul", age: 17 },
  { name: "Priya", age: 22 },
  { name: "Kumar", age: 15 },
]
const newages = ages.filter((age)=>{
    return age.age >18
})
console.log(newages);
// Output:
// Only people with age above 18.
//---------------------------------------------------

// 4️⃣ Remove duplicate numbers using filter

// Input:
const dup =  [1,2,2,3,4,4,5]
let res =[];
 const removedup = dup.filter((num, index)=>{
    if(dup.indexOf(num) === index){
            return res.push(num);
    }
 })

 console.log(res);
// Output: [1,2,3,4,5]

// (You already saw this — but it's a popular interview question.)
//---------------------------------------------------

// 5️⃣ Filter students who passed (marks ≥ 35)
// [
//   { name: "A", marks: 20 },
//   { name: "B", marks: 80 },
//   { name: "C", marks: 50 }
// ]


// Output → Only students with marks ≥ 35
//---------------------------------------------------

// 6️⃣ Extract only truthy values

// Input: [0, null, "hello", undefined, 42, "", NaN, true]
// Output: ["hello", 42, true]

// (Shows interview mastery)
//---------------------------------------------------

// 7️⃣ Filter products with price range

// Products:

const range =[
  { name: "Mobile", price: 10000 },
  { name: "Laptop", price: 45000 },
  { name: "TV", price: 30000 }
]

const rangee = range.filter((price)=>{
    if(price.price >10000 && price.price<40000){
        return price
    }
})
console.log(rangee)
// Return items between ₹10,000 and ₹40,000
//---------------------------------------------------

// 8️⃣ Filter employees who joined after 2020

// Input:

// [
//   { name: "Ravi", joined: 2019 },
//   { name: "Kiran", joined: 2021 },
//   { name: "Sneha", joined: 2023 }
// ]


// Output → Employees joined after 2020.
//---------------------------------------------------

// 9️⃣ Filter nested objects (advanced)

// Orders:

const orders = [
  { id: 1, items: 3 },
  { id: 2, items: 0 },
  { id: 3, items: 5 }
]

const resss = orders.filter((num)=>{
    return num.items > 1
})
console.log(resss)

// Return only orders that have at least 1 item.
//---------------------------------------------------

// 🔟 Filter sentences containing a keyword

// Input:

const resStr = [
  "JavaScript is awesome",
  "I love coding",
  "JS interviews are tricky",
  "Let's learn React"
]

const objectstr = resStr.filter((str)=>{
    return str.includes("JS")
})

console.log(objectstr)

// Keyword: "JS"
// Output:
// ["JS interviews are tricky"]