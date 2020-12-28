'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Member.associate = function(models) {
    // associations can be defined here
  };
  return Member;
};