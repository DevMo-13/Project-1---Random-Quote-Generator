/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
--aiming for exceeds expectations--
******************************************/

/** 
 * `quotes` array lists various tv / movie quotes. 
**/

let quotes = [
  {
      quote: `"Welcome to the real world. It sucks. You're gonna love it!"`,
      source: 'Monica',
      citation: `Friends: "The One Where Monica Gets a Roommate"`,
  },
  {
      quote: `"Do. Or do not. There is no try."`,
      source: 'Yoda',
      citation: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
      tags: 'film',
  },
  {
      quote: `"We are what they grow beyond. That is the true burden of all masters."`,
      source: 'Yoda',
      citation: 'Star Wars: Episode VIII - The Last Jedi',
      year: 2017,
      tags: 'film',
  },
  {
      quote: `"I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes."`,
      source: 'Ron Swanson',
      citation: `Parks and Recreation: "Flu Season"`,
  },
  {
      quote: `“Never half-ass two things. Whole-ass one thing.”`,
      source: 'Ron Swanson',
      citation: `Parks and Recreation: "Sweet Sixteen"`,
      year: 2012,
  },
  {
      quote: `“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.”`,
      source: 'Michael Scott',
      citation: `The Office: "The Fight"`,
      year: 2005,
  },
  {
      quote: `"I need you to be careful and efficient. And remember: If I am harsh with you, it’s only because you’re doing it wrong."`,
      source: 'Monica',
      citation: `Friends: "The One with Rachel's Going Away Party"`,
  },
  {
      quote: `"You live only as long as the last person who remembers you."`,
      source: 'Akecheta',
      citation: `Westworld: "The Riddle of the Sphinx"`,
      year: 2018,
  },
  {
      quote: `"I wish there was a way to know you're in the good old days before you've actually left them."`,
      source: 'Andy Bernard',
      citation: `The Office: "Finale "`,
      year: 2013,
  },
  {
      quote: `“There is only one god and his name is Death, and there is only one thing we say to Death: ‘Not today.’”`,
      source: 'Syrio Forel',
      citation: `Game of Thrones: "A Golden Crown"`,
  },
]

/**
 * `getRandomQuote` function
 * returns a random quote object from the `quotes` array above.
**/

function getRandomQuote() {
    const randomNumber = Math.floor(Math.random () * quotes.length);
    const randomQuoteObject = quotes[randomNumber];
    return randomQuoteObject
}

/**
 * `printQuote` function
 * returns the random quote object as an HTML string.
 * 
 * The `getRandomBgColor` function within it returns a 
 * random color in RGB format and changes the 
 * background color of the page each time the 
 * `printQuote` function is called.
 * Note: the `getRandomBgColor` function code is adapted from 
 * https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
**/

function printQuote() {
     const randomQuote = getRandomQuote();
     let randomQuoteHTML = `<p class="quotes">${randomQuote.quote}</p>`;
     randomQuoteHTML += `<p class="source">${randomQuote.source}`;
     if (randomQuote.citation !== undefined) {
        randomQuoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
     }
     if (randomQuote.year !== undefined) {
        randomQuoteHTML += `<span class="year">${randomQuote.year}</span>`;
     }
     if (randomQuote.tags !== undefined) {
        randomQuoteHTML += `<span class="tags">, (${randomQuote.tags})</span>`;
     }
     randomQuoteHTML += `</p>`
     function getRandomBgColor() {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const color = `rgb(${x},${y},${z})`;
        document.body.style.background = color;
     }
     getRandomBgColor();
     return document.getElementById('quote-box').innerHTML = randomQuoteHTML;
}

printQuote();
setInterval(printQuote, 7500); // -- This method runs the `printQuote` function automatically every 7.5 seconds.

document.getElementById('load-quote').addEventListener("click", printQuote, false);