'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    ownerId: DataTypes.INTEGER
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    Group.belongsToMany(models.User, {
      through: 'Member',
      foreignKey: 'groupId',
      otherKey: 'userId'
    })

    Group.hasMany(models.Event, {
      foreignKey: "groupId"
    })
  };
  return Group;
};
