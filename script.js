const quotes = [["Be yourself; everyone else is already taken.", "― Oscar Wilde"],
               ["Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.", "― Albert Einstein"],
               ["Be the change that you wish to see in the world.",
"― Mahatma Gandhi"],
               ["If you tell the truth, you don't have to remember anything.",
"― Mark Twain"],
               ["To live is the rarest thing in the world. Most people exist, that is all.",
"― Oscar Wilde"],
               ["Always forgive your enemies; nothing annoys them so much.",
"― Oscar Wilde"],
               ["Live as if you were to die tomorrow. Learn as if you were to live forever.",
"― Mahatma Gandhi"],
               ["Without music, life would be a mistake.",
"― Friedrich Nietzsche"],
               ["I am so clever that sometimes I don't understand a single word of what I am saying.",
"― Oscar Wilde"],
               ["Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
"― Rob Siltanen"],
               ["Insanity is doing the same thing, over and over again, but expecting different results.",
"― Narcotics Anonymous"],
               ["It is better to be hated for what you are than to be loved for what you are not.",
"― Andre Gide"],
               ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
"― H. Jackson Brown Jr."],
               ["The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
"― Jane Austen"],
               ["There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
"― Albert Einstein"],
               ["We are all in the gutter, but some of us are looking at the stars.",
"― Oscar Wilde"],
               ["Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
"― Neil Gaiman"],
               ["The fool doth think he is wise, but the wise man knows himself to be a fool.",
"― William Shakespeare"],
               ["It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
"― Maurice Switzer"],
               ["The man who does not read has no advantage over the man who cannot read.",
"― Mark Twain"],
               ["Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
"― Lao Tzu"],
               ["If you can't explain it to a six year old, you don't understand it yourself.",
"― Albert Einstein"],
               ["Everything you can imagine is real.",
"― Pablo Picasso"],
               ["We don't see things as they are, we see them as we are.",
"― Anaïs Nin"],
               ["To the well-organized mind, death is but the next great adventure.",
"― J.K. Rowling"],
               ["If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
"― Albert Einstein"],
               ["Folks are usually about as happy as they make their minds up to be.",
"― Abraham Lincoln"],
               ["The story so far: In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
"― Douglas Adams"],
               ["The difference between genius and stupidity is: genius has its limits.",
"― Alexandre Dumas-fils"],
               ["Some infinities are bigger than other infinities.",
"― John Green"]];

const colors = ["#fc5c65", "#fd9644", "#fed330", "#26de81", "#2bcbba", "#eb3b5a", "#fa8231", "#f7b731", "#20bf6b", "#0fb9b1", "#45aaf2", "#4b7bec", "#a55eea", "#778ca3", "#2d98da", "#3867d6", "#8854d0"];


class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0][0],
      author: quotes[0][1]
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  returnQuote() {
    let key = Math.floor(Math.random() * (quotes.length));
    return quotes[key];
  }
  
  handleClick() {
    const randomQuote = this.returnQuote();
    const randColor = this.randomColor();
    this.setState({
      quote: randomQuote[0],
      color: randColor,
      author: randomQuote[1],
    });
  }
  
  randomColor() {
    const color = Math.floor(Math.random() * (colors.length));
    return colors[color];
  }
  render() {
    
    return (
     <body style={{
          backgroundColor: this.state.color,
        }}>
      <div class="wrapper" id="quote-box">
      <div id="text">
        {this.state.quote}
      </div>
      <div id="author">
        {this.state.author}
      </div>
      <div id="buttons">
        <div id="icon">
          <a id="tweet-quote" className="twitter-share-button" href={`https://twitter.com/intent/tweet?text=${this.state.quote}--${this.state.author}`} 
            target="_top"
            >
          <i class="fab fa-twitter" id="twitter" style={{
                backgroundColor: this.state.color,
                borderColor: this.state.color,
              }}></i>
          </a>
        </div>
        <div>
          <button id="new-quote" onClick={this.handleClick} style={{
                backgroundColor: this.state.color
              }}>New Quote</button>
        </div>
      </div>
    </div>
   </body>
    )
  }
}
  
ReactDOM.render(<RandomQuoteMachine /> , document.getElementById("root"))
  

/* HTML and java model in note
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("text").innerHTML = quotes[randomNumber][0];
  
document.getElementById("author").innerHTML = quotes[randomNumber][1];
}

function newBackground(){
  var randomNumber = Math.floor(Math.random() * (colors.length));
  document.body.style.backgroundColor = colors[randomNumber];
  document.getElementById("text").style.color = colors[randomNumber];
  document.getElementById("author").style.color = colors[randomNumber];
  document.getElementById("twitter").style.backgroundColor = colors[randomNumber];
  document.getElementById("new-quote").style.backgroundColor = colors[randomNumber];
  document.getElementById("twitter").style.borderColor = colors[randomNumber];
}
*/

          
