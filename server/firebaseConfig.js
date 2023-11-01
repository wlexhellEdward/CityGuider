function initializeFirebase(admin) {
    const serviceAccount = require("./keys/firebaseKey.json");
    const config = {
        credential: admin.credential.cert({
            projectId: serviceAccount.project_id,
            clientEmail: serviceAccount.client_email,
            privateKey: serviceAccount.private_key,
        }),
        databaseURL: serviceAccount.databaseURL
    }
    admin.initializeApp(config);
}

module.exports = {
    initializeFirebase,
};
