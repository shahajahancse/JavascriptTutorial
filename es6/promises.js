// Creating a promise: the Promise constructor
let completed = true;
let learnJS = new Promise(function ( resolve, reject ) {
  if (completed) {
    resolve('I have completed learning JS.');
  } else {
    reject('I haven\'t completed learning JS yet.' );
  }
})
console.log(learnJS);


// Introduction to the JavaScript promise chaining
let p = new Promise(function (resolve, reject ) {
  resolve(10);
})
p.then((result) => {
    console.log(result);
    return result * 2;  //10
}).then((result) => {
    console.log(result);
    return result * 3; //20
}).then((result) => {
  console.log(result); //60
  return result * 4;
});
// Multiple handlers for a promise
let t = new Promise(function (resolve, reject) {
  resolve(2);
})
t.then((result) => {
  console.log(result);
  return result; //2
});
t.then((result) => {
  console.log(result); //2
  return result;
});
t.then((result) => {
  console.log(result); //2
  return result;
});
// Returning a Promise
p.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    resolve(result * 10);
  });
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    resolve(result * 5);
  });
}).then(result => console.log(result));

function generateNumber(num) {
    return new Promise((resolve, reject) => {
        resolve(num);
    });
}

generateNumber(10).then(result => {
        console.log(result);
        return generateNumber(result * 2);
    }).then((result) => {
        console.log(result);
        return generateNumber(result * 3);
    }).then(result => console.log(result));

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get the user from the database.');
        resolve({
            userId: userId,
            username: 'admin'
        });
    })
}
function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        resolve(['Email', 'VPN', 'CDN']);
    });
}
function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        resolve(services.length * 100);
    });
}
getUser(100).then(getServices).then(getServiceCost).then(console.log);
