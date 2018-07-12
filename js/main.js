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



// Overly Excited 

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (boo) {
    let buildMeUp = ""
    for (let i = 0; i < boo.length; i++) {
        buildMeUp += boo[i] + " ";
        console.log(buildMeUp);
    }
}
addExcitement(sentence)

    // Each time the for loop executes, you're going to add one more word to this string

            // Concatenate the new word onto buildMeUp

        // Print buildMeUp to the console

// Invoke the function and pass in the array



