function randomSentence(){

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
});

let names = [`Simeon`, `Kiril`, `Orhan`, `Atanas`,
    `Nikolai`, `Elizabeth`, `Veronika`, `Reya`];

let places = [`Karlovo`, `Dupnica`, `Sopot`, `Sofia`,
    `Plovdiv`, `Montana`, `Sveti Vlas`];

let verbs = [`eats`, `smokes`, `grows`, `plays with`, `is running from`, `bakes`];

let nouns = [`spaghetti`, `giant`, `ball`, `people`, `trees`];

let adverbs = [`slowly`, `rapidly`, `unfortunatelly`, `suprisingly`];

let details = [`next to the boxing gym`, `at his mom's house`, `in the pool`, `on thin ice`]

function getRandowWord(array) {

    let word = array[Math.floor(Math.random() * array.length)]
    return word;
}

let randomName = getRandowWord(names);
let randomPlace = getRandowWord(places);
let randomVerb = getRandowWord(verbs);
let randomNoun = getRandowWord(nouns);
let randomAdverb = getRandowWord(adverbs);
let randomDetails = getRandowWord(details);


let who = `${randomName} from ${randomPlace}`;
let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
let sentence = `${who} ${action} ${randomDetails}`;

console.log(`Hello, this is your first random-generated sentence:`);
console.log(sentence);

let recursiveAsyncReadLine = function () {
    readline.question(`Click [enter] to generate a new one.`, string => {

      
    })
};


}

randomSentence();