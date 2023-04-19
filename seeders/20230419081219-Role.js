'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Roles', [
        {
          id: 1,
          type: "Admin",
          createdAt: "2023-04-19 00:00:00",
          updatedAt: "2023-04-19 00:00:00"
        },
        {
          id: 2,
          type: "User",
          createdAt: "2023-04-19 00:00:00",
          updatedAt: "2023-04-19 00:00:00" 
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  }
};
