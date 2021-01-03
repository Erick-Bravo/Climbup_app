'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 50],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error('Cannot be an email.');
            }
          }
        }
      },
      photoUrl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Group, {
      through: 'Member',
      foreignKey: 'userId',
      otherKey: 'groupId'
    });
    User.belongsToMany(models.Event, {
      through: 'Attendee',
      foreignKey: 'userId',
      otherKey: 'eventId'
    });

    User.hasMany(models.Group, {
      foreignKey: 'ownerId'
    });
    //How user is connected to Events
    User.hasMany(models.Attendee, {
      foreignKey: 'userId'
    });

    User.hasMany(models.Member, {
      foreignKey: 'userId'
    });

    User.hasMany(models.Calendar, {
      foreignKey: 'userId'
    });
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword
    });
    return await User.scope('currentUser').findByPk(user.id);
  };
  return User;
};
