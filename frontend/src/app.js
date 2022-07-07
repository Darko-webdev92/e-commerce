import CartScreen from "./screens/CartScreen.js";
import CategoryScreen from "./screens/CategoryScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import DesktopsScreen from "./screens/DesktopsScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import LaptopsScreen from "./screens/LaptopsScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import SmartPhonesScreen from "./screens/SmartphonesScreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/contact': ContactScreen,  
    '/login': LoginScreen,
    '/register': RegisterScreen,
    '/category': CategoryScreen,
    '/smartphones': SmartPhonesScreen,
    '/laptops': LaptopsScreen,
    '/desktops': DesktopsScreen,
    '/order': OrderScreen

}

const router =  async () =>{
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? `/:id` : '') + (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const main = document.getElementById("main-container");
    // main.innerHTML = HomeScreen.render()
    main.innerHTML = await screen.render();
    await screen.after_render();
    
}

window.addEventListener("load", router);
window.addEventListener('hashchange', router);