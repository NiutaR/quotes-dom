//document.getElementById('container').style.position = 'absolute';


const divEl = document.getElementById('container');
divEl.style.textAlign = 'center';


// List author and quotes as an array of obj

let list = [
    {
        'author' : 'Oscar Wilde',
        'quote' : '“Be yourself; everyone else is already taken.”'
    },
    {
        'author' : 'Albert Einstein',
        'quote' : '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”'
    },
    {
        'author' : 'Frank Zappa',
        'quote' : '“So many books, so little time.”'
    },
    {
        'author' : 'Marcus Tullius Cicero',
        'quote' : '“A room without books is like a body without a soul.”'
    },
    {
        'author' : 'Mae West',
        'quote' : '“You only live once, but if you do it right, once is enough.”'
    },
    {
        'author' : 'Mahatma Gandhi',
        'quote' : '“Be the change that you wish to see in the world.”'
    }
];

let button = document.getElementById('btnId');



/*button.addEventListener('click', function(e) {
    /*let content = e.target.innerHTML;
    currentAuthor = list.findIndex(el => el.author === content);
    let currentQuote = list[currentAuthor].author;
    for (let i = 0; list[i].author == currentQuote; i--) {
        return list[i].author;
    }
    //console.log(list[1]);
    for(i = 0; i < list.length; i++) {
        //console.log(list);
        //return list.forEach(element => console.log(element));
        //let showQuotes = 
        //return list.forEach(element => console.log(element));
        return list.forEach(element);
    }

});*/

function randomQuote() {
    let random = list[Math.floor(Math.random() * list.length)];
    quotation.innerText = `“${random.quote}.”`;
    author.innerText = random.author;
}
document.querySelector("button").addEventListener('click', randomQuote);

document