'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dressmakers', [
      {
        speciality: "Mujer S.XVIII",
        user_id: 2,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        speciality: "Mujer S.XIX",
        user_id: 3,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        speciality: "Hombre Torrentí",
        user_id: 4,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        speciality: "Hombre Saraguey",
        user_id: 5,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
