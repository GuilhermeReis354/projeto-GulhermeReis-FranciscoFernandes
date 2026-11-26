import { useEffect, useState } from 'react'
import Item from './Item.jsx'

const API_URL = 'http://localhost:3000/api/jogos'

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

      {loading && <p>A carregar...</p>}

      {erro && <p>{erro}</p>}

      {!loading && !erro && (
        <ul>
          {jogos.map((jogo) => (
            <Item key={jogo.id} jogo={jogo} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
