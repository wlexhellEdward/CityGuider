const dotenv = require('dotenv');

dotenv.config();

function initializeFirebase(admin) {
    const config = {
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    };
    admin.initializeApp(config);
}

module.exports = {
    initializeFirebase,
};
