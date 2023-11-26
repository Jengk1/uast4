// getting-started.js
const mongoose = require('mongoose'); //menggunakan module mongoose, berinteraksi dengan mongodb

const mongoDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/uaskk4c'); //koneksi ke database
    console.log('database tersambung') // pesan jika koneksi berhasil
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = mongoDB