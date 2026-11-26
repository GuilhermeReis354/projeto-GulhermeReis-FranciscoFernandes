# projeto-GulhermeReis-FranciscoFernandes

## API (contrato)

### Item

Cada jogo tem este formato:

```json
{ "id": 1, "name": "Celeste", "platform": "PC", "hours": 40 }
```

- `id`: número, criado pelo servidor
- `name`: nome do jogo
- `platform`: uma das plataformas da lista abaixo
- `hours`: número de horas jogadas

### Plataformas

Lista fixa, usada no select do formulário e no filtro:

- PC
- PlayStation
- Xbox
- Switch

### Rotas

| Método | Rota | Sucesso | Erro |
| --- | --- | --- | --- |
| GET | `/api/jogos` | `200` + array de jogos | — |
| POST | `/api/jogos` | `201` + jogo novo (com `id`) | `400` + `{ "error": "..." }` |
| DELETE | `/api/jogos/:id` | `204` sem corpo | `404` + `{ "error": "..." }` se o jogo não existir |

O POST devolve exatamente os mesmos campos que o GET.

### Ids

O id de um jogo novo é o maior id existente + 1. Se a lista estiver vazia, o id é 1.
