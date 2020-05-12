/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/** 
 * `quotes` array 
 * lists various tv / movie quotes. 
**/

let quotes = [
  {
      quote: `"Welcome to the real world. It sucks. You're gonna love it!"`,
      source: 'Monica',
      //citation: `Friends: "The One Where Monica Gets a Roommate"`,
      year: 1994
  },
  {
      quote: `"Do. Or do not. There is no try."`,
      source: 'Yoda',
      citation: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
  },
  {
      quote: `"We are what they grow beyond. That is the true burden of all masters."`,
      source: 'Yoda',
      citation: 'Star Wars: Episode VIII - The Last Jedi',
      year: 2017,
  },
  {
      quote: `"I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes."`,
      source: 'Ron Swanson',
      //citation: `Parks and Recreation: "Flu Season"`,
      year: 2011,
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
      //citation: `Friends: "The One with Rachel's Going Away Party"`,
      year: 2004,
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
      //citation: `Game of Thrones: "A Golden Crown"`,
      year: 2011,
  },
]

/**
 * `getRandomQuote` function
 * returns a random quote object from the `quotes` array above.
 **/

function getRandomQuote() {
    const randomNumber = Math.floor( Math.random () * quotes.length) + 1;
    const randomQuoteObject = quotes[randomNumber];
    return randomQuoteObject
}

/**
 * `printQuote` function
 * returns the random quote object as an HTML string.
 **/

function printQuote() {
     const randomQuote = getRandomQuote();
     let randomQuoteHTML = `<p class="quotes">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
     if (randomQuote.citation !== undefined) 
        randomQuoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
     if (randomQuote.year !== undefined) 
        randomQuoteHTML += `<span class="year">${randomQuote.year}</span>`;
     randomQuoteHTML += `</p>`
     return document.getElementById('quote-box').innerHTML = randomQuoteHTML;
}

printQuote();

document.getElementById('load-quote').addEventListener("click", printQuote, false);