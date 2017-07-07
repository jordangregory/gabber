"use strict";
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define(
    "like",
    {
      likerid: DataTypes.INTEGER
    },
    {}
  );
  return like;
};
