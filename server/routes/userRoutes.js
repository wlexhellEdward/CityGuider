const express = require("express");
const admin = require("firebase-admin");
const router = express.Router();

router.delete("/delete/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        await admin.auth().deleteUser(userId);
        return res.status(200).send("Пользователь успешно удален.");
    } catch (error) {
        console.error("Ошибка удаления пользователя:", error);
        return res.status(500).send("Произошла ошибка при удалении пользователя.");
    }
});

router.get("/get", async (req, res) => {
    const response = await admin.auth().listUsers();
    // const usersArray = Array.from(response.users);
    // const usersJSON = JSON.stringify(usersArray);
    return res.status(200).send(response);
});



module.exports = router;
