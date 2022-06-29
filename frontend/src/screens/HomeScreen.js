import Rating from "../components/rating.js";

const renderCard = (product) =>{
return `
<div class="col-md-3 mb-4">
<div class="card">
<div class="bg-image  hover-zoom ripple" data-mdb-ripple-color="light">
<img src="${product.thumbnail}"
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

<a class="btn btn-danger flex-fill ms-1">Add to Cart</a>
</div>

</div>
</div>
`
}

let temp = 1;
const HomeScreen = {
    render: async ()  =>{
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
        <section style="background-color: #eee;">
        <div class="container py-5">
          <h4 class="text-center mb-3 mt-4"><strong>Product categories</strong></h4>
      
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="./images/smartphones.jpg"
                  class="w-100" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                    <div class="d-flex flex-column-reverse h-100">
                      <h5 class="mb-3"><span class="text-white pt-2 ms-3 mt-3">Smartphones</span></h5>
                    </div>
                  </div>
                  <div class="hover-overlay">
                    <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                  </div>
           
                </a>
         
              </div>
            </div>
      
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="./images/laptops.webp"
                  class="w-100" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                    <div class="d-flex flex-column-reverse h-100">
                      <h5 class="mb-3"><span class="text-white pt-2 ms-3 mt-3">Laptops</span></h5>
                    </div>
                  </div>
                  <div class="hover-overlay">
                    <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                  </div>
                </a>
              </div>
            </div>
      
            <div class="col-lg-4 col-md-12 mb-4">
            <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
              <img src="./images/computers.webp"
                class="w-100" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                  <div class="d-flex flex-column-reverse h-100">
                    <h5 class="mb-3"><span class="text-white pt-2 ms-3 mt-3">Desktop Computers</span></h5>
                  </div>
                </div>
                <div class="hover-overlay">
                  <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="container my-5">
    <div class="row">
    <h3 class="mb-4"> Smartphones </h3>
   ${products.map(product =>
  `${product.category === 'smartphones' ? `
  ${renderCard(product)}`: ""}
`).join("\n")}
<h3 class="mb-4"> Smartphones </h3>
${products.map(product =>
  `${product.category === 'laptops' ? `
  ${renderCard(product)}`: ""}`
  ).join("\n")}
</div>
</div>
</ul>`
    }
}

export default HomeScreen;