const quoteText = document.querySelector('.quote'),
authorText = document.querySelector('.name'),
newQuoteBtn = document.querySelector('.features button'),
copyTxt = document.querySelector('.copy')
quotes = [
    {
        id: 1,
        author: '4 hour work week',
        quote: 'Slow down. The music doesnt last forever'
    },
    {
        id: 2,
        author: '4 hour work week',
        quote: 'Life is not a problem to be solved, nor a game to be won. Just a reality to be had'
    },
    {
        id: 3,
        author: 'Molly Burke',
        quote: 'You wake up every morning to fight the same demons that left you so tired the night before; and that, my love, is bravery'
    },
    {
        id: 4,
        author: 'Somebody',
        quote: 'Nobody is worth stressing over. People come and go. Move on and go find yourself'
    }

]


newQuoteBtn.addEventListener('click', ()=>{
    getNewQuote()
})
copyTxt.addEventListener('click', () => {
    quoteText.value
    navigator.clipboard.writeText(quoteText.textContent)
} )

let usedQuotes = []
let getNewQuote = () => {
    // if (usedQuotes.length === quotes.length){
    //     usedQuotes = []
    // }else{

    // }

    quoteText.innerText = ''
    authorText.innerText = ''
   
    quoteFull = quotes[Math.floor(Math.random() * quotes.length)]
    newAuthor = quoteFull.author
    newQuote = quoteFull.quote

    // If quote has been used 
    if(usedQuotes.includes(quoteFull.id)){
        console.log('this quote has been used')
        // Choose new random quote
        quoteFull = quotes[Math.floor(Math.random() * quotes.length)]
        newAuthor = quoteFull.author
        newQuote = quoteFull.quote

        quoteText.innerText = newQuote
        authorText.innerText = newAuthor

    }else{
        usedQuotes.push(quoteFull.id)
        quoteText.innerText = newQuote
        authorText.innerText = newAuthor
    }

    console.log(usedQuotes)
    console.log(quoteFull)
}