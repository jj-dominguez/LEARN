'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cat = sequelize.define('Cat', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    hobby: DataTypes.TEXT,
    dislikes: DataTypes.TEXT,
    quote: DataTypes.TEXT,
    lookingFor: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cat;
};