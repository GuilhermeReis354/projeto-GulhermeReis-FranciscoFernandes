function Item({ jogo }) {
  return (
    <li className="item">
      <strong>{jogo.name}</strong>
      <span className="detalhes">
        {jogo.platform} · {jogo.hours} horas
      </span>
    </li>
  )
}

export default Item
