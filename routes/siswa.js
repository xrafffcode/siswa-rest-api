const express = require('express')
const router = express.Router()
const Siswa = require('../models/Siswa')


// Create
router.post('/', async (req, res) => {
    const siswaPost = new Siswa({
        nama: req.body.nama,
        kelas: req.body.kelas,
        jurusan: req.body.jurusan
    })

    try {
        const siswa = await siswaPost.save()
        res.json({
            message: 'Siswa created',
            siswa
        })
    } catch (err) {
        res.json({ message: err })
    }
})

// Read
router.get('/', async (req, res) => {
    try {
        const siswa = await Siswa.find()
        res.json(siswa)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

// Update
router.patch('/:siswaId', async (req, res) => {
    try {
        const siswaUpdate = await Siswa.updateOne(
            { _id: req.params.siswaId },
            {
                nama: req.body.nama,
                kelas: req.body.kelas,
                jurusan: req.body.jurusan
            }
        )

        res.json({
            message: 'Siswa updated',
            siswaUpdate
        })
    } catch (err) {
        res.json({
            message: err
        })
    }
})

// Delete
router.delete('/:siswaId', async (req, res) => {
    try {
        const siswaDelete = await Siswa.deleteOne({
            _id: req.params.siswaId
        })
        res.json({
            message: 'Siswa deleted',
            siswaDelete
        })
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router