/*
    Take Home Challenge:
    You are given a list of words sorted in alphabetical order. 
    The only issue is that this alphabet isn’t English. 
    Can you determine the ordering of the alphabet?

    Note that you can assume the list of words will have enough information to derive the complete order of the alphabet.
    Input:
    'bca'    'aaa'    'acb'
    Output:
    ['b'. 'a', 'c'];
*/

// NOTE: the first letter of the first word is NOT guaranteed to also be first in the end order.
// NOTE: assumes the INPUT provided does not contain any faulty relationships (i.e. a --> b and b --> a)

// INPUT:  [ Strings ]
// OUTPUT:  [ Char ]
var order = (wordList) => {

    /* Add all unique letters to Map */
    let allLettersDict = new Map();
    String.prototype.concat(...new Set(wordList.join(''))).split('').forEach((letter) => {
        allLettersDict.set(letter, []);
    });

    /* add relationships */
    let currWord, nextWord, wordListLen = wordList.length - 1;
    for (let row = 0; row < wordListLen; row++) {
        currWord = wordList[row];
        nextWord = wordList[row + 1];

        let wordLen = Math.min(currWord.length, nextWord.length);
        for (let col = 0; col < wordLen; col++) {

            if (currWord[col] !== nextWord[col]) {
                let prevVal = allLettersDict.get(currWord[col]);
                allLettersDict.set(currWord[col], [...prevVal, nextWord[col]])
                break;
            }
        }
    }

    /* simplify/order relationships */
    let output = [];

    // depth-first-search
    var stack = [];
    var visited = [];

    // recursive helper function
    const dfs_util = (node) => {
        if (visited.includes(node)) return;

        visited.push(node);
        stack.push(node);

        const neighborNodes = allLettersDict.get(node);
        neighborNodes.forEach((neighborNode) => {
            if (!visited.includes(neighborNode)) dfs_util(neighborNode);
        });

        stack.pop();
        output.push(node);
    };

    let relationships = [...allLettersDict.keys()];
    relationships.forEach((rel) => dfs_util(rel));

    output = output.reverse();
    //console.log(output);
    return output;
};

/* ==============================================
 * TESTS
 */

const testArray = ["bca", "aaa", "acb"];
console.log("Test Case 1 - [ b a c ]: " + order(testArray));

const testArrayTwo = ["baa", "caa", "cba", "dc"];
console.log("Test Case 2 - [ a , b , c , d ]: " + order(testArrayTwo));

const testArrayThree = ["caa", "cab", "cc", "bc", "db"];
console.log("Test Case 3 - [ a , c , b , d ]: " + order(testArrayThree));

const testArrayFour = ["x", "y", "z"];
console.log("Test Case 4 - [ x, y, z]: " + order(testArrayFour));