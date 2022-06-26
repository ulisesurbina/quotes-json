import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import QuoteBox from './components/QuoteBox'
import quotes from "./quotes.json"

const colors = ["#CD5C5C", "#228B22", "#6495ED", "#4B0082", "#B8860B", "aqua", "#DC143C", "#FF7F50", "#C71585"]

function App() {
  const random = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState(random)
  const changeQuotes = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIndex(random)
  }
  const randomColorIndex = Math.floor(Math.random() * colors.length)
  const color = colors[randomColorIndex]

  document.body.style = `background: ${color}`;
  return (
    <div>
      <div className="App">
        <QuoteBox index={quotes[index].quote} color={color}/>
        <Button color={color} index={quotes[index].author} changeQuotes={changeQuotes} />
      </div>
    </div>
  )
}

export default App
