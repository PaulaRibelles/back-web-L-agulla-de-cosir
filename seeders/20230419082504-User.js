'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: "Paula",
        surname: "Ribelles",
        dni: "00000000A",
        city: "Ontinyent",
        phone: "600000000",
        email: "paula@paula.com",
        password: bcrypt.hashSync("000000", 10),
        role_id: 2,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        name: "Julia",
        surname: "Bordados",
        dni: "00000001B",
        city: "Valencia",
        phone: "600000001",
        email: "julia@julia.com",
        password: bcrypt.hashSync("111111", 10),
        role_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        name: "Carles",
        surname: "Bordados",
        dni: "00000002B",
        city: "Valencia",
        phone: "600000002",
        email: "carles@carles.com",
        password: bcrypt.hashSync("111111", 10),
        role_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        name: "Álvaro",
        surname: "Molina",
        dni: "00000003B",
        city: "Valencia",
        phone: "600000003",
        email: "alvaro@alvaro.com",
        password: bcrypt.hashSync("111111", 10),
        role_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        name: "Ana",
        surname: "Sombra",
        dni: "00000004B",
        city: "Valencia",
        phone: "600000004",
        email: "ana@ana.com",
        password: bcrypt.hashSync("111111", 10),
        role_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
        name: "Alberto",
        surname: "López",
        dni: "11111111B",
        city: "Valencia",
        phone: "611111111",
        email: "alberto@alberto.com",
        password: bcrypt.hashSync("123456", 10),
        role_id: 1,
        createdAt: "2023-03-03 12:00:00",
        updatedAt: "2023-03-03 12:00:00"
      },
      {
      name: "Natalia",
      surname: "Navarrete",
      dni: "22222222C",
      city: "Valencia",
      phone: "622222222",
      email: "natalia@natalia.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "Marco",
      surname: "Mendoza",
      dni: "33333333D",
      city: "Castellón",
      phone: "633333333",
      email: "marco@marco.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "Jessica",
      surname: "Ricam",
      dni: "44444444E",
      city: "Badalona",
      phone: "644444444",
      email: "jessica@jessica.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "Dolores",
      surname: "Damacho",
      dni: "55555555F",
      city: "Ontinyent",
      phone: "655555555",
      email: "dolores@dolores.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "Rafael",
      surname: "Ribes",
      dni: "66666666G",
      city: "Torrent",
      phone: "666666666",
      email: "rafael@rafael.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "María",
      surname: "Martí",
      dni: "77777777H",
      city: "Valencia",
      phone: "677777777",
      email: "maria@maria.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "Víctor",
      surname: "Víveres",
      dni: "88888888I",
      city: "Catarroja",
      phone: "688888888",
      email: "victor@victor.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "Eduardo",
      surname: "Santos",
      dni: "99999999J",
      city: "Silla",
      phone: "699999999",
      email: "eduardo@eduardo.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    {
      name: "Estela",
      surname: "Esparto",
      dni: "10101010K",
      city: "Xàtiva",
      phone: "610101010",
      email: "estela@estela.com",
      password: bcrypt.hashSync("123456", 10),
      role_id: 1,
      createdAt: "2023-03-03 12:00:00",
      updatedAt: "2023-03-03 12:00:00"
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
