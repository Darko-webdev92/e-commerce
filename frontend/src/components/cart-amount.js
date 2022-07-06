import { getCartItems } from "../localStorage.js";

let leng = getCartItems();
const cartAmount = document.getElementById('cart-amount');
cartAmount.textContent = leng.length;

export default cartAmount;