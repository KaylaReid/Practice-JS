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

