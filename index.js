const getPort = require('get-port')
const path = require('path')
const template = require('./template')
const { createFile, createFolder, readFile } = require('./utils')

let htaccessPath = path.resolve(process.cwd(), '.htaccess')
let envPath = path.resolve(process.cwd(), '.env')

const createServer = async (PORT) => {
  const currentPort = process.env.PORT
  const port = await getPort({ port: [currentPort] })
  PORT(port)
  if (currentPort === port) return
  const contents = template.content({ port: port })
  const filename = path.join(htaccessPath)
  const baseDir = filename.split(path.basename(filename))[0]
  createFolder(baseDir).then(() => {
    createFile(filename, contents)
  })
  const content = await readFile(envPath)
  createFile(envPath, content.replace(/PORT=(\d+)/g, `PORT=${port}`))
}

module.exports = createServer
