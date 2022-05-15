import 'dotenv/config'

import Database from 'better-sqlite3'

const db = new Database('db.sqlite3', {})

export async function get({ params }) {
  const person = db.prepare('SELECT * FROM STAFF where id = ?').get(params.staffId)

  return {
    body: { person }
  }
}
