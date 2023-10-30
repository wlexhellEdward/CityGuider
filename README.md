# City Guider

---

## Description

An application for finding places of different categories near you

![Иконка приложения](https://dapper-kataifi-c585d7.netlify.app/assets/Logo-0a4cc35d.svg)

---
## Deployment

This project is currently hosted on [Netlify](https://www.netlify.com/).

You can access the live version of the application [here](https://dapper-kataifi-c585d7.netlify.app/).

### Hosted on Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/cda3af33-2d8b-45e4-a627-25d3e727102e/deploy-status)](https://dapper-kataifi-c585d7.netlify.app/)

---

## Technologies

- **React + TS**
- **Firebase**
- **Firebase Database RealTime**
- **Google Maps Api**
- **Jest**
- *and 7 more...*

---

## Setup

```shell
$ git clone https://github.com/wlexhellEdward/TestTask
$ npm i
$ npm run dev
```

## Build

```shell
$ npm build
```

## Environment Variables

To run this project, you need to set up the following environment variables. You can do this by creating a `.env` file in the root directory of your project and adding the following values:

- **REACT_APP_GOOGLE_MAPS_API_KEY** = *your_google_maps_api_key*
- **REACT_APP_FIREBASE_API_KEY** = *your_firebase_api_key*
- **REACT_APP_FIREBASE_AUTH_DOMAIN** = *your_firebase_auth_domain*
- **REACT_APP_FIREBASE_PROJECT_ID** = *your_firebase_project_id*
- **REACT_APP_FIREBASE_STORAGE_BUCKET** = *your_firebase_storage_bucket*
- **REACT_APP_FIREBASE_MESSAGING_SENDER_ID** = *your_firebase_messaging_sender_id*
- **REACT_APP_FIREBASE_APP_ID** = *your_firebase_app_id*


Make sure to replace `your_google_maps_api_key`, `your_firebase_api_key`, and other placeholders with your actual environment variable values.

You can then access these environment variables in your React application using `process.env.<VARIABLE_NAME>`. For example, to access your Google Maps API key, you can use `process.env.REACT_APP_GOOGLE_MAPS_API_KEY`.

Please make sure to keep your environment variables secret and not to commit them to your version control system for security reasons.

