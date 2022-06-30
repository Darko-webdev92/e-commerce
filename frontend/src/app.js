import CartScreen from "./screens/CartScreen.js";
import CategoryScreen from "./screens/CategoryScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import Error404Screen from "./screens/Error404Screen.js";
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/contact': ContactScreen,
    '/category/:category': CategoryScreen
    
}

const router =  async () =>{
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? `/:id` : '') + (request.verb ? `/${request.verb}` : '');
    console.log(request.resource);
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    console.log(screen);
    const main = document.getElementById("main-container");
    // main.innerHTML = HomeScreen.render()
    main.innerHTML = await screen.render();
    await screen.after_render();
    
}

window.addEventListener("load", router);
window.addEventListener('hashchange', router);