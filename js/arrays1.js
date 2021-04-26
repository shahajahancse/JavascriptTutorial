
// Deleting elements using JavaScript Array’s splice() method
let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);  // items delete
console.log(scores);

// Inserting elements using JavaScript Array splice() method
let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");  // items insert
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);  // ["red", "yellow", "pink", "green", "purple", "blue"]

// Replacing elements using JavaScript Array splice() method
let languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 2, "Python","Php", "Go"); // delete 2 items & insert 3 item
console.log(languages);  // ["C", "Python", "Php", "Go", "JavaScript"]
