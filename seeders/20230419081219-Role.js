'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Roles', [
        {
          id: 1,
          type: "User",
          createdAt: "2023-03-01 00:00:00",
          updatedAt: "2023-03-01 00:00:00"
        },
        {
          id: 2,
          type: "Admin",
          createdAt: "2023-03-01 00:00:00",
          updatedAt: "2023-03-01 00:00:00" 
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  }
};
