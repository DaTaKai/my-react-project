// 06.11 тапсырмасы: Card компоненті
import reactLogo from '../assets/react.svg'

function Card({ author, text }) {
  return (
    <div className="card">
      <img className="card-img" src={reactLogo} alt="card" />
      <h2>{author}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Card
