const chefsContainer = document.querySelector('#chefs-container');

    function chefScrollLeftCarousel() {
        chefsContainer.scrollBy({
            left: -300, 
            behavior: 'smooth'
        });
    }

    function chefScrollRightCarousel() {
        chefsContainer.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    }

  
    document.querySelector('.chef-carousel-control-prev').onclick = chefScrollLeftCarousel;
    document.querySelector('.chef-carousel-control-next').onclick = chefScrollRightCarousel;

   

document.addEventListener('DOMContentLoaded', function () {
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');

    function scrollLeftCarousel() {
        scrollingWrapper.scrollBy({
            left: -300, 
            behavior: 'smooth'
        });
    }

    function scrollRightCarousel() {
        scrollingWrapper.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    }

    
    document.querySelector('.carousel-control-prev').onclick = scrollLeftCarousel;
    document.querySelector('.carousel-control-next').onclick = scrollRightCarousel;

    
});


// chicken biryani

let cbquantitypara = document.getElementById('cb-quantity-para');
let cbplus = document.getElementById('cb-plus');
let cbminus = document.getElementById('cb-minus');
let cbmainQuantity = 0;


cbquantitypara.innerText = cbmainQuantity;


cbplus.addEventListener('click', () => {
    if (cbmainQuantity < 10) {
        cbmainQuantity++;
        cbquantitypara.innerText = cbmainQuantity;
    }

});


cbminus.addEventListener('click', () => {
    if (cbmainQuantity > 0) {
        cbmainQuantity--;
        cbquantitypara.innerText = cbmainQuantity;
    }
});
// beef biryani
let bbquantitypara = document.getElementById('bb-quantity-para');
let bbplus = document.getElementById('bb-plus');
let bbminus = document.getElementById('bb-minus');
let bbmainQuantity = 0;

// Initialize display
bbquantitypara.innerText = bbmainQuantity;


bbplus.addEventListener('click', () => {
    if (bbmainQuantity < 10) {
        bbmainQuantity++;
        bbquantitypara.innerText = bbmainQuantity;
    }

});


bbminus.addEventListener('click', () => {
    if (bbmainQuantity > 0) {
        bbmainQuantity--;
        bbquantitypara.innerText = bbmainQuantity;
    }
});

// karahi
let kquantitypara = document.getElementById('k-quantity-para');
let kplus = document.getElementById('k-plus');
let kminus = document.getElementById('k-minus');
let kmainQuantity = 0;

kquantitypara.innerText = kmainQuantity;

kplus.addEventListener('click', () => {
    if (kmainQuantity < 10) {
        kmainQuantity++;
        kquantitypara.innerText = kmainQuantity;
    }

});

kminus.addEventListener('click', () => {
    if (kmainQuantity > 0) {
        kmainQuantity--;
        kquantitypara.innerText = kmainQuantity;
    }
});

// qorma
let qquantitypara = document.getElementById('q-quantity-para');
let qplus = document.getElementById('q-plus');
let qminus = document.getElementById('q-minus');
let qmainQuantity = 0;

qquantitypara.innerText = qmainQuantity;

qplus.addEventListener('click', () => {
    if (qmainQuantity < 10) {
        qmainQuantity++;
        qquantitypara.innerText = qmainQuantity;
    }

});

qminus.addEventListener('click', () => {
    if (qmainQuantity > 0) {
        qmainQuantity--;
        qquantitypara.innerText = qmainQuantity;
    }
});
// broast
let bquantitypara = document.getElementById('b-quantity-para');
let bplus = document.getElementById('b-plus');
let bminus = document.getElementById('b-minus');
let bmainQuantity = 0;

bquantitypara.innerText = bmainQuantity;

bplus.addEventListener('click', () => {
    if (bmainQuantity < 10) {
        bmainQuantity++;
        bquantitypara.innerText = bmainQuantity;
    }

});

bminus.addEventListener('click', () => {
    if (bmainQuantity > 0) {
        bmainQuantity--;
        bquantitypara.innerText = bmainQuantity;
    }
});



let broastAdd = document.querySelector("#broast");
let qormaAdd = document.querySelector("#qorma");
let chickenKarahiAdd = document.querySelector("#chicken-karahi");
let beefBiryaniAdd = document.querySelector("#beef-biryani");
let chickenBiryaniAdd = document.querySelector("#chicken-biryani");

let orderDetailsPara = document.getElementById('order-info');
// Chicken Biryani
let cbOrder;
chickenBiryaniAdd.addEventListener('click', () => {
    if (cbmainQuantity >= 1) {
       
        const cbOrder = ` "Chicken Biryani ${cbmainQuantity}"`;
        if (!orderDetailsPara.innerText.includes("Chicken Biryani")) {
            orderDetailsPara.innerText += cbOrder;
            chickenBiryaniAdd.innerText = "Added";
            chickenBiryaniAdd.style.backgroundColor = "grey";
            chickenBiryaniAdd.style.color = "white";
            chickenBiryaniAdd.style.border = "none";
        } else {
            console.log("Item already added");
        }
    } else {
        console.log("Quantity can't be zero");
    }
});
// Beef Biryani
let bbOrder;
beefBiryaniAdd.addEventListener('click', () => {
    if (bbmainQuantity >= 1) {

        const bbOrder = ` "Beef Biryani ${bbmainQuantity}"`;
        if (!orderDetailsPara.innerText.includes("Beef Biryani")) {
            orderDetailsPara.innerText += bbOrder;
            beefBiryaniAdd.innerText = "Added";
            beefBiryaniAdd.style.backgroundColor = "grey";
            beefBiryaniAdd.style.color = "white";
            beefBiryaniAdd.style.border = "none";
        } else {
            console.log("Item already added");
        }
    } else {
        console.log("Quantity can't be zero");
    }
});

// Beef Biryani
let kOrder;
chickenKarahiAdd.addEventListener('click', () => {
    if (kmainQuantity >= 1) {

        const kOrder = ` "Chicken Karahi ${kmainQuantity}"`;
        if (!orderDetailsPara.innerText.includes("Chicken Karahi")) {
            orderDetailsPara.innerText += kOrder;
            chickenKarahiAdd.innerText = "Added";
            chickenKarahiAdd.style.backgroundColor = "grey";
            chickenKarahiAdd.style.color = "white";
            chickenKarahiAdd.style.border = "none";
        } else {
            console.log("Item already added");
        }
    } else {
        console.log("Quantity can't be zero");
    }
});
// Qorma
let qOrder;
qormaAdd.addEventListener('click', () => {
    if (qmainQuantity >= 1) {

        const qOrder = ` "Qorma ${qmainQuantity}"`;
        if (!orderDetailsPara.innerText.includes("Qorma")) {
            orderDetailsPara.innerText += qOrder;
            qormaAdd.innerText = "Added";
            qormaAdd.style.backgroundColor = "grey";
            qormaAdd.style.color = "white";
            qormaAdd.style.border = "none";
        } else {
            console.log("Item already added");
        }
    } else {
        console.log("Quantity can't be zero");
    }
});
// Broast
let bOrder;
broastAdd.addEventListener('click', () => {
    if (bmainQuantity >= 1) {

        const bOrder = ` "Broast ${bmainQuantity}"`;
        if (!orderDetailsPara.innerText.includes("Broast")) {
            orderDetailsPara.innerText += bOrder;
            broastAdd.innerText = "Added";
            broastAdd.style.backgroundColor = "grey";
            broastAdd.style.color = "white";
            broastAdd.style.border = "none";
        } else {
            console.log("Item already added");
        }
    } else {
        console.log("Quantity can't be zero");
    }
});
let resetAdd = document.querySelectorAll(".add-product");
let clear = document.querySelector("#clear");

clear.addEventListener('click', () => {
    orderDetailsPara.innerText = "";
    broastAdd.innerText = "Add"; 
    broastAdd.style.backgroundColor = ""; 
    broastAdd.style.color = ""; 
    broastAdd.style.border = ""; 

    qormaAdd.innerText = "Add"; 
    qormaAdd.style.backgroundColor = ""; 
    qormaAdd.style.color = ""; 
    qormaAdd.style.border = "";  

    chickenKarahiAdd.innerText = "Add"; 
    chickenKarahiAdd.style.backgroundColor = ""; 
    chickenKarahiAdd.style.color = ""; 
    chickenKarahiAdd.style.border = ""; 

    chickenBiryaniAdd.innerText = "Add";
    chickenBiryaniAdd.style.backgroundColor = ""; 
    chickenBiryaniAdd.style.color = ""; 
    chickenBiryaniAdd.style.border = ""; 

    beefBiryaniAdd.innerText = "Add"; 
    beefBiryaniAdd.style.backgroundColor = ""; 
    beefBiryaniAdd.style.color = ""; 
    beefBiryaniAdd.style.border = ""; 
    message.value = "";
    adress.value = "";
    whatsapp.value = "";

});
let selectedChefId = null; 

// Firebase Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

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
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
            btn.style.border = "none";
            btn.disabled = true;
        } else {
            btn.disabled = true; 
        }
    });
}


function displayChefs(chefs) {
    const chefsContainer = document.getElementById('chefs-container');
    chefsContainer.innerHTML = ""; 

    chefs.forEach(chef => {
        const chefCard = document.createElement('div');
        chefCard.classList.add('card', 'm-2');
        chefCard.style.width = "18rem";

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
    if (chefs.length === 0) {
        document.getElementById('chefs-container').innerHTML = "<p>No chefs available at the moment.</p>";
    } else {
        displayChefs(chefs);
    }
}

initializeChefs();


const submitOrderBtn = document.getElementById('submit-order-button');
if (submitOrderBtn) {
    submitOrderBtn.addEventListener('click', async () => {
     
        if (!selectedChefId) {
            alert("Please select a chef before placing an order!");
            return;
        }

     
        const orderDetails = document.getElementById('order-info').innerText.trim();
        const city = document.getElementById('city').value;
        const message = document.querySelector('.chef-message').value;
        const address = document.querySelector('.adress').value;
        const whatsapp = document.querySelector('.whatsapp').value;

        
        if (!orderDetails || !city || !address || !whatsapp) {
            alert("Please fill in all the required fields.");
            return;
        }

       
        const userId = getUserIdFromSession();
        if (!userId) {
            alert("User is not logged in. Please log in before placing an order.");
            return;
        }

        try {
          
            const ordersCollection = collection(db, `chef/${selectedChefId}/orders`);
            await addDoc(ordersCollection, {
                title:"Order",
                orderDetails: orderDetails,
                city: city,
                message: message,
                address: address,
                whatsapp: whatsapp,
                userId: userId, 
                timestamp: new Date()
            });

            const userOrdersCollection = collection(db, `Users/${userId}/orders`);
            await addDoc(userOrdersCollection, {
                orderDetails: orderDetails,
                chefId: selectedChefId, 
                city: city,
                address: address,
                whatsapp: whatsapp,
                message: message,
                timestamp: new Date()
            });

            alert("Order placed successfully!");
window.location.href="index.html";
        
            clearForm();
        } catch (error) {
            console.error("Error placing order: ", error);
            alert("Failed to place order. Please try again.");
        }
    });
}


function clearForm() {
    document.getElementById('order-info').innerText = '';
    document.getElementById('city').value = '';
    document.querySelector('.chef-message').value = '';
    document.querySelector('.adress').value = '';
    document.querySelector('.whatsapp').value = '';
}


function checkCred() {
    let creds = sessionStorage.getItem("user-creds"); 

    if (creds) {
        console.log("User is logged in:", JSON.parse(creds));
     
    } else {
       
        $('#loginModal').modal('show'); 
    }
}

window.onload = function() {
    checkCred(); 
};
