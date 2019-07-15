// function to parse an integer from a string input
// optional: handle non-decimal numbers too

const parseInt = (str) => {
    if (typeof str == 'string') {

        // can swap over to ES6 Map object;
        const numStrDict = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9 };
        const reducer = (accumulator, currentValue, idx, arr) => accumulator + (currentValue * (10 ** ((arr.length - idx) - 1)));

        let strNumArr = Array.from(str)
        var hasNegative = strNumArr[0] === '-';
        if (hasNegative) strNumArr = strNumArr.slice(1);

        let strNum = strNumArr.map((char) => {
            let num = numStrDict[char];
            if (typeof num == 'number') {
                return num;
            } else throw 'Error: bad input provided. Please check for any non-integer values.';
        }).reduce(reducer, 0);

        return hasNegative ? -1 * strNum : strNum;
    } else {
        throw 'Error: bad input provided. Please check your string.';
    }
};

// tests
console.log('test one - [12121212]', parseInt('12121212'))
console.log('test two - [-12121212]', parseInt('-12121212'))