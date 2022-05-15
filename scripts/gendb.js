import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

import Database from 'better-sqlite3'
const db = new Database(join(__dirname, '../', 'db.sqlite3'), {})

db.exec(`
CREATE TABLE "GAMES" (
	"name"	TEXT,
	PRIMARY KEY("name")
);

CREATE TABLE "TEAMS" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"name"	TEXT NOT NULL,
	"game"	TEXT,
	"creationDate"	INTEGER,
	"notes"	TEXT,
	FOREIGN KEY("game") REFERENCES "GAMES"("name")
);

CREATE TABLE "STAFF" (
	"id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"role"	TEXT,
	"email"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"surname"	TEXT,
	"birthdate"	INTEGER,
	"team"	INTEGER,
	FOREIGN KEY("team") REFERENCES "TEAMS"("id")
);
`)

const games = ['League Of Legends', 'Teamfight Tactics', 'Clash Royale', 'Rocket League']

// TODO: Ejecutar todo en una misma transacción
for (const game of games) {
  db.prepare('INSERT INTO GAMES (name) VALUES (?)').run(game)
}
