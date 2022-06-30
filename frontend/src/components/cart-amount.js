import { getCartItems } from "../localStorage.js";
let leng = getCartItems();
console.log(leng.length);
const cartAmount = document.getElementById('cart-amount');
cartAmount.textContent = leng.length;

export default cartAmount;