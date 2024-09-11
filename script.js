// Q2
// // local scopes

// function scopeOne() {
//   let scope1 = x;
// }

// function scopeTwo() {
//   var scope2 = y;
// }

// // global scope
// let scope3 = z;

// Q3
// a.
// function salutations()

// b.
// function getTaxRate(prov)

// c.
// function cylToVolume(h, r)

// Q5.
// the "\" character is reserved for escape sequences ("ex. n")
// Use "\\" to have the backslash symbol appear in the console
// e.g.  console.log("\\") >> outputs "\"
// function addRoof() {
//   console.log("    /\\");
//   console.log("  /    \\");
//   console.log(" /      \\");
// }

// function addBase() {
//   console.log("|        |");
//   console.log("|        |");
//   console.log("|________|");
// }

// function addWalk() {
//   console.log("    **");
//   console.log("    ***********");
// }

// addRoof();
// addBase();
// addWalk();

// Q6.
//   inches * 2.54 = centimeters
//   feet * 30 = centimeters
//   yards * 0.91 = meters
//   miles * 1.6 = kilometers

// metricConverter();

function metricConverter() {
  let userChoice = +prompt(
    "Hello! Choose which conversion you'd like: \n1. Inches to Centimeters      5. Centimeters to Inches \n2. Feet to Centimeters         6. Centimeters to Feet \n3. Yards to Meters                7. Meters to Yards \n4. Miles to Kilometers          8. Kilometers to Miles"
  );
  if (userChoice == 1) {
    inToCenti();
  } else if (userChoice == 2) {
    feetToCenti();
  } else if (userChoice == 3) {
    yardsToMeters();
  } else if (userChoice == 4) {
    milesToKilometers();
  } else if (userChoice == 5) {
    centiToIn();
  } else if (userChoice == 6) {
    centiToFeet();
  } else if (userChoice == 7) {
    metersToYards();
  } else if (userChoice == 8) {
    kilometersToMiles();
  } else {
    alert("Please enter one of the above choices.");
  }
}

function inToCenti() {
  let i = +prompt("How many inches into centimeters?");
  let c = i * 2.54;
  c = c.toFixed(2);
  alert(`${i} inches is ${c} cm`);
}

function feetToCenti() {
  let f = +prompt("How many feet into centimeters?");
  let c = f * 30;
  c = c.toFixed(2);
  alert(`${f} ft is ${c} cm`);
}

function yardsToMeters() {
  let y = +prompt("How many yards into meters?");
  let m = y * 0.91;
  m = m.toFixed(2);
  alert(`${y} yards is ${m} meters`);
}

function milesToKilometers() {
  let m = +prompt("How many miles into kilometers?");
  let k = m * 1.6;
  k = k.toFixed(2);
  alert(`${m} miles is ${k} kilometers`);
}

function centiToIn() {
  let c = +prompt("How many centimeters into inches?");
  let i = c / 2.54;
  i = i.toFixed(2);
  alert(`${c} cm is ${i} inches`);
}

function centiToFeet() {
  let c = +prompt("How many centimeters into feet?");
  let f = c / 30;
  f = f.toFixed(2);
  alert(`${c} cm is ${f} ft`);
}

function metersToYards() {
  let m = +prompt("How many meters into yards?");
  let y = m / 0.91;
  y = y.toFixed(2);
  alert(`${m} meters is ${y} yards`);
}

function kilometersToMiles() {
  let k = +prompt("How many kilometers into miles?");
  let m = k / 1.6;
  m = m.toFixed(2);
  alert(`${k} kilometers is ${m} miles`);
}

//  Q7. IsoTriangle Application  OMIT

// Q8.
addUp(4);

function addUp(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

// Q9.
countChar("hello", "l");

function countChar(word, letter) {
  let count = 0;
  for (let i = 0; i <= word.length; i++) {
    let currentLetter = word.charAt(i);
    if (currentLetter == letter) {
      count++;
    }
  }
  console.log(`There is ${count} letter ${letter} in ${word}`);
}

// 10.
findString("The devil wears prada", "evil");
findString("crazy owl", "cat");

function findString(phrase, word) {
  let foundString = false;

  for (let i = 0; i < phrase.length; i++) {
    // in the phrase, find the beginning letter of the word
    if (phrase.charAt(i) == word.charAt(0)) {
      // count the length of the word
      for (let x = 1; x < word.length; x++) {
        // end the count once the letters no longer match (the whole word is already found)
        if (phrase.charAt(i + x) != word.charAt(x)) {
          break;
        }
        foundString = true;
      }
    } else if (foundString) {
      break;
    }
  }

  // if true
  if (foundString) {
    console.log(`${word} found`);
    // if false
  } else {
    console.log(`${word} not found`);
  }
}

// Q11.
removeZeroes("00003.1400");

function removeZeroes(number) {
  let output = "";

  for (let i = 0; i <= number.length; i++) {
    let currentNum = number.charAt(i);

    // add every number that isn't a zero to output
    if (currentNum != 0) {
      output += currentNum;
      // console.log(output);
    }
  }
  console.log(output);
}
