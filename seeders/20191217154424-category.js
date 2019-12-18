'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: "HOME",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "ONEZERO",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "ELEMENT",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "GEN",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "ZORA",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "FORGE",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "HUMAN",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "PARTS",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "MARKER",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "LEVEL",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "HEATED",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "MODUS",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        name: "MORE",
        is_active: true,
        createdAt: new Date,
        updatedAt: new Date,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
