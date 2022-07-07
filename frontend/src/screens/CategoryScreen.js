import Search from '../components/Search.js'
import Card from "../components/Card.js";
import { getProducts } from "../api.js";
import { parseRequestUrl, rerender } from '../utils.js';

const CategoryScreen = {
    render: async  () =>{
        const products = await getProducts();
        return `
<div class="container my-5">
<div class="row">
<h3 class="mb-4 my-5"> Smartphones </h3>
${products.filter(product => product.name.toLowerCase().includes(localStorage.getItem('textValue').toLowerCase())).map(product =>
`${product.category === 'smartphones' ? `
${Card.render(product)}`: ""}`).join("\n")}

<h3 class="mb-4 mt-3"> Laptops </h3>
${products.filter(product => product.name.toLowerCase().includes(localStorage.getItem('textValue').toLowerCase())).map(product =>
`${product.category === 'laptops' ? `
${Card.render(product)}`: ""}`).join("\n")}

<h3 class="mb-4 mt-3"> Desktops </h3>
${products.filter(product => product.name.toLowerCase().includes(localStorage.getItem('textValue').toLowerCase())).map(product =>
`${product.category === 'desktops' ? `
${Card.render(product)}`: ""}`).join("\n")}
</div>
</div>
</ul>`
    },
    after_render: async () =>{
        const request = parseRequestUrl();
        console.log(request);
        if(request.resource === 'category'){
            const searchBtn = document.getElementById('search-btn');
            searchBtn.addEventListener('click',()=>{
                Search();
               rerender(CategoryScreen);
            })

        };
},
}

export default CategoryScreen;

