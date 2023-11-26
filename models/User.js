const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema ({ //memanggil module dan membuat schema
      nama_tempat: {
        type: String,
        required:[true, 'silahkan isikan nama Tempat PKL'],
        unique: true,
        allowNull: false,
      },
      alamat_tempat: {
        type: String,
        required:[true, 'silahkan isikan alamat tempat'],
        unique: true,
        allowNull: false,
      },
      nama_pegawai: {
        type: String,
        required:[true, 'silahkan isikan nama pegawai'],
        unique: true,
        allowNull: false,
      },
      jabatan_pegawai: {
        type: String,
        required:[true, 'silahkan isikan jabatan pegawai'],
        unique: true,
        allowNull: false,
      },
      nama_pemilik: {
        type: String,
        required:[true, 'silahkan isikan nama pemilik'],
        unique: true,
        allowNull: false,
      },
      nama_siswa_pkl: {
        type: String,
        required:[true, 'silahkan isikan nama siswa pkl'],
        unique: true,
        allowNull: true,
      },
    });   

module.exports = mongoose.model('User', UserSchema)