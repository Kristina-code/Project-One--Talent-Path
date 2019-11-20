/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
    quote: "The only way to get a thing done is to start to do it, then keep on doing it, and finally you'll finish it.",

    source: "Langston Hughes",

    citation: "Langston Hughes (2002). “The Collected Works of Langston Hughes”, p.50, University of Missouri Press"

  },

  {

    quote: "Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t             think you can go wrong.",

    source: "Ella Fitzgerald",

    citation: "https://www.goalcast.com/2018/04/25/12-ella-fitzgerald-quotes/"

  },

  {
    quote: "My motto,as I live and learn, is Dig and be dug in return!",

    source: "Langston Hughes",

    citation: "Poem"

  },

  {

    quote: "Artists are here to disturb the peace.",

    source: "James Baldwin",

    citation: "Conversations With James Baldwin, Book by James A. Baldwin",

    year: "1989",

  },

  {

    quote: "I failed my way to success.",

    source: "Thomas Edison",

    citation: " Unknown ",


  }

];




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
***/



function getRandomQuote() 

{

  var randomNumber = Math.floor(Math.random() * quotes.length);

  return quotes[randomNumber];

};


//Create the `printQuote` function to: Call the `getRandomQuote` function and assign it to a variable.


function printQuote() {

  phrases = getRandomQuote();


  // Create a variable for the html string and set it equal to an empty string.

  randomGenerator = "";

  // Use the html template in the instructions or the markup in the index.html file, AND the random quote vairable to build your html string.
  //teamtreehouse.com/projects/a-random-quote-generator
  //  Add the quote and source section to the html string.


  randomGenerator += `<p class="quote"> ` + phrases.quote + '</p>';

  randomGenerator += `<p class="source">` + phrases.source  + '</p>';




  //   Use an if statement to check for the citation property before adding it to the html string.
  //   https://www.w3schools.com/java/java_conditions.asp


  if (phrases.citation) {

    randomGenerator += `<p class="citation">`  + phrases.citation + '</p>';
  }; 

  
  //  Use an if statement to check for the year property before adding it to the html string.


  if (phrases.year) {

    randomGenerator += `<p class="year"` + phrases.year + '</p>';


  }

  randomGenerator += '</p';

  document.getElementById('quote-box').innerHTML = randomGenerator;

  
  var randomNumber = Math.floor(Math.random() * quotes.length);
  

 // Target the div with the id of quote-box, and set its innerHTML equal to the HTML string that’s been assembled. 
    // Set the `innerhtml` of the `quote-box` div to the html string.      

    var printDiv = document.getElementById('quote-box');

    printDiv.innerHTML = randomGenerator;

}

 //  When the "Show another quote" button is clicked, the event listener below will be triggered, and it will call, or "invoke", the `printQuote` function.
  

    document.getElementById('loadQuote').addEventListener("click", printQuote, false);

