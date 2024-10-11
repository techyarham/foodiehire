import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore,doc,setDoc} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth,createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiMGg52D5wfpImycjlGi6TueAm56v5cwg",
  authDomain: "test-final-3ee04.firebaseapp.com",
  projectId: "test-final-3ee04",
  storageBucket: "test-final-3ee04.appspot.com",
  messagingSenderId: "909399489885",
  appId: "1:909399489885:web:09263e312e4ef0360bbcb4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let email = document.querySelector('#email');
let password = document.querySelector('#password');
let fName = document.querySelector('#f-name');
let form = document.querySelector('#signup-form');



let registerUser = evt => {
    evt.preventDefault();

    sessionStorage.removeItem("user-info");
    sessionStorage.removeItem("user-creds");
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (credentials) => {
            console.log(credentials);


            var ref = doc(db, "Users", credentials.user.uid);
        
            await setDoc(ref, {
                name: fName.value,
                email: email.value
            });

            
            sessionStorage.setItem("user-info", JSON.stringify({
                name: fName.value,
                email: email.value
            }));
            sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));

            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error);
        });
}
form.addEventListener('submit', registerUser);



let signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credentials = result.user;
  
   
      const ref = doc(db, "Users", credentials.uid);
      await setDoc(ref, {
        name: credentials.displayName,
        email: credentials.email,
      });
  

      sessionStorage.setItem("user-info", JSON.stringify({
        name: credentials.displayName,
        email: credentials.email,
        role: 'user'
      }));
      sessionStorage.setItem("user-creds", JSON.stringify(credentials));
  
      
      window.location.href = "user-dashboard.html";
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  document.querySelector('.google-btn').addEventListener('click',signUpWithGoogle)

