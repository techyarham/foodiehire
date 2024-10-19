import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";


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


const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const citySelect = document.querySelector('#city');
const addressInput = document.querySelector('#address');
const messageInput = document.querySelector('#message');
const durationSelect = document.querySelector('#duration');
const submitOrderBtn = document.getElementById('submit-order-button');
const hireForm = document.getElementById('hire-form');

let selectedChefId = null;

function getUserIdFromSession() {
    const userCreds = JSON.parse(sessionStorage.getItem("user-creds"));
    return userCreds ? userCreds.uid : null;
}
const userId = getUserIdFromSession();

async function fetchChefs() {
    try {
        const chefsCollection = collection(db, "chef");
        const chefSnapshot = await getDocs(chefsCollection);
        return chefSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching chefs: ", error);
        return [];
    }
}


function selectChef(id) {
    selectedChefId = id;

    const selectButtons = document.querySelectorAll('.select-chef-btn');
    selectButtons.forEach(btn => {
        if (btn.getAttribute('data-chef-id') === id) {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-success');
            btn.disabled = true;
            btn.textContent = "Selected";
        } else {
            btn.disabled = true;
        }
    });
}


function displayChefs(chefs) {
    const chefsContainer = document.getElementById('chefs-container');
    chefsContainer.innerHTML = "";

    if (chefs.length === 0) {
        chefsContainer.innerHTML = "<p>No chefs available at the moment.</p>";
        return;
    }

    chefs.forEach(chef => {
        const chefCard = document.createElement('div');
        chefCard.classList.add('card', 'm-2');
        chefCard.style.minWidth = "18rem";
        chefCard.style.flex = "0 0 auto";


        chefCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${chef.name}</h5>
                <p class="card-text">Email: ${chef.email}</p>
                <p class="card-text">City: ${chef.city}</p>
                <p class="card-text">WhatsApp: ${chef.whatsapp}</p>
                <button class="btn btn-primary select-chef-btn" data-chef-id="${chef.id}">Select Chef</button>
            </div>
        `;
        chefsContainer.appendChild(chefCard);
    });


    const selectChefButtons = document.querySelectorAll('.select-chef-btn');
    selectChefButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chefId = button.getAttribute('data-chef-id');
            selectChef(chefId);
        });
    });
}


async function initializeChefs() {
    const chefs = await fetchChefs();
    displayChefs(chefs);
}

initializeChefs();

hireForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!selectedChefId) {
        alert("Please select a chef before placing an order!");
        return;
    }


    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const address = addressInput.value.trim();
    const city = citySelect.value;
    const message = messageInput.value.trim();
    const duration = durationSelect.value;

    if (!name || !phone || !address || !city || !duration) {
        alert("Please fill in all the required fields.");
        return;
    }

    try {

        const ordersCollection = collection(db, `chef/${selectedChefId}/orders`);
        await addDoc(ordersCollection, {
            name: name,
            phone: phone,
            address: address,
            city: city,
            message: message,
            duration: duration,
            timestamp: new Date()
        });

        const userOrdersCollection = collection(db, `Users/${userId}/orders`);
        await addDoc(userOrdersCollection, {
            phone: phone,
            address: address,
            city: city,
            message: message,
            duration: duration,
            timestamp: new Date()
        });
        alert("Order placed successfully!");
window.location.href="index.html";

        hireForm.reset();
        selectedChefId = null;


        const selectButtons = document.querySelectorAll('.select-chef-btn');
        selectButtons.forEach(btn => {
            btn.classList.remove('btn-success');
            btn.classList.add('btn-primary');
            btn.disabled = false;
            btn.textContent = "Select Chef";
        });

    } catch (error) {
        console.error("Error placing order: ", error);
        alert("Failed to place order. Please try again.");
    }
});


function chefScrollLeftCarousel() {
    const chefsContainer = document.getElementById('chefs-container');
    chefsContainer.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
    });
}

function chefScrollRightCarousel() {
    const chefsContainer = document.getElementById('chefs-container');
    chefsContainer.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
    });
}


window.chefScrollLeftCarousel = chefScrollLeftCarousel;
window.chefScrollRightCarousel = chefScrollRightCarousel;

function checkCred() {
    let creds = sessionStorage.getItem("user-creds");

    if (creds) {
        console.log("User is logged in:", JSON.parse(creds));

    } else {

        $('#loginModal').modal('show');
    }
}


window.onload = function () {
    checkCred();
};
