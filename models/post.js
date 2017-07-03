'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return post;
};