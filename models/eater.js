'use strict';
module.exports = (sequelize, DataTypes) => {
  const Eater = sequelize.define('Eater', {
    eater_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  Eater.associate = function(models) {
    // associations can be defined here
  };
  return Eater;
};