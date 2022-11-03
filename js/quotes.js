const quotes = [
    {
        quote:"A discovery is said to be an accident meeting a prepared mind.",
        author:"Albert Szent-Gyorgyi",
    },
    {
        quote:"To follow, without halt, one aim: There's the secret of success.",
        author:"Anna Pavlova",
    },
    {
        quote:"The world is full of suffering but it is also full of people overcoming it.",
        author:"Helen Keller",
    },
    {
        quote:"A single day is enough to make us a little larger.",
        author:"Paul Klee",
    },
    {
        quote:"The future is much like the present, only longer.",
        author:"Dan Quisenberry",
    },
    {
        quote:"Time is the most valuable thing a man can spend.",
        author:"Theophrastus",
    },
    {
        quote:"Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author:"Thomas A. Edison",
    },
    {
        quote:"Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author:"Mark Twain",
    },
    {
        quote:"Put yourself on view. This brings your talents to light.",
        author:"Baltasar Gracian",
    },
    {
        quote:"If you would be loved, love and be lovable.",
        author:"Benjamin Franklin",
    },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
