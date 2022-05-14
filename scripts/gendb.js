import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

import Database from 'better-sqlite3'
const db = new Database(join(__dirname, '../', 'db.sqlite3'), {})

db.exec(`
CREATE TABLE "STAFF" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"role"	TEXT,
	"email"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"surname"	TEXT,
	"birthdate"	INTEGER
);
`)
