// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQY4wM5QIajnUNG6PlzNFvSOy-UvBlenc",
  authDomain: "netflixclone-bd031.firebaseapp.com",
  projectId: "netflixclone-bd031",
  storageBucket: "netflixclone-bd031.firebasestorage.app",
  messagingSenderId: "220560037226",
  appId: "1:220560037226:web:43f60fee072460a192c113",
  measurementId: "G-G6J60NNBTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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