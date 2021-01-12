'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KodePosIndonesia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  KodePosIndonesia.init({
    nomorKode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty:{
          message: "Code is required"
        }
      }
    },
    kelurahan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Kelurahan is required"
        }
      }
    },
    kecamatan: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Kecamatan is required"
        }
      }
    },
    jenis: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Jenis is required"
        }
      }
    },
    kabupaten: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Kabupaten is required"
        }
      }
    },
    propinsi: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Provinsi is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'KodePosIndonesia',
  });
  return KodePosIndonesia;
};