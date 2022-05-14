import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

import Database from 'better-sqlite3'
const db = new Database(join(__dirname, '../', 'db.sqlite3'), {})

db.exec(`
CREATE TABLE "USERS" (
	"username"	TEXT,
	"email"	TEXT NOT NULL,
  "passwordHash"	TEXT NOT NULL,
	"name"	TEXT,
	"country"	TEXT,
	"city"	TEXT,
	PRIMARY KEY("username")
);
`)
