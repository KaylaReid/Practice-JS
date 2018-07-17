// practice JS
// ChickenMonkey


for (let i = 1; i < 101; i++) {
    let newNum = i;
    if (newNum % 5 === 0 && newNum % 7 === 0) {
        console.log("Chicken Monkey");
    } else if (newNum % 5 === 0) {
        console.log("chicken");
    } else if (newNum % 7 === 0) {
        console.log("monkey");
    } else {
        console.log(newNum);
    }
    // if (i > 100){
    //     break;
    // }
}

// Take a Number - Battle of the Bands
let bandNumber = 1

let takeNumber = function (bandName) {
    return `${bandNumber++} ${bandName}`;
    
}

const scum = takeNumber("Galactic Scum")
console.log(scum) 

const oar = takeNumber("O.A.R")
console.log(oar) 

const beatles = takeNumber("The Beatles")
console.log(beatles) 


// Stacking Words

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// function addExcitement (theWordArray) {
//     let buildMeUp = ""
//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += theWordArray[i] + " ";
//         console.log(buildMeUp);
//     }
// }
// addExcitement(sentence)

// Overly Excited

// function addMoreExcitement (theWordArray) {
//     let buildMeUp = ""
//     let bang = 0
//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += theWordArray[i] + " ";
//         bang++
//         if (bang % 3 === 0) { 
//             console.log(buildMeUp += "! ") 
//         } else {
//         console.log(buildMeUp);
//     }
//     }
// }
// addMoreExcitement(sentence)


// Even More Excited
let exclamation = "" 

function overlyExcited (theWordArray) {
    let buildMeUp = ""
    let bang = 0
    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += theWordArray[i] + " ";
        bang++
        if (bang % 3 === 0) { 
            exclamation += "! "
            console.log(buildMeUp += exclamation) 

        } else {
        console.log(buildMeUp);
    }
    }
}
overlyExcited(sentence)

// pass in any character you want

// function anyArg (theWordArray, character) {
//     let buildMeUp = ""
    
//     let characterContainer = character
//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += theWordArray[i] + " ";
//         if ((i - 2) % 3 === 0) { 
//             buildMeUp += characterContainer
//             characterContainer += character
//         } else {
//         console.log(buildMeUp);
//     }
//     }
// }
// anyArg(sentence, "? ")


// refactored option via meg
function addExcitement (theWordArray, symb) {

    let buildMeUp = "";
    let wordCount = 0;

    for (let i = 0; i < theWordArray.length; i++) {
        wordCount ++;
        let currentWord = theWordArray[i];
        buildMeUp += " " + currentWord;

        if(wordCount % 3 === 0){
            buildMeUp = buildMeUp + symb.repeat(wordCount/3);
        }
        console.log(buildMeUp);
    }

}

addExcitement(sentence, " SO GREAT ");

// Referance 

// this way of making objects has no restrictions
let table = {
    legs: 4,
    maker: "Target",
    color: "brown",
    height: "12'",
    material: "wood",
    move: function(movement){
        console.log(`This ${this.color} table will ${movement}!`);
    }
};

table.move("dance");

table.color = "black";
table.move("dance");

// object.creat has a defalt restriction of not letting you over write things in the object

const sweetFactory = function(topping){
    const sweet = Object.create({}, {
        topping: {
            value: topping
        },
        move: {
            value: function(arg){
                console.log(`The sweet will ${arg}`);
            }
        }
    });
    return sweet;
};

let arrayOsweets = [];

arrayOsweets.push(sweetFactory("chocolate"), sweetFactory("vanilla"));

console.log(arrayOsweets);