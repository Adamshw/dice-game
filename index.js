let dice = {
  sides: 6,
  throw() {
    return Math.round(Math.random() * (this.sides-1)+1);
  },
};

document.querySelector("#throw-button").addEventListener("click", function () {
  const number = dice.throw();
  document.querySelector("#myDice").classList = "";
  document.querySelector("#myDice").classList.add("dice", "dots-" + number);
  let counterElem = document.querySelector("#counter");
  counterElem.innerHTML = count ;
  counter();
  numDetector(number);
  
});

// document.querySelector("#throw-button").onclick = function () {
  
// };

var count = 1;
function counter() {
  count++;
}

function numDetector(randomNum) {
  if (randomNum == 1) {
    let one = document.getElementById("one");
    one.innerHTML = "One";
  }
  if (randomNum == 2 && one.innerHTML == "One") {
    let two = document.querySelector("#two");
    two.innerHTML = "Two";
  }
  if (randomNum == 3 && two.innerHTML == "Two") {
    let three = document.querySelector("#three");
    three.innerHTML = "Three";
  }
  if (randomNum == 4 && three.innerHTML == "Three") {
    let four = document.querySelector("#four");
    four.innerHTML = "Four";
  }
  if (randomNum == 5 && four.innerHTML == "Four") {
    let five = document.querySelector("#five");
    five.innerHTML = "Five";
  }
  if (randomNum == 6 && five.innerHTML == "Five") {
    let six = document.querySelector("#six");
    six.innerHTML = "Six";
  }
}
