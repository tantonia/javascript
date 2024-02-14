// 1 - 1
const nums = [1, 2, 3, 4, 5, 6, 7]
const doubleNums = nums.map(num => num * 2);
console.log(doubleNums);

// 1 - 2
const nums2 = [1, 2, 3, 4, 5, 6, 7]
const evens = nums2.filter(num => num % 2 === 0)
console.log(evens);

// 1 - 3
const nums3 = [-4, -6, 1, 5, 7, 9]
const areSomePositive = nums3.some(num => num >= 0)
console.log(areSomePositive);

// 1 - 4
const nums4 = [-4, -6, 1, 5, 7, 9]
const allPositive = nums4.every(num => num >= 0)
console.log(allPositive);

// 2 - 1
const people = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 25},
    {name: "Charlie", age: 35},
]

const underThirty = people.filter(person => person.age < 30)
console.log(underThirty);

// 2 - 2
const namesOnly = people.map(person => person.name)
console.log(namesOnly);