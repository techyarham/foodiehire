import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore,doc,setDoc} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";


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


let email = document.querySelector('#chef-email');
let password = document.querySelector('#chef-password');
let chefName = document.querySelector('#chef-name');
let form = document.querySelector('#register-form');
let whatsapp = document .querySelector("#chef-whatsapp");
let cnic = document .querySelector("#chef-cnic");
let city = document .querySelector("#chef-city");

let registerChef=evt=>{
    evt.preventDefault();  
   
    sessionStorage.removeItem("user-info");
    sessionStorage.removeItem("user-creds");
    
    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then(async(credentials)=>{
        console.log(credentials);
        var ref = doc(db,"chef",credentials.user.uid)
        await setDoc(ref,{
            name:chefName.value,
            email:email.value,
            cnic :cnic.value,
            city :city.value,
            whatsapp :whatsapp.value

        })

           
            sessionStorage.setItem("user-info", JSON.stringify({
                name: chefName.value,
                email: email.value,
            }));
            sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));

       
            window.location.href = "index.html";
    })
    .catch((error)=>{
        alert(error)
    })
    
}
form.addEventListener('submit',registerChef)

