// 1. Shallow Copy

// Copies only the first level of the object/array.

// Nested objects/arrays are still referenced, not copied.

// If you change nested data in the copy, it also changes in the original.

let user = {
  name: "Alice",
  address: { city: "Hyderabad" }
};

// Shallow copy
let shallow = { ...user };

shallow.name = "Bob";
shallow.address.city = "Delhi";

console.log(user.name);        // "Alice" ✅ (independent)
console.log(user.address.city); // "Delhi" ❌ (changed in original!)


// 2. Deep Copy

// Copies everything, including nested objects/arrays.

// Original and copy become completely independent.

// Changing one will not affect the other.

let user1 = {
  name: "Alice",
  address: { city: "Hyderabad" }
};

// Deep copy (modern way)
let deep = structuredClone(user1);

deep.name = "Bob";
deep.address.city = "Delhi";

console.log(user1.name);        // "Alice" ✅
console.log(user1.address.city); // "Hyderabad" ✅
