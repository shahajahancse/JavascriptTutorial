// Introduction to JavaScript Promise.race() static method
const p1 = new Promise((resolve, reject) => {
  console.log(' The first promise resolved. ');
  resolve(10);
});
const p2 = new Promise(function(resolve, reject) {
  console.log(' The second promise resolve. ');
  resolve(20);
});
Promise.race([p1, p2]).then(value => console.log(`Resolved : ${value}`))
  .catch(reason => console.log(`Rejected : ${reason}`));

const p3 = new Promise((resolve, reject) => {
  console.log(' The first promise resolved. ');
  resolve(10);
});
const p4 = new Promise(function(resolve, reject) {
  console.log(' The second promise rejected. ');
  reject(20);
});
Promise.race([p3, p4]).then(value => console.log(`Resolved : ${value}`))
  .catch(reason => console.log(`Rejected : ${reason}`));

//  Practical JavaScript Promise.race() example
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = `Promise.race() demo.`;
      resolve(message);
    }, 3000);
  });
}
function showContent(message) {
  document.querySelector('#message').textContent = message;
}
function timeout() {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => reject(), 500);
  });
}
function showLoadingIndicator() {
  document.querySelector("#loader").className = "loader";
}
function hideLoadingIndicator() {
  document.querySelector("#loader").className = '';
}
// handle button click event
const btn = document.querySelector('#btnGet');
btn.addEventListener('click', () => {
    // reset UI if users click the 2nd, 3rd, ... time
    reset();

    // show content or loading indicator
    Promise.race([getData()
            .then(showContent)
            .then(hideLoadingIndicator), timeout()
        ])
        .catch(showLoadingIndicator);
});


// reset UI
function reset() {
    hideLoadingIndicator();
    showContent('');
}
