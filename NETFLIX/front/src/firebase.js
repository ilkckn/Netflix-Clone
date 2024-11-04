import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBlkXSJ-f1d5m5voPs0fx3ebiLmWAC5kr8",
  authDomain: "netflix-clone-689aa.firebaseapp.com",
  projectId: "netflix-clone-689aa",
  storageBucket: "netflix-clone-689aa.firebasestorage.app",
  messagingSenderId: "608213301899",
  appId: "1:608213301899:web:531c7fe37a4a230ca6f28e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
   const res = await createUserWithEmailAndPassword(auth, email, password);
   const user = res.user;
   await addDoc(collection(db, "users"), {
     uid: user.uid,
     name: name,
     email: email,
     authProvider: "local",
   });
  }catch(error){
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
}

const logout = () => {
  signOut(auth);
}

export { auth, db, signUp, login, logout };