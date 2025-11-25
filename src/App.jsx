import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>


      <header>
        <a href=""><div>Logo</div></a>
        <nav>
          <ul>
            <li><a href="">Characters</a></li>
            <li><a href="">Comics</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">TV</a></li>
            <li><a href="">Games</a></li>
            <li><a href="">Collectibles</a></li>
            <li><a href="">Videos</a></li>
            <li><a href="">Fans</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Shop</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div>---Content goes here---</div>
        <section>
          <div>card1</div>
          <div>card2</div>
          <div>card3</div>
          <div>card4</div>
          <div>card5</div>
        </section>
      </main>
      <footer>
       <section>
        <div>shop</div>
          <div>shop</div>
            <div>shop</div>
              <div>shop</div>
       </section>
       <section>
        <button>sign-up now!</button>
       </section>
      </footer>
    </div>

  )
}

export default App
