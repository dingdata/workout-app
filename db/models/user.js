"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user) => {
          const salt = await bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
        },
        beforeUpdate: async (user) => {
          const salt = await bcrypt.genSaltSync(10);
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
    }
  );
  return User;
};