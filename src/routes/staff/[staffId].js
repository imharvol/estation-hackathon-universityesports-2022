import 'dotenv/config'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'path'
import Database from 'better-sqlite3'

const __dirname = dirname(fileURLToPath(import.meta.url))
const db = new Database(join(__dirname, '../../../db.sqlite3'), {})

export async function get({ params }) {
  const person = db.prepare('SELECT * FROM STAFF where id = ?').get(params.staffId)

  return {
    body: { person }
  }
}
