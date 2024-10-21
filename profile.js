let creds = sessionStorage.getItem("user-creds"); 


if (!creds) {

   window.location.href = "index.html";
} else {
   console.log("Credentials found, user is logged in.");
}
let userInfoString = sessionStorage.getItem('user-info');


let userInfo = JSON.parse(userInfoString);


console.log(userInfo.name); 
console.log(userInfo.email); 
let userName = userInfo.name;
let email =userInfo.email;
let nameHeading = document.querySelector('#user-name');
let pfpTextImg = document.querySelector('#pfp-img-text');
nameHeading.innerHTML =userName;
let pfpText=userName.charAt(0);
let pfpTextFinal =pfpText.toUpperCase();
pfpTextImg.innerHTML=pfpTextFinal;


    
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
    import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

    // Your Firebase configuration
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
    const db = getFirestore(app);

   
    function getUserIdFromSession() {
        const userCreds = JSON.parse(sessionStorage.getItem("user-creds"));
        return userCreds ? userCreds.uid : null; 
    }

    
async function fetchUserOrders(userId) {
    try {
      
        const ordersCollection = collection(db, `Users/${userId}/orders`);
        let ordersSnapshot = await getDocs(ordersCollection);

        if (ordersSnapshot.empty) {
            console.log("No orders found in Users collection, checking Chef collection.");
            const chefOrdersCollection = collection(db, `chef/${userId}/orders`);
            ordersSnapshot = await getDocs(chefOrdersCollection);
        }

      
        return ordersSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching orders: ", error);
        return [];
    }
}


    function displayUserOrders(orders) {
        const ordersContainer = document.getElementById('orders-container');
        ordersContainer.innerHTML = ""; 

        if (orders.length === 0) {
            ordersContainer.innerHTML = "<p>No orders found.</p>";
            return;
        }

         orders.forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.classList.add('card', 'm-2');
        orderCard.style.width = "18rem";
        
        let durationText = "";
        if (order.duration) {
            durationText = `<p class="card-text">Duration: ${order.duration}</p>`;
        }
        let orderDetails = "";
        if (order.orderDetails) {
            orderDetails = `<p class="card-text">Order Details: ${order.orderDetails}</p>`;
        }
        
        orderCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Order ID: ${order.id}</h5>
                ${orderDetails}  <!-- Only add duration if it exists -->
                <p class="card-text">City: ${order.city}</p>
                <p class="card-text">Address: ${order.address}</p>
                <p class="card-text">WhatsApp: ${order.whatsapp}</p>
                <p class="card-text">Message: ${order.message}</p>
                ${durationText}  <!-- Only add duration if it exists -->
                <p class="card-text">Timestamp: ${new Date(order.timestamp.seconds * 1000).toLocaleString()}</p>
            </div>
        `;
        ordersContainer.appendChild(orderCard);
    });
}



    async function initializeOrderHistory() {
        const userId = getUserIdFromSession();
        if (!userId) {
            document.getElementById('orders-container').innerHTML = "<p>Please log in to see your order history.</p>";
            return;
        }

        const orders = await fetchUserOrders(userId);
        displayUserOrders(orders);
    }


    window.onload = function() {
        initializeOrderHistory(); 
    };

