const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const app = express();
const port = 3000;

const { initializeFirebase } = require("./firebaseConfig");
const userRoutes = require("./routes/userRoutes");


initializeFirebase(admin);

app.use(express.json());
const corsOptions = {
    origin: ["http://localhost:5173", "https://cityguider-api-prod.up.railway.app/"],
    methods: "GET,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));
app.use("/api/users", userRoutes);
app.use("/",(req,res)=>{
    res.send('server is live')
})


app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
