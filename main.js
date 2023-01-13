'use strict';
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
// TODO 1: Create a function, validateCred() that has a parameter of an array. The purpose of validateCred()
//  is to return true when an array contains digits of a valid credit card number and false when it is invalid.
//  This function should NOT mutate the values of the original array.

function validateCred(arr) {
    // Luhn algorithm to check if a credit card number is valid or not
    // 1. Starting from the farthest digit to the right
    let result = [arr[arr.length - 1]];
    // 2. As you iterate to the left, every other digit is doubled (the check digit is not doubled).
    // If the number is greater than 9 after doubling, subtract 9 from its value.
    for (let i = arr.length - 1; i >= 0; i--) {
        let item = arr[i];
        if (i === arr.length - 1)
            continue

        if (i % 2 === 0) {
            item *= 2;
            if (item > 9) {
                item -= 9;
            }
        }
        result.unshift(item)
    }
    // 3. Sum up all digits of the result cd number
    const sum = result.reduce((a, b) => {
        return a + b;
    })
    // 4. If the sum modulo 10 is 0, then the number is valid, otherwise, it’s invalid.
    return sum % 10 === 0;
}

// console.log(validateCred([4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8])) // check if validateCred works

// TODO 2: The role of findInvalidCards() is to check through the nested array for which numbers are invalid,
//  and return another nested array of invalid cards.
function findInvalidCards(arr) {
    // Returns an array of invalid Credit cards numbers
    return arr.filter(subArray => {
        return !validateCred(subArray);
    });
}
/*
const invalidCards = findInvalidCards(batch);
console.log(invalidCards)
console.log(invalidCards.length, batch.length)
*/
// TODO 3: identify invalid credit cards id's
function idInvalidCardCompanies(nestedArr) {
    // Takes a nested array of invalid credit card numbers and returns an array of companies.
    let companies = [];

    for (let j = 0; j < nestedArr.length; j++) {
        const firstDigit = nestedArr[j][0];
        switch (firstDigit) {
            case 3: companies.push("Amex");
            break;
            case 4: companies.push("Visa");
            break;
            case 5: companies.push("Mastercard");
            break;
            case 6: companies.push("Discover");
            break;
            default: console.log("Not a valid company")
        }
    }
    // checking for duplicate companies
    for (let i = 0; i < companies.length; i++) {

    }
    return companies;
}

const invalidCardsArr = findInvalidCards(batch);

console.log(idInvalidCardCompanies(invalidCardsArr));
