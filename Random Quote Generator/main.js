let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

let quotes = [
  {
    quote: "It is never too late to be what you might have been.",
    author: "— George Eliot",
  },

  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "— Walt Whitman",
  },
  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    author: "— Oscar Wilde",
  },
  {
    quote: "To love and be loved is to feel the sun from both sides.",
    author: "— David Viscott",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "— Robert Frost",
  },
  {
    quote: "Man is the only creature that refuses to be what he is.",
    author: "— Albert Camus",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "— Franklin D.Roosevelt",
  },
];

let previosIndex = -1;

btn.addEventListener("click", () => {
  let num = Math.floor(Math.random() * quotes.length);
  while (num == previosIndex) {
    num = Math.floor(Math.random() * quotes.length);
  }
  previosIndex = num;
  quote.innerText = quotes[num].quote;
  author.innerText = quotes[num].author;
});
