/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



var quotes = [
  {
    quote: "The only way to get a thing done is to start to do it, then keep on doing it, and finally you'll finish it.",

    source: "Langston Hughes",

    citation: "Langston Hughes (2002). “The Collected Works of Langston Hughes”, p.50, University of Missouri Press"

  },

  {

    quote: "Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong.",

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

    year: "1989"

  },

  {

    quote: "I failed my way to success.",

    source:"Thomas Edison",

    citation: "Unknown"


  },

];




/*** 
   - I used this website as guideline to create the getRandomQuote function  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
***/


function getRandomQuote() 

{

  var randomNumber = Math.floor(Math.random() * quotes.length);

  return quotes[randomNumber];

};


//printQuote function


function printQuote() {

  phrases = getRandomQuote();


  randomGenerator = "";

  randomGenerator += `<p class="quote"> ` + phrases.quote + '</p>';

  randomGenerator += `<p class="source">` + phrases.source  + '</p>';



  // Referenced:  https://www.w3schools.com/java/java_conditions.asp to learn how assit with if statements

  if (phrases.citation) {

    randomGenerator += `<p class="citation">`  + phrases.citation + '</p>';

    
  }; 

   if (phrases.year) {

    randomGenerator += `<p class="year"` + phrases.year + '</p>'; 
  
  }

  randomGenerator += '</p';

  document.getElementById('quote-box').innerHTML = randomGenerator;

  var randomNumber = Math.floor(Math.random() * quotes.length);
        

    var printDiv = document.getElementById('quote-box');

    printDiv.innerHTML = randomGenerator;

}

 // " When the "Show another quote" button is clicked, the event listener below will be triggered, and it will call, or "invoke", the `printQuote` function.""
  

    document.getElementById('loadQuote').addEventListener("click", printQuote, false);

