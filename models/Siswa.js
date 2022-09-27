const monggoose = require('mongoose')

const SiswaSChema = new monggoose.Schema({
    nama: { type: String, required: true },
    kelas: { type: String, required: true },
    jurusan: { type: String, required: true }
})

module.exports = monggoose.model('Siswa', SiswaSChema)