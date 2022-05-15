import 'dotenv/config'
import Database from 'better-sqlite3'

const db = new Database('db.sqlite3', {})

export async function get() {
  const games = db.prepare('SELECT *  FROM GAMES').all()

  return {
    body: { games }
  }
}
