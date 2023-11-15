const express = require("express");
const admin = require("firebase-admin");
const { server_answer } = require('../utils/consts.json')
const { admins } = require('../utils/consts.json')
const router = express.Router();

router.get('/check-role/:uid', async (req, res) => {
    const uid = req.params.uid;
    try {
        if (admins[uid] && admins[uid].level === 'admin') {
            return res.status(server_answer.success).send('30');
        }
        if (admins[uid] && admins[uid].level === 'moderator') {
            return res.status(server_answer.success).send('15');
        } else {
            return res.status(server_answer.success).send('0');
        }
    } catch {
        return res.status(server_answer.error).send("Something went wrong");
    }
});

router.delete("/delete/:uid", async (req, res) => {
    const userId = req.params.uid;
    try {
        await admin.auth().deleteUser(userId);
        return res.status(server_answer.success).send("Пользователь успешно удален.");
    } catch (error) {
        console.error("Ошибка удаления пользователя:", error);
        return res.status(server_answer.error).send("Произошла ошибка при удалении пользователя.");
    }
});

router.post("/edit/:uid", async (req, res) => {
    const userData = req.body;
    const { email } = userData
    const uid = req.params.uid
    try {
        const response = await admin.auth().updateUser(uid, {
            email
        });
        return res.status(server_answer.success).send(response);
    } catch (error) {
        console.error(error);
        return res.status(server_answer.error).send("Произошла ошибка, не удалось обновить данные пользователя");
    }
});


router.get("/get", async (req, res) => {
    try {
        const response = await admin.auth().listUsers();
        return res.status(server_answer.success).send(response);
    }
    catch (error) {
        console.error(error)
        return res.status(server_answer.error).send("Произошла ошибка при загрузке данных пользователя")
    }
});



module.exports = router;
