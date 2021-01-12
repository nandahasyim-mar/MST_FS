const { KodePosIndonesia } = require('../models/index')

class KodePosController {

  static createKodePos(req, res, next) {
    let obj = {
      nomorKode: req.body.nomorKode,
      kelurahan: req.body.kelurahan,
      kecamatan: req.body.kecamatan,
      jenis: req.body.jenis,
      kabupaten: req.body.kabupaten,
      propinsi: req.body.propinsi
    }

    KodePosIndonesia.create(obj)
      .then(data => {
        res.status(201).json({
          id: data.id,
          nomorKode: data.nomorKode,
          kelurahan: data.kelurahan,
          kecamatan: data.kecamatan,
          jenis: data.jenis,
          kabupaten: data.kabupaten,
          propinsi: data.propinsi
        })
      })
      .catch(err => {
        next(err)
      })
  }

  static fetchKodePos(req, res, next) {
    KodePosIndonesia.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err)
      })
  }


}

module.exports = KodePosController