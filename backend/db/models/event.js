'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    address: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    groupId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};