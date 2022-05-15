import 'dotenv/config'
import Database from 'better-sqlite3'

const db = new Database('db.sqlite3', {})

export async function get() {
  const teams = db.prepare('SELECT * FROM TEAMS').all()

  return {
    body: { teams }
  }
}

export async function post({ request }) {
  let errors = {}

  const games = db
    .prepare('SELECT * FROM GAMES')
    .all()
    .map((game) => game.name)

  const formData = await request.formData()

  const name = formData.get('name')
  const game = formData.get('game')
  const creationDate = formData.get('creationDate') ? new Date(formData.get('creationDate')) : null
  const notes = formData.get('notes')

  console.log(name, game, creationDate, notes)

  if (!name) errors.name = 'El nombre del equipo no puede estar vacío'
  if (!games.includes(game)) errors.game = 'El juego seleccionado no es valido'

  if (Object.entries(errors).length > 0) {
    return {
      status: 400,
      body: { errors }
    }
  }

  db.prepare(
    'INSERT INTO TEAMS (name, game, creationDate, notes) VALUES (@name, @game, @creationDate, @notes)'
  ).run({
    name,
    game,
    creationDate: +creationDate,
    notes
  })

  const teams = db.prepare('SELECT * FROM TEAMS').all()

  return {
    status: 200,
    body: {
      teams
    }
  }
}

export async function del({ request }) {
  const formData = await request.formData()

  const id = formData.get('id')
  console.log(id)

  db.prepare('DELETE FROM TEAMS WHERE id = ?').run(id)

  const teams = db.prepare('SELECT * FROM TEAMS').all()

  return {
    body: {
      teams
    }
  }
}
