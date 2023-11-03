const { server_answer } = require('../../utils/consts.json');
const { admins } = require('../../utils/consts.json');

exports.handler = async (event, context) => {
  try {
    const { uid } = event.queryStringParameters;

    if (admins[uid] && admins[uid].level === 'admin') {
      return {
        statusCode: server_answer.success,
        body: '30',
      };
    }

    if (admins[uid] && admins[uid].level === 'moderator') {
      return {
        statusCode: server_answer.success,
        body: '15',
      };
    }

    return {
      statusCode: server_answer.success,
      body: '0',
    };
  } catch (error) {
    return {
      statusCode: server_answer.error,
      body: "Something went wrong",
    };
  }
};
