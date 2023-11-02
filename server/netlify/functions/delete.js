const admin = require("firebase-admin");
const { server_answer } = require('../../utils/consts.json');

exports.handler = async (event, context) => {
  try {
    const { uid } = event.queryStringParameters;

    await admin.auth().deleteUser(uid);

    return {
      statusCode: server_answer.success,
      body: "Пользователь успешно удален.",
    };
  } catch (error) {
    console.error("Ошибка удаления пользователя:", error);
    return {
      statusCode: server_answer.error,
      body: "Произошла ошибка при удалении пользователя.",
    };
  }
};
