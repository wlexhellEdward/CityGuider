const dotenv = require('dotenv');
const keys = require('./keys/firebaseKey.json');

dotenv.config();

function initializeFirebase(admin) {
    const config = {
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID || keys.project_id,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL || keys.client_email,
            privateKey: (process.env.FIREBASE_PRIVATE_KEY || keys.private_key).replace(/\\n/g, '\n'),
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
    };
    admin.initializeApp(config);
}

module.exports = {
    initializeFirebase,
};
