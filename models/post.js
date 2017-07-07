"use strict";
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define(
    "post",
    {
      body: DataTypes.TEXT
    },
    {}
  );

  // post.associate = function(models) {
  //   post.belongsTo(models.user, { as: "author", foreignKey: "authorid" });
  //   post.hasMany(models.comment, { as: "likes", foreignKey: "likerid" });
  // };
  return post;
};
