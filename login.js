import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiMGg52D5wfpImycjlGi6TueAm56v5cwg",
  authDomain: "test-final-3ee04.firebaseapp.com",
  projectId: "test-final-3ee04",
  storageBucket: "test-final-3ee04.appspot.com",
  messagingSenderId: "909399489885",
  appId: "1:909399489885:web:09263e312e4ef0360bbcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// DOM Elements
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('#login-form');

// Sign in function
let signInUser = async (evt) => {
  evt.preventDefault();  // Prevent form submission

  try {
    const credentials = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log(credentials);

    // Check if the user exists in the "Users" collection
    const userRef = doc(db, "Users", credentials.user.uid);
    const userSnap = await getDoc(userRef);

    // Check if the user exists in the "chef" collection
    const chefRef = doc(db, "chef", credentials.user.uid);
    const chefSnap = await getDoc(chefRef);

    if (userSnap.exists()) {
   
      sessionStorage.setItem("user-info", JSON.stringify({
        name: userSnap.data().name,
        email: userSnap.data().email,
        role: 'user'  
      }));
      sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
      window.location.href = "index.html";
    } else if (chefSnap.exists()) {
      
      sessionStorage.setItem("user-info", JSON.stringify({
        name: chefSnap.data().name,
        email: chefSnap.data().email,
        role: 'chef'  
      }));
      sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
      window.location.href = "profile.html";  
    } else {
     
      alert("No user or chef found with this account.");
    }
  } catch (error) {
    alert(error.message);
  }
};


form.addEventListener('submit', signInUser);

const manageSession = async (credentials) => {
  const userId = credentials.user.uid;

 
  const chefRef = doc(db, "chef", userId);
  const chefSnap = await getDoc(chefRef);

  if (chefSnap.exists()) {
    
    sessionStorage.setItem("user-info", JSON.stringify({
      name: chefSnap.data().name,
      email: chefSnap.data().email,
      city: chefSnap.data().city,
      role: 'chef'
    }));
    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
    window.location.href = "profile.html";
   
    const userRef = doc(db, "Users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
   
      sessionStorage.setItem("user-info", JSON.stringify({
        name: userSnap.data().name,
        email: userSnap.data().email,
        role: 'user'
      }));
      sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
      window.location.href = "profile.html";  
    } else {
      alert("User not found in either Users or Chefs collection. Please register first.");
    }
  }
};


let signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    await manageSession(result);  
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
document.querySelector('.google-btn').addEventListener('click',signInWithGoogle)

