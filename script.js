//1//
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//2//
function isAdult(age) {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2 Result:', isAdult(21));

//3// I used vowel and consosant instead of true or false. hope that's fine.//
function isCharAVowel(a) {
    const vowels = ['a', 'e', 'o', 'u', 'i']
    if (vowels.includes(a)) {
        return 'Vowel';
    } else {
        return 'Consosant'
    }
}

console.log('Exercise 3 Result', isCharAVowel("a"));

//4//
function generateEmail(name, domain) {
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

//5//
function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//6//
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//7//
function calculateTip(bill, percentage) {
    let tip = bill * (percentage / 100);
    return tip;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

//8//
function convertTemperature(temp, scale) {
    if (scale === 'C') {
        return (temp * 9 / 5) + 32;
    } else if (scale === 'F') {
        return (temp - 32) * 5 / 9;
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

//9//
function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            return num1 / num2;
        }
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));



