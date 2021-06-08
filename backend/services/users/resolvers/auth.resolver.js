//services
const userService = require("../services/user.service");
const authService = require("../services/auth.service");
const tokenService = require("../services/token.service");

module.exports = {
  Query: {
    loginUser: async (_, { email, password }) => {
      let user = await authService.loginUserWithEmailAndPassword(
        email,
        password
      );
      const tokens = await tokenService.generateAuthTokens(user);

      return {
        success: user ? true : false,
        token: tokens,
        user: user,
      };
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      let user = await userService.createUser({
        name,
        email,
        password,
      });
      const tokens = await tokenService.generateAuthTokens(user);

      user = await userService.getUserById(user._id);

      return {
        success: user ? true : false,
        token: tokens,
        user: user,
      };
    },
  },
};
