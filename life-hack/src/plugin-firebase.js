import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  projectId: "YOUR_PROJECT_ID",
  databaseURL: "YOUR_DB_URL"
});

export const db = firebase.firestore();
