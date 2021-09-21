"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exercise.belongsToMany(models.User, {
        through: {
          model: models.UserExercise,
        },
      });

      // Exercise.hasMany(models.UserExercise, {
      //   foreignKey: { name: "exerciseId" },
      // });
    }
  }

  // Duration	Intensity	Exercise Type	Source	Tag	Calories	Title

  Exercise.init(
    {
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      intensity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      exerciseType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      needEquipment: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Exercise",
    }
  );
  return Exercise;
};
