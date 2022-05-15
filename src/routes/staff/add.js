import 'dotenv/config'

import { join } from 'path'
import { writeFile } from 'fs/promises'
import Database from 'better-sqlite3'

const db = new Database('db.sqlite3', {})

const validRoles = ['player', 'trainer', 'nutritionist']

const staffPhotosPath = 'private/staff-photos/'

export async function post({ request }) {
  let errors = {}

  const formData = await request.formData()

  const role = formData.get('role')
  const name = formData.get('name')
  const surname = formData.get('surname')
  const email = formData.get('email')
  const birthdate = formData.get('birthdate') ? new Date(formData.get('birthdate')) : null
  const photoFile = formData.get('photo')

  if (!role) errors.role = 'El rol de la persona no puede estar vacío'
  if (!name) errors.surname = 'El nombre de la persona no puede estar vacío'
  if (!email) errors.email = 'El email de la persona no puede estar vacío'
  if (!validRoles.includes(role)) errors.role = 'El rol de la persona no es valido'

  if (Object.entries(errors).length > 0) {
    return {
      status: 400,
      body: { errors }
    }
  }

  // Insertar en la base de datos y obtener el id asignado al staff
  const { lastInsertRowid: id } = db
    .prepare(
      'INSERT INTO STAFF (role, email, name, surname, birthdate) VALUES (@role, @email, @name, @surname, @birthdate)'
    )
    .run({
      role,
      email,
      name,
      surname,
      birthdate: +birthdate
    })

  if (photoFile) {
    await writeFile(join(staffPhotosPath, id + '.png'), photoFile.stream(), { encoding: null })
  }

  const person = db.prepare('SELECT * FROM STAFF WHERE id = ?').get(id)

  return {
    status: 200,
    body: { person }
  }
}
