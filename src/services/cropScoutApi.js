import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import config from "../configs/firebase";

class CropScoutApi {
  firebaseInstance;

  constructor() {
    this.firebaseInstance = firebase.initializeApp({
      apiKey: config.apiKey,
      authDomain: `${config.projectId}.firebaseapp.com`,
      databaseURL: `https://${config.projectId}.firebaseio.com`,
      projectId: `${config.projectId}`,
      storageBucket: `${config.projectId}.appspot.com`,
      messagingSenderId: config.senderId,
      appId: config.appId,
    });
  }

  async getList() {
    const firestore = this.firebaseInstance.firestore();

    const snapshot = await firestore.collection("notes").get();

    const notes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return notes;
  }

  async createItem(person, description, date) {
    const firestore = firebase.firestore();
    const newItem = await firestore.collection("notes").add({
      person,
      description,
      date,
    });

    console.log(newItem);

    return newItem;
  }

  async signIn(email, password) {
    const auth = this.firebaseInstance.auth();
    const response = await auth.signInWithEmailAndPassword(email, password);

    if (!response.user) {
      return undefined;
    }

    return {
      uid: response.user.uid,
      email: response.user.email,
    };
  }
}

export default new CropScoutApi();
