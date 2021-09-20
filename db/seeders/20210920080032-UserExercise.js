"use strict";

const userExercises = [
  {
    UserId: 1,
    ExerciseId: 1,
    createdAt: "08/01/2021",
    updatedAt: "08/01/2021",
  },
  {
    UserId: 1,
    ExerciseId: 2,
    createdAt: "08/02/2021",
    updatedAt: "08/02/2021",
  },
  {
    UserId: 1,
    ExerciseId: 4,
    createdAt: "08/04/2021",
    updatedAt: "08/04/2021",
  },
  {
    UserId: 1,
    ExerciseId: 6,
    createdAt: "08/06/2021",
    updatedAt: "08/06/2021",
  },
  {
    UserId: 1,
    ExerciseId: 7,
    createdAt: "08/07/2021",
    updatedAt: "08/07/2021",
  },
  {
    UserId: 1,
    ExerciseId: 8,
    createdAt: "08/08/2021",
    updatedAt: "08/08/2021",
  },
  {
    UserId: 1,
    ExerciseId: 9,
    createdAt: "08/09/2021",
    updatedAt: "08/09/2021",
  },
  {
    UserId: 1,
    ExerciseId: 10,
    createdAt: "08/10/2021",
    updatedAt: "08/10/2021",
  },
  {
    UserId: 1,
    ExerciseId: 12,
    createdAt: "08/12/2021",
    updatedAt: "08/12/2021",
  },
  {
    UserId: 1,
    ExerciseId: 13,
    createdAt: "08/13/2021",
    updatedAt: "08/13/2021",
  },
  {
    UserId: 1,
    ExerciseId: 14,
    createdAt: "08/14/2021",
    updatedAt: "08/14/2021",
  },
  {
    UserId: 1,
    ExerciseId: 15,
    createdAt: "08/15/2021",
    updatedAt: "08/15/2021",
  },
  {
    UserId: 1,
    ExerciseId: 17,
    createdAt: "08/17/2021",
    updatedAt: "08/17/2021",
  },
  {
    UserId: 1,
    ExerciseId: 18,
    createdAt: "08/18/2021",
    updatedAt: "08/18/2021",
  },
  {
    UserId: 1,
    ExerciseId: 19,
    createdAt: "08/19/2021",
    updatedAt: "08/19/2021",
  },
  {
    UserId: 1,
    ExerciseId: 21,
    createdAt: "08/21/2021",
    updatedAt: "08/21/2021",
  },
  {
    UserId: 1,
    ExerciseId: 23,
    createdAt: "08/23/2021",
    updatedAt: "08/23/2021",
  },
  {
    UserId: 1,
    ExerciseId: 27,
    createdAt: "08/27/2021",
    updatedAt: "08/27/2021",
  },
  {
    UserId: 1,
    ExerciseId: 28,
    createdAt: "08/28/2021",
    updatedAt: "08/28/2021",
  },
  {
    UserId: 1,
    ExerciseId: 31,
    createdAt: "08/31/2021",
    updatedAt: "08/31/2021",
  },
  {
    UserId: 1,
    ExerciseId: 32,
    createdAt: "09/01/2021",
    updatedAt: "09/01/2021",
  },
  {
    UserId: 1,
    ExerciseId: 33,
    createdAt: "09/02/2021",
    updatedAt: "09/02/2021",
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
