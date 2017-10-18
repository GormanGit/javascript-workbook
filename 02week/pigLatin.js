//student:Jon Gorman
//Assignment: pigLatin
//Instructor: Reneee Dudley
//Date: 10/14/2017

//**Criteria of piLatin
//Make a function that utilizes pigLatin game which includes the following constraints:
//must split a word back to its first vowel and add it to the end with a "ay".
//*Use split function ".split()"
//*must be able to look for first vowel
//*must add the consonants to the end in original order. ie brew would be ewbray ".concat()"
//must handle small words like car and dog
//must handle larger words like "create" and "valley"
//must handle words that start in vowel, returning the word with just ay on the end. eggya
//must lowercase and trim.

//** whiteboard pigLatin revision "
//wont need global scope/storage.
//Main function name is pigLatin()
//Look at the tests to determine all the criteria needed to make the function pass.
//Use "if statement" to determine if the argument begins with a vowel Using .match().
//If the argument begins with a vowel then use .concat() to add "yay" to the end of the argument.
//Else if does not start with vowel use .search() on the string to locate first vowel.
//Use .slice() to slice the string after the vowel. Also keep in mind the .Also keep in mind space and case, toLowerCase().trim()
//Use .slice() to get contents of string before the vowel. Also keep in mind space and case, toLowerCase().trim()
// then concatenate the previous consonants with the variable = "ay"



const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pigLatin(word) {
    // Your code here
    // let word1 = word.toLowerCase().trim();
    let firstCheck = word.charAt(0);
    let suffix1 = "yay"
    if (firstCheck.match(/[aeiou]/gi)) {
        return word.concat(suffix1);

    } else {
        let suffix2 = 'ay';
        let vowelIn = word.search(/[aeiou]/gi);//searches for vowel and returns vowel in string.
        let arr = word.slice(0, vowelIn).toLowerCase().trim();//slices the string grabbing everything before the first vowel.Trim & Lowercase need to be used here ot pass tests
        let arr1 = word.slice(vowelIn).toLowerCase().trim();//slices the string leaving everthing after the first vowel.Trim & Lowercase need to be used here ot pass tests.
        return arr1.concat(arr) + suffix2;
    }
}


function getPrompt() {
    rl.question('word ', (answer) => {
        console.log(pigLatin(answer));
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#pigLatin()', () => {
        it('should translate a simple word', () => {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', () => {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', () => {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should lowercase and trim word before translation', () => {
            assert.equal(pigLatin('HeLlO '), 'ellohay');
            assert.equal(pigLatin(' RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}
