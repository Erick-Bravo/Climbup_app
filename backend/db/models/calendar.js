'use strict';
module.exports = (sequelize, DataTypes) => {
  const Calendar = sequelize.define('Calendar', {
    date: DataTypes.DATE,
    time: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Calendar.associate = function(models) {
    // associations can be defined here
  };
  return Calendar;
};