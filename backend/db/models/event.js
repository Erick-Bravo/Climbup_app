'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    address: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    groupId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsToMany(models.User, {
      through: "Attendee",
      foreignKey: 'eventId',
      otherKey: 'userId'
    })
    Event.belongsToMany(models.Calendar, {
      through: "UserEvent",
      foreignKey: 'eventId',
      otherKey: 'calendarId'
    })

    Event.belongsTo(models.Group, {
      foreignKey: "groupId"
    })
  };
  return Event;
};
