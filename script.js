
// Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAbXXSeIazuACmfNo3Sl-1Q8NAaVNyaaRY",
            authDomain: "learn-a0a48.firebaseapp.com",
            projectId: "learn-a0a48",
            storageBucket: "learn-a0a48.appspot.com",
            messagingSenderId: "131269846409",
            appId: "1:131269846409:web:3cab07be211a1a5381ed58",
            measurementId: "G-6SXKEJQ5MH"
        };
    
  
        firebase.initializeApp(firebaseConfig);




        
    let creds = sessionStorage.getItem("user-creds"); 
    if (creds) {
        document.getElementById('login').style.display = "none"; 
        document.getElementById('signup').style.display = "none"; 
        document.getElementById('profile').style.display = "block"; 
    } else {
        document.getElementById('login').style.display = "block"; 
        document.getElementById('signup').style.display = "block"; 
        document.getElementById('profile').style.display = "none";
      
  
    }
 
