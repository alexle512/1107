'use strict';
module.exports = (sequelize, DataTypes) => {
  const grocery = sequelize.define('grocery', {
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  grocery.associate = function(models) {
    // associations can be defined here
  };
  return grocery;
};