'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dressmakers', [
      {
        speciality: "Mujer S.XVIII",
        image_url: "https://i.pinimg.com/originals/cc/71/fc/cc71fc8d3f4ada40bc7d63fc48456847.jpg",
        user_id: 2,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        speciality: "Mujer S.XIX",
        image_url: "https://i.pinimg.com/originals/01/ca/a1/01caa10a0e4e0b364d703379cbe275df.jpg",
        user_id: 3,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        speciality: "Hombre Torrentí",
        image_url: "https://7televalencia.com/wp-content/uploads/2021/02/Traje-Torrenti.-Ofrena.jpg",
        user_id: 4,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        speciality: "Hombre Saraguey",
        image_url: "https://i.pinimg.com/736x/75/03/f8/7503f86c45baf596b8140e696a0fda3e--regional.jpg",
        user_id: 5,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
