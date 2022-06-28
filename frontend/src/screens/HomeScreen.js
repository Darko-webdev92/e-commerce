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
              <div class="col-md-3 mb-4">
<div class="card">
  <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
      class="w-100" />
    <a href="#!">
      <div class="mask">
        <div class="d-flex justify-content-start align-items-end h-100">
          <h5><span class="badge bg-danger ms-2">-10%</span></h5>
        </div>
      </div>
      <div class="hover-overlay">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
      </div>
    </a>
  </div>
  <div class="card-body">
    <a href="" class="text-reset">
      <h5 class="card-title mb-3">Product name</h5>
    </a>
    <a href="" class="text-reset">
      <p>Category</p>
    </a>
    <h6 class="mb-3">
      <s>$61.99</s><strong class="ms-2 text-danger">$50.99</strong>
    </h6>
    <p class="text-muted mb-0">Available: <span class="fw-bold">7</span></p>
    <div class="ms-auto text-warning my-2">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
  </div>
  
  <a href="#/product/${product.id}" class="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark">Details</a>
  
  <a class="btn btn-danger flex-fill ms-1">Add to Cart</a>
  </div>
  
</div>
</div>
`
               : ""}


`
                ).join("\n")}
       
                </div>
                </div>
                </ul>`
    }
}

export default HomeScreen;