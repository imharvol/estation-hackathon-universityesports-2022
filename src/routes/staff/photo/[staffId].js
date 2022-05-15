import 'dotenv/config'

import { join } from 'path'
import { readFile } from 'fs/promises'

const staffPhotosPath = 'private/staff-photos/'
const defaultStaffPhotoFileName = 'default.jpg'

export async function get({ params }) {
  let photoRaw
  try {
    // Try to read the users photo
    photoRaw = await readFile(join(staffPhotosPath, params.staffId + '.png'), {
      encoding: null
    })
  } catch (err) {
    // Maybe the user doesn't have a photo, return a default photo
    photoRaw = await readFile(join(staffPhotosPath, defaultStaffPhotoFileName), {
      encoding: null
    })
  }
  return {
    body: photoRaw
  }
}
