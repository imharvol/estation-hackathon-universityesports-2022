import 'dotenv/config'

import Database from 'better-sqlite3'

const db = new Database('db.sqlite3', {})

export async function get() {
  const staff = db.prepare('SELECT *  FROM STAFF').all()

  return {
    body: { staff }
  }
}
