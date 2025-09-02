let userName = "Abosede"; // variable declaration
let age = 25;

if(age => 18){
    console.log(userName + "is an adult.");
}
else{
    console.log(userName + "is a minor.");
}

// functions
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log("Total cost:", calculateTotal(500, 3));

//format
function formatGreeting(name) {
    return 'hello, ${name}! Welcome to JS Intro.';
}
console.log(formatGreeting("Abosede"));

//loop
let counter = 3;
while (counter > 0) {
    console.log("countdown:", counter);
    counter;
}

// DOM
document.getElementById("toggleBtn").addEventListener("click", () => {
  let greeting = document.getElementById("greeting");
  greeting.textContent =
    greeting.textContent === "Hello, welcome to the assignment!"
      ? "You toggled the greeting! 🎉"
      : "Hello, welcome to the assignment!";
});

// DOM 2: Create and add list items dynamically
let fruits = ["Apple", "Banana", "Cherry"];
let itemList = document.getElementById("itemList");
fruits.forEach((fruit) => {
  let li = document.createElement("li");
  li.textContent = fruit;
  itemList.appendChild(li);
});

// DOM 3: Countdown displayed on page
document.getElementById("countdownBtn").addEventListener("click", () => {
  let count = 5;
  let countdownEl = document.getElementById("countdown");
  let interval = setInterval(() => {
    countdownEl.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      countdownEl.textContent = "🚀 Done!";
    }
  }, 1000);
});
  