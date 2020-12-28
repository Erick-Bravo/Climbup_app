'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    calendarId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  UserEvent.associate = function(models) {
    // associations can be defined here
  };
  return UserEvent;
};