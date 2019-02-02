'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {});
  
  Burger.associate = (models) => {
    Burger.belongsTo(models.Eater, {
      foreignKey: {
          allowNull: true
      }
    });
  };
  return Burger;
};