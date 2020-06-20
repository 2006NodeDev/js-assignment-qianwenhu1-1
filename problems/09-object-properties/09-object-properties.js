/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for (const property in someObj){ // use in for object, of for array
        console.log(`key is ${property} value is ${someObj[property]}`);
    }
}

// let randomObj = {
//     name: "snn",
//     id: 123,
//     numbers: [1,2,34,5,3]
// }
// objectProperties(randomObj)
