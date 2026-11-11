import Card from './components/Card'
import './App.css'

// 30.10 тапсырмасы: дәйексөздер (цитаталар)
const quotes = [
  { author: 'Albert Einstein', text: 'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.' },
  { author: 'Maya Angelou', text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
  { author: 'J.K. Rowling', text: 'It is our choices, Harry, that show what we truly are, far more than our abilities.' },
  { author: 'Theodore Roosevelt', text: "Believe you can and you're halfway there." },
  { author: 'Ralph Waldo Emerson', text: 'Our greatest glory is not in never failing, but in rising up every time we fail.' },
]

function App() {
  return (
    <>
      <h1>Менің React жобам</h1>
      {/* 29.10 тапсырмасы: inline style */}
      <p style={{ color: 'red' }}>Бұл мәтін қызыл түспен жазылған</p>
      <p></p>

      <div className="cards">
        {quotes.map((q) => (
          <Card key={q.author} author={q.author} text={q.text} />
        ))}
      </div>
    </>
  )
}

export default App
