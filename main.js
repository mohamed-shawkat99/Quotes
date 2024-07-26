var quotes =[
    {
        quote :" “Be yourself; everyone else is already taken.”",
        author : "― Oscar Wilde"

    },
    {
        quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author : "― Marilyn Monroe"

    }  ,  {
        quote : "“So many books, so little time.”",
        author : "― Frank Zappa"

    }  ,  {
        quote : "“A room without books is like a body without a soul.”",
        author : "― Marcus Tullius Cicero"

    }   , {
        quote : "“In three words I can sum up everything I've learned about life: it goes on.”",
        author : "― Robert Frost"

    }
    , {
        quote : "“A friend is someone who knows all about you and still loves you.”",
        author : "― Elbert Hubbard"

    }
    , {
        quote : "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author : "― Oscar Wilde"

    }
    , {
        quote : "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”",
        author : "― Steve Jobs"

    }
    , {
        quote : "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”",
        author : "― Marilyn Monroe"

    }
    , {
        quote : "“It is better to be hated for what you are than to be loved for what you are not.”",
        author : "― Andre Gide, Autumn Leaves"

    }

];



function genrateQuote()
{
    var mathIndex = Math.floor(Math.random() * quotes.length );
    document.getElementById("quote").innerHTML=quotes[mathIndex].quote;
    document.getElementById("author").innerHTML=quotes[mathIndex].author;
}
 