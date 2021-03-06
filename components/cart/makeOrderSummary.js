import { removeFromCart } from "./removeFromCart.js";
const cartList = document.querySelector(".cart-list");
const cart = document.querySelector(".cart");
const totalContainer = document.querySelector(".total");
const checkoutButton = document.querySelector(".checkout-button");

export function makeOrderSummary() {
  const cartItems = JSON.parse(localStorage.getItem("cartList")) || [];
  if (cartItems.length !== 0) {
    cartList.innerHTML = "";
    let total = 0;

    let cart = [];
    var count = 0;
    cartItems.forEach((item) => {
      total += item.price;

      var element = {};
      if (item) {
        count += 1;
        element[item.id] = count;
        cart.push(element);
      }
      createHtml(item);
    });
    console.log(cart);
    totalContainer.innerHTML = `
    <div class="num-of-items">${cartItems.length} item(s)</div>
    <div class="total">Total: NOK ${total}</div>
    `;
  } else {
    console.log(cartItems);
    checkoutButton.style.display = "none";
    cartList.innerHTML = "No item added";
  }
}

function createHtml(item) {
  cartList.innerHTML += `
  <h3 class="product-name">${item.name}</h3>
  <div class="qty"></div>
  <div class="cart-item-wrap">
  <div style="background-image: url(${item.image})" class='cart-image'></div>
  <div class="order-details">
  <p class="price">NOK ${item.price}</p>
  <p>Color: ${item.color[0]}</p>
  <p>Size: ${item.size[0]}</p>
  <i class="fa-solid fa-trash" data-id="${item.id}" id="trash"></i>
  </div>
  </div>
`;
  removeFromCart();
}
