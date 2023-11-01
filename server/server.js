const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const app = express();
const port = 3000;

const { initializeFirebase } = require("./firebaseConfig");
const userRoutes = require("./routes/userRoutes");

initializeFirebase(admin);

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
