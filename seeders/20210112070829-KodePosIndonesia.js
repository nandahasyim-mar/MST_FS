'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('KodePosIndonesia', [{
      nomorKode: 23611,
      kelurahan: "Gampa",
      kecamatan: "Johan Pahlawan",
      jenis: "Kab.",
      kabupaten: "Aceh Barat",
      propinsi: "Nanggroe Aceh Darussalam (NAD)",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("KodePostIndonesia", null, {})
  }
};
