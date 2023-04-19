'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [
      {
        age: 29,
        weight: 72,
        height: 1.83,
        gender: "hombre",
        adress: "ninguna",
        user_id: 6,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 24,
        weight: 52,
        height: 1.64,
        gender: "mujer",
        adress: "ninguna",
        user_id: 7,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 32,
        weight: 81,
        height: 1.80,
        gender: "hombre",
        adress: "ninguna",
        user_id: 8,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 35,
        weight: 68,
        height: 1.70,
        gender: "mujer",
        adress: "ninguna",
        user_id: 9,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 56,
        weight: 68,
        height: 1.63,
        gender: "mujer",
        adress: "ninguna",
        user_id: 10,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 61,
        weight: 90,
        height: 1.75,
        gender: "hombre",
        adress: "ninguna",
        user_id: 11,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 19,
        weight: 55,
        height: 1.63,
        gender: "mujer",
        adress: "ninguna",
        user_id: 12,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 27,
        weight: 78,
        height: 1.74,
        gender: "hombre",
        adress: "ninguna",
        user_id: 13,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 43,
        weight: 88,
        height: 1.70,
        gender: "hombre",
        adress: "ninguna",
        user_id: 14,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        age: 31,
        weight: 63,
        height: 1.73,
        gender: "mujer",
        adress: "ninguna",
        user_id: 15,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
