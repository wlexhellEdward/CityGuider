const admin = require("firebase-admin");
const { server_answer } = require('../../utils/consts.json');

exports.handler = async (event, context) => {
  try {
    const { uid } = event.queryStringParameters;
    const userData = JSON.parse(event.body);

    const { email } = userData;

    const response = await admin.auth().updateUser(uid, {
      email,
    });

    return {
      statusCode: server_answer.success,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: server_answer.error,
      body: "Произошла ошибка, не удалось обновить данные пользователя",
    };
  }
};
