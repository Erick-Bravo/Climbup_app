'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert('Users', [

      console.log("firstName:", faker.name.firstName()),
      console.log("lastName:", faker.name.lastName()),
      console.log("email:", faker.internet.email()),
      console.log("avatarUrl:", faker.internet.avatar()),
      {
        // firstName: "Freddy",
        lastName: "Big-Walls",
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        // firstName: "erick",
        lastName: "bra",
        username: "FakeUser1",
        email: faker.internet.email(),
        photoUrl: faker.internet.avatar(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser2",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser3",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser4",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser5",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser6",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser7",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser8",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser9",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser10",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser11",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser12",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser13",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser14",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },
      // {
      //   firstName: faker.name.firstName(),
      //   lastName: faker.name.lastName(),
      //   username: "FakeUser15",
      //   email: faker.internet.email(),
      //   photoUrl: faker.internet.avatar(),
      //   hashedPassword: bcrypt.hashSync(faker.internet.password()),
      // },

    ], {returning: true});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {
      username: { [Sequelize.Op.in]: [
        'Demo-lition', 'FakeUser1',
        // 'FakeUser2', "FakeUser3", "FakeUser4",
        // "FakeUser5", "FakeUser6", "FakeUser7", "FakeUser8", "FakeUser9",
        // "FakeUser10", "FakeUser11", "FakeUser12", "FakeUser13", "FakeUser14",
        // "FakeUser15",

    ] }
    }, {});
  }
};
