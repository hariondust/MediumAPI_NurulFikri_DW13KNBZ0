'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
      fullname:"Jieun",
      username:"Jieun",
      email:"usersatu@gmail.com",
      password:"username",
      is_active:"1",
      createdAt:new Date,
      updatedAt:new Date,
      },
      {
      fullname:"Jieun",
      username:"Jieun",
      email:"userdua@gmail.com",
      password:"username",
      is_active:"1",
      createdAt:new Date,
      updatedAt:new Date,
      },
      {
      fullname:"Jieun",
      username:"Jieun",
      email:"usertiga@gmail.com",
      password:"username",
      is_active:"1",
      createdAt:new Date,
      updatedAt:new Date,
      },
      {
      fullname:"Jieun",
      username:"Jieun",
      email:"userempat@gmail.com",
      password:"username",
      is_active:"1",
      createdAt:new Date,
      updatedAt:new Date,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
