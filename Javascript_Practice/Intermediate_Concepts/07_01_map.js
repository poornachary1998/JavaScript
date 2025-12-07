// solving map problems:
// 1️⃣ Convert an array of numbers into an array of objects

// Input:
let arr = [10, 20, 30]


// Output:

// [
//   { value: 10, isEven: true },
//   { value: 20, isEven: true },
//   { value: 30, isEven: true }
// ]


// 👉 Logic challenge: return objects, add computed fields.

let newarr = arr.map((num)=>{
   return  {value: num, 
    isEven : num %2 ===0}
})

console.log(newarr)
// ---------------------------------------------------------------

// 2️⃣ Extract full names from an array of user objects

// Input:

let users = [
  { fname: "Ram", lname: "Kumar" },
  { fname: "Sita", lname: "Devi" }
]

// Output:

// ["Ram Kumar", "Sita Devi"]

let res = users.map((obj, idx)=>{
return (`${idx} ${obj.fname} ${obj.lname}`);
})


console.log(res)

// ---------------------------------------------------------------

// 3️⃣ Convert array of products → discounted price list
let prices = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
]


// Apply 10% discount → output array of prices:

// [45000, 18000]

let discountprices = prices.map((val)=>{
return val.price = val.price - 10 * val.price / 100
})

console.log(discountprices)

// 👉 Think: p.price * 0.9

// ---------------------------------------------------------------

// 4️⃣ Convert nested array structure to readable strings

// Input:

let dataset = [
  { id: 1, skills: ["JS", "React"] },
  { id: 2, skills: ["Python", "Django"] }
]

let strData = dataset.map((data) =>{
    console.log(data)
    return (data.id +":"+ data.skills)

})
console.log(strData)
// Output:

// [
//   "1: JS, React",
//   "2: Python, Django"
// ]
// ---------------------------------------------------------------


// 5️⃣ Convert array of transactions → formatted statements

// Input:

let transactions = [
  { amount: 200, type: "credit" },
  { amount: 100, type: "debit" }
]
 let transMessage = transactions.map((data)=>{
    if (data.type === "credit"){
 return (`Credited  Rs.${data.amount}`)
    } else {
   return     (`Debited  Rs.${data.amount}`)
    }
 })

 console.log(transMessage)

// Output:

// [
//   "Credited ₹200",
//   "Debited ₹100"
// ]
// ---------------------------------------------------------------


// 6️⃣ Add total including tax to each invoice
let individualData = [
  { id: 1, price: 1000, tax: 18 },
  { id: 2, price: 2000, tax: 12 }
]

let total = individualData.map((data)=>{
    return {
        // ...data,
        id: data.id,
        total: data.price + (data.price * data.tax)/100
    }
})
console.log(total)
// Output:

// [
//   { id: 1, total: 1180 },
//   { id: 2, total: 2240 }
// ]

// ---------------------------------------------------------------
// ✅ 10. Replace values based on lookup table (Hard)

// Given:

const codes = ["IN", "US", "UK", "AU"];

const countries = {
  IN: "India",
  US: "United States",
  UK: "United Kingdom",
  AU: "Australia"
};

let countrry = codes.map((code)=>{
    for (let val in countries){
if(code === val){
    return countries[val]
}
    }
})

console.log(countrry)

// Convert codes into country names using map:

// ["India", "United States", "United Kingdom", "Australia"]