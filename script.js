
// const subscribeButton = document.getElementById("subscribe-btn");
// if (subscribeButton) {
//     subscribeButton.addEventListener("click", function () {
//         alert("Thank you for subscribing.");
//     });
// }

const subscribeButton = document.getElementById("subscribe-btn");
if (subscribeButton) {
    subscribeButton.addEventListener("click", function () {
        const emailInput = document.getElementById("subscribe-email");
        if (emailInput.reportValidity()) {
            alert("Thank you for subscribing.");
            emailInput.value = "";
        }
    });
}

function getCart() {
    const stored = sessionStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
}


function saveCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
    const list = document.getElementById("cart-items");
    const emptyMessage = document.getElementById("cart-empty-message");
    const cart = getCart();
 
    list.innerHTML = "";
    cart.forEach(function (itemName) {
        const li = document.createElement("li");
        li.textContent = itemName;
        list.appendChild(li);
    });
 
    emptyMessage.style.display = cart.length === 0 ? "block" : "none";
}

// const addToCartButtons = document.querySelectorAll(".add-to-cart");
// addToCartButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         alert("Item added to the cart.");
//     });
// });

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        
        const itemName = button.parentElement.querySelector("h3").textContent;
        const cart = getCart();
        cart.push(itemName);
        saveCart(cart);
        alert("Item added to the cart.");
    });
});

const viewCartButton = document.getElementById("view-cart-btn");
const cartModal = document.getElementById("cart-modal");
if (viewCartButton && cartModal) {
    viewCartButton.addEventListener("click", function () {
        displayCart();
        cartModal.classList.add("open");
    });
}

const closeCartButton = document.getElementById("close-cart-btn");
if (closeCartButton) {
    closeCartButton.addEventListener("click", function () {
        cartModal.classList.remove("open");
    });
}

// const clearCartButton = document.getElementById("clear-cart-btn");
// if (clearCartButton) {
//     clearCartButton.addEventListener("click", function () {
//         alert("Cart cleared.");
//     });
// }

const clearCartButton = document.getElementById("clear-cart-btn");
if (clearCartButton) {
    clearCartButton.addEventListener("click", function () {
        sessionStorage.removeItem("cart");
        displayCart();
        alert("Cart cleared.");
    });
}


// const processOrderButton = document.getElementById("process-order-btn");
// if (processOrderButton) {
//     processOrderButton.addEventListener("click", function () {
//         alert("Thank you for your order.");
//     });
// }

const processOrderButton = document.getElementById("process-order-btn");
if (processOrderButton) {
    processOrderButton.addEventListener("click", function () {
        sessionStorage.removeItem("cart");
        displayCart();
        alert("Thank you for your order.");
    });
}


// const feedbackSubmitButton = document.getElementById("fb-submit");
// if (feedbackSubmitButton) {
//     feedbackSubmitButton.addEventListener("click", function (event) {
//         const form = document.getElementById("fb-form");
       
//         if (form.checkValidity()) {
//             event.preventDefault();
//             alert("Thank you for your message.");
//             form.reset();
//         }
//     });
// }

const feedbackSubmitButton = document.getElementById("fb-submit");
if (feedbackSubmitButton) {
    feedbackSubmitButton.addEventListener("click", function (event) {
        const form = document.getElementById("fb-form");
 
    
        if (form.checkValidity()) {
            event.preventDefault();
 

            const customOrder = {
                name: document.getElementById("fb-name").value,
                email: document.getElementById("fb-email").value,
                message: document.getElementById("fb-message").value
            };
            localStorage.setItem("customOrder", JSON.stringify(customOrder));
 
            alert("Thank you for your message.");
            form.reset();
        }
    });
}