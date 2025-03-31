import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
         getAuth,
         signInWithEmailAndPassword,
         signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDSLLAObr4hEdvIUQ1W2Gqg3kCfbQYxrEE",
  authDomain: "netflix-aiclone.firebaseapp.com",
  projectId: "netflix-aiclone",
  storageBucket: "netflix-aiclone.firebasestorage.app",
  messagingSenderId: "802721965152",
  appId: "1:802721965152:web:af96c4d9b4db2b7a38cf05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider: "local",
            email,
        })
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password)=>{
    try{
        signInWithEmailAndPassword(auth, email, password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};