'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        dni: "22115521A",
        name: "Vicent",
        surname: "Pedreguer",
        city: "Valencia",
        phone: "666123456",
        email: "vicent@gmail.com",
        password: bcrypt.hashSync("000000", 10),
        role_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
