import { useEffect, useState } from 'react'
import Item from './Item.jsx'

const API_URL = 'http://localhost:3001/api/jogos'

function App() {
  const [jogos, setJogos] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Erro ' + resposta.status)
        }
        return resposta.json()
      })
      .then((dados) => setJogos(dados))
      .catch(() => setErro('Não foi possível carregar os jogos. O servidor está ligado?'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <h1>Os nossos videojogos</h1>

      {loading && <p className="aviso">A carregar...</p>}

      {erro && <p className="aviso erro">{erro}</p>}

      {!loading && !erro && (
        <ul className="lista">
          {jogos.map((jogo) => (
            <Item key={jogo.id} jogo={jogo} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
