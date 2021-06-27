// Introduction to JavaScript try...catch statement
function test(){
  try {
    return 1;
  } catch(error) {
    return 2;
  } finally {
    return 3;
  }
}
console.log(test());

let connection = {
    open: function () {
        console.log('open a connection');
    },
    close: function () {
        console.log('close the connection');
    }
};

try {
    connection.open();
} catch (error) {
    console.log(error.message);
} finally {
    connection.close();
}

let message = 'Hi, are you there? hi, HI...';
let re = /hi/gi;
let matches = [];
let match;
do {
    match = re.exec(message);
    if(match) {
      matches.push(match);
    }
} while(match != null)
console.dir(matches);

let str = "Are you Ok? Yes, I'm OK";
let result = str.match(/OK/gi);
console.log(result);

result = str.replace(/OK/gi, "fine");
console.log(result);

let phone = "+1-(408)-555-0105";
re = /\d/gi;
let num = phone.match(re).join("");
console.log(num);

str = `1st line
2nd line
3rd line`;
re = /^\d/gm;
matches = str.match(re).join("");
console.log(matches);

str = "How cats, rats, and bats became Halloween animals";
re = /[cbr]ats/g;
results = str.match(re).join(" ");
console.log(results);

result = "It is 🍎".match(/[🍎🍅🍓]/);
console.log(result);

str = '🍎🍅🍓';
for(let i=0; i<str.length; i++) {
    console.log(str.charCodeAt(i));
}

result = "It is 🍎".match(/[🍎🍅🍓]/u).join("");
console.log(result);

str = "ECMAScript 2020";
re = /\d{4}/;
result = str.match(re).join("");
console.log(result);

str = "The official name of ES11 is ES2020";
re = /\d{2,4}/g;
result = str.match(re);
console.log(result);


