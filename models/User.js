const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({ //memanggil module dan membuat schema
      nama_tempat_pkl: {
        type: String,
        required:[true, 'silahkan isikan nama Tempat'],
        unique: true,
        allowNull: false,
      },
      alamat_tempat_pkl: {
        type: String,
        required:[true, 'silahkan isikan alamat'],
        unique: true,
        allowNull: false,
      },
      nama_pekerja: {
        type: String,
        required:[true, 'silahkan isikan pegawai'],
        unique: true,
        allowNull: false,
      },
      jabatan: {
        type: String,
        required:[true, 'silahkan isikan jabatan'],
        unique: true,
        allowNull: false,
      },
      nama_siswa_pkl: {
        type: String,
        required:[true, 'isikan nama siswa pkl'],
        unique: true,
        allowNull: true,
      },
    });   

module.exports = mongoose.model('User', UserSchema);