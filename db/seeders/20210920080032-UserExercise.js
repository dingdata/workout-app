"use strict";

const userExercises = [
  {
    UserId: 1,
    ExerciseId: 1,
    createdAt: new Date("08/01/2021"),
    updatedAt: new Date("08/01/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 2,
    createdAt: new Date("08/02/2021"),
    updatedAt: new Date("08/02/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 4,
    createdAt: new Date("08/04/2021"),
    updatedAt: new Date("08/04/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 6,
    createdAt: new Date("08/06/2021"),
    updatedAt: new Date("08/06/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 7,
    createdAt: new Date("08/07/2021"),
    updatedAt: new Date("08/07/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 8,
    createdAt: new Date("08/08/2021"),
    updatedAt: new Date("08/08/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 9,
    createdAt: new Date("08/09/2021"),
    updatedAt: new Date("08/09/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 10,
    createdAt: new Date("08/10/2021"),
    updatedAt: new Date("08/10/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 12,
    createdAt: new Date("08/12/2021"),
    updatedAt: new Date("08/12/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 13,
    createdAt: new Date("08/13/2021"),
    updatedAt: new Date("08/13/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 14,
    createdAt: new Date("08/14/2021"),
    updatedAt: new Date("08/14/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 15,
    createdAt: new Date("08/15/2021"),
    updatedAt: new Date("08/15/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 17,
    createdAt: new Date("08/17/2021"),
    updatedAt: new Date("08/17/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 18,
    createdAt: new Date("08/18/2021"),
    updatedAt: new Date("08/18/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 19,
    createdAt: new Date("08/19/2021"),
    updatedAt: new Date("08/19/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 21,
    createdAt: new Date("08/21/2021"),
    updatedAt: new Date("08/21/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 23,
    createdAt: new Date("08/23/2021"),
    updatedAt: new Date("08/23/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 27,
    createdAt: new Date("08/27/2021"),
    updatedAt: new Date("08/27/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 28,
    createdAt: new Date("08/28/2021"),
    updatedAt: new Date("08/28/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 31,
    createdAt: new Date("08/31/2021"),
    updatedAt: new Date("08/31/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 32,
    createdAt: new Date("09/01/2021"),
    updatedAt: new Date("09/01/2021"),
  },
  {
    UserId: 1,
    ExerciseId: 33,
    createdAt: new Date("09/02/2021"),
    updatedAt: new Date("09/02/2021"),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("UserExercises", userExercises);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
