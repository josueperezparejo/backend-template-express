"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Tasks", [
      {
        title: "Finish project documentation",
        description: "Write and format the README file",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fix login bug",
        description: "Resolve the 500 error on login when user not found",
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Update dependencies",
        description: "Run npm update and test all changes",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Tasks", {}, {});
  },
};
