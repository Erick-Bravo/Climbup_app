'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendee = sequelize.define('Attendee', {
    numOfFriends: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Attendee.associate = function(models) {
    // associations can be defined here
  };
  return Attendee;
};