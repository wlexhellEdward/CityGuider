const admin = require("firebase-admin");
const { server_answer } = require('../../utils/consts.json');

exports.handler = async (event, context) => {
  try {
    const response = await admin.auth().listUsers();

    return {
      statusCode: server_answer.success,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: server_answer.error,
      body: "Произошла ошибка при загрузке данных пользователя",
    };
  }
};
