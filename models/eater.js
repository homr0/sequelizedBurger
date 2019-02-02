'use strict';
module.exports = (sequelize, DataTypes) => {
  const Eater = sequelize.define('Eater', {
    eater_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});

  Eater.associate = (models) => {
    Eater.hasMany(models.Burger, {
      onDelete: "CASCADE"
    });
  };
  return Eater;
};