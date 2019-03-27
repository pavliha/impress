import path from 'path'
import FileSystem from 'fs'

const isFileExists = (filePath) => {

  filePath = path.extname(filePath) ? filePath : `${filePath}.js`

  try {

    FileSystem.accessSync(filePath, FileSystem.constants.R_OK)

    return true

  } catch (error) {

    return false

  }
}

export default isFileExists
