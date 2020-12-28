'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      calendarId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Calendars"
        }
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Events"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserEvents');
  }
};
