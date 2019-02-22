const fs = require('fs')
const mkdirp = require('mkdirp')

const createFolder = (folder) => new Promise((resolve, reject) => {
  if (!folder) {
    resolve()
    return
  }
  mkdirp(folder, (err) => {
    if (err) {
      return reject(err)
    }
    return resolve()
  })
})

const createFile = (filename, content) => new Promise((resolve, reject) => {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      return reject(err)
    }
    return resolve()
  })
})

const readFile = (filename) => new Promise((resolve, reject) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return reject(err)
    }
    return resolve(data)
  })
})

module.exports = {
  createFile, createFolder, readFile
}
