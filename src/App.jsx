import {useState} from 'react';
import './App.css'
import  axios from 'axios'
function App() {

  const [quote, setQuote] = useState('All Great Achievements Require Time.');
  const [author, setAuthor] = useState('Maya Angelou');

const fetchData = async () => {
   try {
       const response = await axios.get('https://dummyjson.com/quotes/random')
       const Data = response.data 
       console.log(Data)
       setQuote(Data.quote);
       setAuthor(Data.author);
   } catch (error) {
    console.error("no data found")
   }
}

  return (
    <main>
       <div className='invi'>
       <article id='quote-box'>
          <h1 id='text'>❝ {quote} ❞</h1>
          <h2 id='author'>- {author}</h2>
          <div className='row'>
          <button id='new-quote' onClick={fetchData }>New Quote</button>
           <div>
           <a href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22A%20person%20who%20never%20made%20a%20mistake%20never%20tried%20anything%20new.%22%20%20Albert%20Einstein' target='_blank'>
           <button className='twitter'><i class="fa-brands fa-twitter"></i></button>
           </a>
           <a href='https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3D%2BAlbert%2BEinstein%26content%3DA%2Bperson%2Bwho%2Bnever%2Bmade%2Ba%2Bmistake%2Bnever%2Btried%2Banything%2Bnew.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button' target='_blank' >
          <button className='tumble'>  <i class="fa-brands fa-tumblr"></i></button>
          </a>
           </div>
          </div>
          
       <a href='https:://twitter.com/intent/tweet' id='tweet-quote'>By Marcelo</a>
         </article>
       </div>
    </main>
  )
}

export default App
