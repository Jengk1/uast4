const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({ //memanggil module dan membuat schema
      nama_mapel: {
        type: String,
        required:[true, 'silahkan isikan mapel'],
        unique: true,
        allowNull: false,
      },
      });   

module.exports = mongoose.model('User', UserSchema);