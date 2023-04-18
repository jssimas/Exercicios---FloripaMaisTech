import './App.css'
import Card from './components/Card'

function App() {
  const usuario = {
    nome: "Jean Santos de Simas",
    idade: 43,
    foto: "https://avatars.githubusercontent.com/u/65747927?v=4",
    github: "https://github.com/jssimas",
    linkedin: "https://www.linkedin.com/in/jean-simas",
  }

  return (
      <div>
        <Card usuario = {usuario} />
      </div>
  )
}

export default App