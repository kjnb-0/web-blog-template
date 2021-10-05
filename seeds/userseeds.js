const { User } = require("../models");

const userData = [
  {
    username: "firstuser",
    email: "firstuser@gmail.com",
    password: "firstpw",
  },
  {
    username: "seconduser",
    email: "seconduser@gmail.com",
    password: "secondpw",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
