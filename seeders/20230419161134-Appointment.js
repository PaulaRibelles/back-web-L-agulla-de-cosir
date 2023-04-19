'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [
      {
        date: "2023-09-11 12:00:00",
        client_id: 10,
        dressmaker_id: 2,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        date: "2023-06-22 10:30:00",
        client_id: 6,
        dressmaker_id: 4,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        date: "2023-10-03 15:00:00",
        client_id: 4,
        dressmaker_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        date: "2023-05-03 11:30:00",
        client_id: 5,
        dressmaker_id: 2,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        date: "2023-05-11 17:00:00",
        client_id: 1,
        dressmaker_id: 3,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        date: "2023-11-15 13:30:00",
        client_id: 1,
        dressmaker_id: 3,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        date: "2023-05-11 17:00:00",
        client_id: 3,
        dressmaker_id: 4,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        date: "2023-05-11 17:00:00",
        client_id: 7,
        dressmaker_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {

  }
};
