'use strict';
import { users } from "./20201030163017-demo-user"

const demoUser = users[0].id
const user1 = users[1].id //owner if group1
const user2 = users[2].id //owner if group2
const user3 = users[3].id //owner if group3
const user4 = users[4].id
const user5 = users[5].id
const user6 = users[6].id
const user7 = users[7].id
const user8 = users[8].id
const user9 = users[9].id
const user10 = users[10].id
const user11 = users[11].id
const user12 = users[12].id
const user13 = users[13].id
const user14 = users[14].id
const user15 = users[15].id

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


// GROUPS
    const groups = await queryInterface.bulkInsert('Groups', [
      { name: "Kind-Crushers Bouldering Gym", ownerId: user1 },
      { name: "National-Routes Park Volunteer Program", ownerId: user2 },
      { name: "Blue-Saphire Climbing Gear", ownerId: user3 },

    ], { returning: true });

    const group1 = groups[0].id
    const group2 = groups[1].id
    const group3 = groups[2].id




// EVENTS
    const events = await queryInterface.bulkInsert('Events', [
      {
        name: "Beer and Climbing Tournament",
        date: "2021-01-20T08:00:00.000Z",
        time: "12:00",
        groupId: group1
      },
      {
        name: "Litter Clean-up at the Park",
        date: "2021-01-25T08:00:00.000Z",
        time: "10:00",
        groupId: group2
      },
      {
        name: "Climbing Gear Showcase - Online",
        date: "2021-01-10T08:00:00.000Z",
        time: "12:00",
        groupId: group3
      },
      {
        name: "Kidos Climb Free Day!!!",
        date: "2021-01-13T08:00:00.000Z",
        time: "10:00",
        groupId: group1
      },
      {
        name: "Hike for Cancer Awareness",
        date: "2021-01-19T08:00:00.000Z",
        time: "08:00",
        groupId: group2
      },

    ], { returning: true });

    const event1 = events[0].id
    const event2 = events[1].id
    const event3 = events[2].id
    const event4 = events[3].id
    const event5 = events[4].id




//MEMBERS
    const members = await queryInterface.bulkInsert('Members', [
      { groupId: group1, userId: demoUser },
      { groupId: group1, userId: user4 },
      { groupId: group1, userId: user6 },
      { groupId: group1, userId: user8 },
      { groupId: group1, userId: user9 },
      { groupId: group1, userId: user10 },
      { groupId: group1, userId: user12 },

      { groupId: group2, userId: user3 },
      { groupId: group2, userId: user4 },
      { groupId: group2, userId: user5 },
      { groupId: group2, userId: demoUser },
      { groupId: group2, userId: user7 },
      { groupId: group2, userId: user8 },
      { groupId: group2, userId: user9 },
      { groupId: group2, userId: user10 },
      { groupId: group2, userId: user11 },
      { groupId: group2, userId: user12 },
      { groupId: group2, userId: user13 },

      { groupId: group3, userId: user1 },
      { groupId: group3, userId: user2 },
      { groupId: group3, userId: user4 },
      { groupId: group3, userId: user5 },
      { groupId: group3, userId: user14 },
      { groupId: group3, userId: user15 },

    ], { returning: true });


//ATTENDEES
    const attendees = await queryInterface.bulkInsert('Attendees', [
      { numOfFriends: 0, eventId: event1, userId: demoUser },
      { numOfFriends: 2, eventId: event1, userId: user5 },
      { numOfFriends: 1, eventId: event1, userId: user6 },
      { numOfFriends: 10, eventId: event1, userId: user7 },
      { numOfFriends: 0, eventId: event1, userId: user8 },
      { numOfFriends: 2, eventId: event1, userId: user9 },

      { numOfFriends: 0, eventId: event2, userId: user8 },
      { numOfFriends: 2, eventId: event2, userId: user9 },
      { numOfFriends: 0, eventId: event2, userId: user10 },
      { numOfFriends: 2, eventId: event2, userId: user11 },
      { numOfFriends: 4, eventId: event2, userId: user12 },
      { numOfFriends: 2, eventId: event2, userId: user4 },
      { numOfFriends: 5, eventId: event2, userId: user5 },

      { numOfFriends: 4, eventId: event3, userId: demoUser },
      { numOfFriends: 0, eventId: event3, userId: user5 },
      { numOfFriends: 0, eventId: event3, userId: user10 },
      { numOfFriends: 5, eventId: event3, userId: user12 },
      { numOfFriends: 1, eventId: event3, userId: user13 },
      { numOfFriends: 1, eventId: event3, userId: user15 },
      { numOfFriends: 2, eventId: event3, userId: user4 },

      { numOfFriends: 2, eventId: event4, userId: user4 },
      { numOfFriends: 0, eventId: event4, userId: user5 },
      { numOfFriends: 2, eventId: event4, userId: user6 },

      { numOfFriends: 2, eventId: event5, userId: user5 },
      { numOfFriends: 2, eventId: event5, userId: user7 },
      { numOfFriends: 2, eventId: event5, userId: user9 },


    ], { returning: true });


//CALENDARS
    const calendars = await queryInterface.bulkInsert('Calendars', [
      { userId: demoUser },
    ], { returning: true });

    const demoCalendar = calendars[0].id

// USEREVENTS
    const userEvents = await queryInterface.bulkInsert('UserEvents', [
      { calendarId: demoCalendar, eventId: event1 },
      { calendarId: demoCalendar, eventId: event3 },
    ], { returning: true });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('Groups', {
      name: {
        [Sequelize.Op.in]: [
          "Kind-Crushers Bouldering Gym", "National-Routes Park Volunteer Program", "Blue-Saphire Climbing Gear",
        ]
      }
    }, {});

    await queryInterface.bulkDelete('Events', {
      name: {
        [Sequelize.Op.in]: [
          "Beer and Climbing Tournament", "Litter Clean-up at the Park", "Climbing Gear Showcase - Online",
        ]
      }
    }, {});

    await queryInterface.bulkDelete('Members', {
      userId: {
        [Sequelize.Op.in]: [
          demoUser,
          user1,
          user2,
          user3,
          user4,
          user5,
          user6,
          user7,
          user8,
          user9,
          user10,
          user11,
          user12,
          user13,
          user14,
          user15,
        ]
      }
    }, {});

    await queryInterface.bulkDelete('Attendees', {
      userId: {
        [Sequelize.Op.in]: [
          demoUser,
          user1,
          user2,
          user3,
          user4,
          user5,
          user6,
          user7,
          user8,
          user9,
          user10,
          user11,
          user12,
          user13,
          user14,
          user15,
        ]
      }
    }, {});


    await queryInterface.bulkDelete('Calendars', {
      userId: {
        [Sequelize.Op.in]: [
          demoUser,
        ]
      }
    }, {});

    await queryInterface.bulkDelete('UserEvents', {
      userId: {
        [Sequelize.Op.in]: [
          demoUser,
        ]
      }
    }, {});


  }
};
