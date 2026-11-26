function Item({ jogo }) {
  return (
    <li>
      <strong>{jogo.name}</strong> — {jogo.platform} — {jogo.hours} horas
    </li>
  )
}

export default Item
