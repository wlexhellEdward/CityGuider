const express = require("express");
const admin = require("firebase-admin");
const router = express.Router();

router.delete("/delete/:uid", async (req, res) => {
    const userId = req.params.uid;
    console.log("USERID" + userId)
    try {
        await admin.auth().deleteUser(userId);
        return res.status(200).send("Пользователь успешно удален.");
    } catch (error) {
        console.error("Ошибка удаления пользователя:", error);
        return res.status(500).send("Произошла ошибка при удалении пользователя.");
    }
});

router.post("/edit/:uid", async (req, res) => {
    const userData = req.body;
    const uid = req.params.uid
    const { email, passwordHash, metadata } = userData;
    try {
        const response = await admin.auth().updateUser(uid, {
            uid,
            email,
            passwordHash,
            metadata,
        });
        return res.status(200).send(response);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Произошла ошибка, не удалось обновить данные пользователя");
    }
});

router.get("/get", async (req, res) => {
    try {
        const response = await admin.auth().listUsers();
        return res.status(200).send(response);
    }
    catch (error) {
        console.error(error)
        return res.status(500).send("Произошла ошибка при загрузке данных пользователя")
    }

});



module.exports = router;
