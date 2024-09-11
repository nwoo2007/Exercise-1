// Question 5

addRoof();
addHouse();
addSidewalk();

function addRoof() {
  console.log("   /\\");
  console.log("  /  \\");
  console.log(" /____\\");
}

function addHouse() {
  console.log("|      |");
  console.log("|      |");
  console.log("|______|");
}

function addSidewalk() {
  console.log("   **   ");
  console.log("   **************   ");
}

// Question 6
// Only first 2 are done, rest are similar

function showMenu() {
  let choice = +prompt(
    "Choose a number\n\n1. IN > CM\n2.CM > IN\n3. FT > CM\n4. CM > FT\n5. YD > M\n6. M > YD\n7. MI > KM\n 8. KM > MI"
  );

  if (choice == 1) inToCm();
  if (choice == 2) cmToIn();
}

function inToCm() {
  let inch = +prompt("Enter Inches:");
  alert(inch + " in = " + (inch * 2.54).toFixed(1) + " cm");
}

function cmToIn() {
  let cm = +prompt("Enter Centimetres:");
  alert(cm + " cm = " + (cm / 2.54).toFixed(1) + " in");
}

showMenu();

// Question 7 - OMIT

// Question 8
function addUp(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  console.log(sum);
}

addUp(4);
addUp(10);
addUp(100);

// Question 9
function countChar(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == letter) count++;
  }
  console.log("found " + count + " " + letter + "'s in " + word + ".");
}

countChar("elephant", "e");
countChar("zebra", "x");
countChar("hippopotamus", "p");

// Question 10
function findString(phrase, word) {
  let foundString = false;

  for (let i = 0; i < phrase.length; i++) {
    if (phrase.charAt(i) == word.charAt(0)) {
      for (let j = 1; j < word.length; j++) {
        if (phrase.charAt(i + j) != word.charAt(j)) {
          break;
        }
        foundString = true;
      }
    } else if (foundString) {
      break;
    }
  }

  if (foundString) console.log(word + " found");
  else console.log(word + " not found");
}

findString("devil", "evi");
