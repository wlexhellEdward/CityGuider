const keys = require('./keys/firebaseKey.json')

function initializeFirebase(admin) {
    const config = {
        credential: admin.credential.cert({
            projectId: keys.project_id,
            clientEmail: keys.client_email,
            privateKey: keys.private_key.replace(/\\n/g, '\n'), 
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL
    }
    admin.initializeApp(config);
}

module.exports = {
    initializeFirebase,
};
