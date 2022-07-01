import Rating from "../components/rating.js";
const renderCard = (product) =>{
    return `
    <div class="col-md-3 mb-4">
    <div class="card">
    <div class="bg-image   hover-zoom ripple" data-mdb-ripple-color="light">
    <img  src="${product.thumbnail}"
    class="w-100 card-img-top"/>
    <a href="#!">
    <div class="mask">
    <div class="d-flex justify-content-start align-items-end h-100">
    <h5><span class="badge gradient-custom  ms-2">${product.discountPercentage}%</span></h5>
    </div>
    </div>
    <div class="hover-overlay">
    <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
    </div>
    </a>
    </div>
    <div class="card-body">
    <a href="" class="text-reset">
    <h5 class="card-title mb-3">${product.name}</h5>
    </a>
    <a href="" class="text-reset">
    <p>Category</p>
    </a>
    <h6 class="mb-3">
    <s>$${product.price}</s><strong class="ms-2 text-success">$${product.price - (product.price * (product.discountPercentage / 100)).toFixed()}</strong>
    </h6>
    <p class="text-muted mb-0">Available: <span class="fw-bold">${product.stock}</span></p>
    <div class="ms-auto text-warning my-2">
    ${Rating.render({value: product.rating, text: product.numReviews + ' reviews'})}
    </div>
    
    <a href="#/product/${product.id}" class="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark">Details</a>
    <a class="btn btn-outline-primary flex-fill ms-1">Add to Cart</a>
    </div>
    </div>
    </div>
    `
    }

const CategoryScreen = {
    render: async  () =>{
        const response = await fetch('http://localhost:3000/products',{
            headers: {
                'Content-type': 'application/json',
            }
        })
        if(!response || !response.ok){
            return '<div> Error in getting data </div>'
        }
        const products = await response.json();

        return `
<div class="container my-5">
<div class="row">
<h3 class="mb-4"> Smartphones </h3>
${products.filter(product => product.name.includes(localStorage.getItem('textValue'))).map(product =>
`${product.category === 'smartphones' ? `
${renderCard(product)}`: ""}
`).join("\n")}
<h3 class="mb-4 mt-3"> Laptops </h3>
${products.map(product =>
`${product.category === 'laptops' ? `
${renderCard(product)}`: ""}`
).join("\n")}
</div>
</div>
</ul>
        `
    }
}

export default CategoryScreen;