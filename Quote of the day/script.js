const quoteText = document.querySelector('.quote'),
authorText = document.querySelector('.name'),
newQuoteBtn = document.querySelector('.features button'),
quotes = [
    {
        author: '4 hour work week',
        quote: 'Slow down. The music doesnt last forever'
    },
    {
        author: '4 hour work week',
        quote: 'Life is not a problem to be solved, nor a game to be won. Just a reality to be had'
    },
    {
        author: 'Molly Burke',
        quote: 'You wake up every morning to fight the same demons that left you so tired the night before; and that, my love, is bravery'
    },
    {
        author: 'Somebody',
        quote: 'Nobody is worth stressing over. People come and go. Move on and go find yourself'
    }

]

newQuoteBtn.addEventListener('click', ()=>{
    getNewQuote()
})

let getNewQuote = () => {
    quoteText.innerText = ''
    authorText.innerText = ''

    quoteFull = quotes[Math.floor(Math.random() * quotes.length)]
    newAuthor = quoteFull.author
    newQuote = quoteFull.quote

    quoteText.innerText = newQuote
    authorText.innerText = newAuthor

    console.log(quoteFull)
}