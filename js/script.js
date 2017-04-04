//array with my five quotes, sources, citations, years, and tags 
var quotes = [
    {
        quote: "Without music, life would be a mistake.",
        source: "Friedrich Nietzsche",
        citation: "Twilight of the Idols",
        year: 1889,
        tags: ["music", "philosophy"]
    },
    {
        quote: "Where words leave off, music begins.",
        source: "Heinrich Heine",
        tags: ["music", "poet", "romanticism"]
    },
    {
        quote: "Music can change the world because it can change people.",
        source: "Bono",
        tags: ["music", "musician", "activist"]
    },
    {
        quote: "You are the music while the music lasts.",
        source: "T.S. Eliot",
        citation: "The Dry Salvages",
        year: 1941,
        tags: ["music", "philosophy", "poet"]
    },
    {
        quote: "Music expresses that which cannot be said and on which it is impossible to be silent.",
        source: "Victor Hugo",
        citation: "Hugo's Works: William Shakespeare",
        tags: ["music", "poet"]
    },
]

var seenQuotes = quotes.slice();
var quoteTime;
    
//create a function that will select a random quote from my array and return it 
function getRandomQuote () {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

//create a function that will automatically change the quotes without button being clicked
function intervalTime() {
    window.clearInterval(quoteTime);
    quoteTime = window.setInterval(printQuote, 5000);
}

//create a function that will have the background color change every time the quote changes
function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

//create a function that will display my quote, the timing, the background color 
function printQuote () {
    var randomQuote = getRandomQuote();
    var viewedQuote = quotes.indexOf(randomQuote);
    //removes viewed quote from array
    quotes.splice(viewedQuote, 1);
    //replaces quotes once they have all been seen
    if (quotes.length === 0) {
        quotes = seenQuotes.slice();
    }
    //displays the quote and source
    var quoteInfo = '<p class="quote">' + randomQuote.quote + '</p>';
    quoteInfo += '<p class="source">' + randomQuote.source;
    //displays if there is a citation and/or year
    if (randomQuote.citation) quoteInfo += '<span class="citation">' + randomQuote.citation + '</span>';
    if (randomQuote.year) quoteInfo += '<span class="year">' + randomQuote.year + '</span>';
    quoteInfo += '</p>';
    //
    document.getElementById('quote-box').innerHTML = quoteInfo;
    //changes background color
    document.body.style.backgroundColor = randomColor();
    console.log(randomQuote);
    //automatically changes quotes 
    intervalTime();
}

//what will display a quote on screen upon a persons arrival to the page
printQuote();

//what allows a new quote to appear after button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);