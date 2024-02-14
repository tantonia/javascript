// 1 - 1
let myName = " Antonia"
let message = "Hello"
console.log(`${message.concat(myName)}!`);

// 1 - 2
let num1 = 6
let num2 = 12
const sum = num1 + num2
console.log(sum);

// 1 - 3
let isTrue = true;
console.log(isTrue ? "Είναι αλήθεια!" : "Είναι ψευδές!");

// 2 - 1
let cities = ["Athens", "London", "Paris"]
cities.push("Berlin")
console.log(cities);
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// 2 - 2
let user = {
    name: 'Antonia',
    age: 42,
    city: 'Athens',
    hello: function(){
        console.log(`Γεια σου, ${this.name}!`)
    }
}

user.hello();

// 2 - 3
function calcAreaCircle(radius) {
    const area = Math.PI * Math.pow(radius, 2)
    return area
}
let radius = 5
let areaCircle = calcAreaCircle(5)

console.log(areaCircle);

// Arrays 1 - 1
function getUniqueValues(arr) {
    let uniqueValues = new Set(arr)
    let outputValues = Array.from(uniqueValues)
    return outputValues
}

let inputArr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9]
let outputArr = getUniqueValues(inputArr);

console.log(outputArr);

// Arrays 1 - 2
let nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

function simplifiedArray(nestedArray) {
    return [].concat(...nestedArray.map(el => Array.isArray(el) ? simplifiedArray(el) : el));
}

let simpleArr = simplifiedArray(nestedArray);
console.log(simpleArr);

// Arrays 2 - 1 
function truncatedArr(arr, chunkSize) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}

let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunkSize = 2;
let resultArray = truncatedArr(originalArray, chunkSize);

console.log(resultArray);

// Arrays 2 - 2
function overlap(arr1, arr2) {
    const result = arr1.filter(value => arr2.includes(value));
    return result;
}

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];
let common = overlap(array1, array2);
console.log(common);

// Objects 1 - 1
function filterByKeys(obj, keysArray) {
    const result = Object.fromEntries(
        Object.entries(obj)
            .filter(([key, value]) => keysArray.includes(key))
    );
    return result;
}

let originalObject = {
    name: 'Antonia',
    age: 42,
    city: 'Athens',
    gender: 'Female'
};

let selectedKeys = ['name', 'city'];
let filteredObject = filterByKeys(originalObject, selectedKeys);
console.log(filteredObject);

// Objects 1 - 2
function mapObjectValues(obj, mappingFunction) {
    const result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mappingFunction(obj[key]);
        }
    }
    return result ;    
}

let object1 = {
    a: 1,
    b: 2,
    c: 3
};

function addOne(value) {
    return value + 1;
}

let mappedObject = mapObjectValues(object1, addOne);
console.log(mappedObject);

// Objects 1 - 3
function transformKeys(obj, transformCallback) {
    const result = {};

    Object.keys(obj).forEach(key => {
        const transformedKey = transformCallback(key);
        result[transformedKey] = obj[key];
    });

    return result;
}

let person1 = {
    name: 'Antonia',
    age: 42,
    city: 'Athens'
};

function uppercaseTransform(key) {
    return key.toUpperCase();
}

let transformedObject = transformKeys(person1, uppercaseTransform);
console.log(transformedObject);
