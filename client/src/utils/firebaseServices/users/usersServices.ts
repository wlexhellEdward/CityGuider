import { IUser } from "@/interfaces/IUser";

import axios from "axios";

const host = process.env.REACT_APP_API_PATH?.toString() || "";

export function getListAllUsers() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${host}api/users/get`)
      .then((response) => {
        if (response.status == 200) {
          resolve(response.data.users);
        } else {
          console.error("Произошла ошибка при удалении пользователя");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function deleteUserById(uid: string) {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${host}api/users/delete/${uid}`)
      .then((response) => {
        if (response.status == 200) {
          resolve("success");
        } else {
          console.error("Произошла ошибка при удалении пользователя");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function editUserInfo(user: IUser) {
  const uid = user.uid;
  return new Promise((resolve, reject) => {
    axios
      .post(`${host}api/users/edit/${uid}`, user)
      .then(() => {
        resolve("succes");
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function checkUserRole(uid: string) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${host}api/users/check-role/${uid}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
