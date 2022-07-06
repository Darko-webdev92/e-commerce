import Card from "../components/Card.js";
import { getProducts } from "../api.js";

const HomeScreen = {
    render: async ()  =>{
      const products = await getProducts();
        return `
        <section style="background-color: #eee;">
        <div class="container py-5 mt-5">
          <h4 class="text-center mb-3 mt-4"><strong>Product categories</strong></h4>
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                <img src="./images/smartphones.jpg"
                  class="w-100" />
                <a href="#/smartphones">
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
                <a href="#/laptops">
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
  ${Card.render(product)}`: ""}
`).join("\n")}
<h3 class="mb-4 mt-3"> Laptops </h3>
${products.map(product =>
  `${product.category === 'laptops' ? `
  ${Card.render(product)}`: ""}`
  ).join("\n")}
</div>
</div>
`
    },
    after_render: async () =>{
      
    },
}

export default HomeScreen;