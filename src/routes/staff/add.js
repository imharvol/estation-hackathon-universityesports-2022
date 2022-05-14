import 'dotenv/config'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { join } from 'path'
import { writeFile } from 'fs/promises'
import Database from 'better-sqlite3'

const __dirname = dirname(fileURLToPath(import.meta.url))
const db = new Database(join(__dirname, '../../../db.sqlite3'), {})

const validRoles = ['player', 'trainer', 'nutritionist']

const staffPhotosPath = join(__dirname, '../../../private/staff-photos/')

export async function post({ request }) {
  let errors = {}

  const formData = await request.formData()

  const role = formData.get('role')
  const name = formData.get('name')
  const surname = formData.get('surname')
  const email = formData.get('email')
  const birthdate = formData.has('birthdate') ? new Date(formData.get('birthdate')) : null
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

  return {
    status: 303,
    headers: {
      location: ''
    }
  }
}
