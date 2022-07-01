import {getProduct} from "../api.js";
import { parseRequestUrl } from "../utils.js";

 function mainImage(product){
   return` <div class="main_image">
    <img src="${product.thumbnail}" id="main_product_image" width="350">
    </div>
    `
}
function changeImage(element){
    var main_prodcut_image = document.getElementById('main_product_image');

    main_prodcut_image.src = element.src;
}

const ProductScreen = {
     render: async  () =>{
        const request = parseRequestUrl();
        const product = await getProduct(request.id);
        window.scrollTo(0,0);
        return `
        <div class="container py-5 my-5">
        <div class="card">
        <div class="row g-0">
        <div class="col-md-6 border-end">
        <div class="d-flex flex-column justify-content-center">
            ${mainImage(product)}
        <div class="thumbnail_images">
            <ul id="thumbnail">
            ${product.images.map(image =>
                `
                <li><img onclick="" src="${image}" width="70"></li>
                `).join('\n')}
            </ul>
            </div>
            </div>
            </div>
            <div class="col-md-6">
            <div class="p-3 right-side">
            <div class="d-flex justify-content-between align-items-center">	<h3>${product.name}</h3>	<span class="heart"><i class='bx bx-heart'></i></span>
            </div>
            <div class="mt-2 pr-3">
            <p>${product.description}</p>
            </div>
            <h3 class="ms-2">$ ${product.price}</h3>
            <div class="ratings d-flex flex-row align-items-center">
            <div class="d-flex flex-row">
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bx-star' ></i>
            </div>
            <span>${product.numReviews} Reviews</span>
            </div>
            <div class="mt-5">
            <span class="fw-bold">Color</span>
            <div class="colors">
            <ul id="marker">
            <li id="marker-1"></li>	
            <li id="marker-2"></li>
            <li id="marker-3"></li>
            <li id="marker-4"></li>
            <li id="marker-5"></li>	</ul>
            </div>
            </div>
            <div class="buttons d-flex flex-row mt-5 gap-3">
            <button class="btn btn-outline-primary">Buy Now</button>
            <button  id="add-button" class="btn btn-primary">Add to Basket</button>	
            </div>
            <div class="search-option bg-primary">	<i class='bx bx-search-alt-2 first-search'></i>	
            <div class="inputs"><input type="text" name="" placeholder="Search">	
            </div> <i class='bx bx-share-alt share'></i>
            </div>
            </div>
            </div>
            </div>
            </div> 
            </div>
        `
    },
    after_render: async () =>{
        const request = parseRequestUrl();
        console.log(request);
    document.getElementById("add-button").addEventListener('click',()=>{
        document.location.hash = `#/cart/${request.id}`;
    })},
}

export default  ProductScreen;