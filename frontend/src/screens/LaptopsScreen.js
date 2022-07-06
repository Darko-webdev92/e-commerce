import { getProductByCategory } from "../api.js";
import Search from '../components/Search.js'
import Card from "../components/Card.js";

const SmartPhonesScreen = {
    render: async () =>{
        const products = await getProductByCategory('laptops');
        Search();
        return `
        <div class="container py-5 my-5">
        <div class="row">
    <h3 class="mb-4 mt-3 text-center"> Laptops </h3>
    ${products.map(product =>
      `${product.category === 'laptops' ? `
      ${Card.render(product)}`: ""}`
      ).join("\n")}
    </div>
    </div>
        `
    }

}
export default SmartPhonesScreen;