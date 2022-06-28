import getProduct from "../api.js";
import { parseRequestUrl } from "../utils.js";

 function mainImage(product){
    alert("this is this " + this);
   return` <div class="main_image">
    <img src="${product.thumbnail}" id="main_product_image" width="350">
    </div>
    `
}

function changeImage(element){
    var main_prodcut_image = document.getElementById('main_product_image');

    main_prodcut_image.src = element.src;
}

function imageOnClick(el){
    return`
    <li><img onclick="${changeImage(this)}" src="${image}" width="70"></li>
    `
}
const ProductScreen = {
     render: async  () =>{
        const request = parseRequestUrl();
        const product = await getProduct(request.id);
        console.log(product)
        console.log(product.images);
        // return `
        // <h1>${product.name}</h1>
        // <p>${product.price} </p>
        // <button id="add-button" class="btn btn-success"> Add to cart </button>
        // `

        return `
        <div class="container mt-5 mb-5">
        <div class="card">
        <div class="row g-0">
        <div class="col-md-6 border-end">
        <div class="d-flex flex-column justify-content-center">
            ${mainImage(product)}
        <div class="thumbnail_images">
            <ul id="thumbnail">
            ${product.images.map(image =>
                `
                <li><img onclick="alert(${this})" src="${image}" width="70"></li>
                `).join('\n')}
            </ul>
            </div>
            </div>
            </div>
            <div class="col-md-6">
            <div class="p-3 right-side">
            <div class="d-flex justify-content-between align-items-center">	<h3>IIlana</h3>	<span class="heart"><i class='bx bx-heart'></i></span>
            </div>
            <div class="mt-2 pr-3 content">
            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>	
            </div>
            <h3>$430.99</h3>
            <div class="ratings d-flex flex-row align-items-center">
            <div class="d-flex flex-row">
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bx-star' ></i>
            </div>
            <span>441 reviews</span>
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
            <button class="btn btn-outline-dark">Buy Now</button>
            <button  id="add-button" class="btn btn-dark">Add to Basket</button>	
            </div>
            <div class="search-option">	<i class='bx bx-search-alt-2 first-search'></i>	
            <div class="inputs">	<input type="text" name="">	
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