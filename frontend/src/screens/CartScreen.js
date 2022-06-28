import getProduct from "../api.js";
import { getCartItems, setCartItems } from "../localstorage.js";
import { parseRequestUrl } from "../utils.js";

const addToCart = (item,forceUpdate = false) =>{
    let cartItems = getCartItems();
    const existItems = cartItems.find(x => x.product === item.product);
    if(existItems){
      // ako postoi takov item, apdetejuvaj go, ne dodavaj nov
        cartItems = cartItems.map(x=> x.product === existItems.product ? item : x)
    }else{
        cartItems = [...cartItems, item]
    }

    setCartItems(cartItems);
}

const CartScreen = {
    after_render: () =>{

    },
    render: async () =>{
        const request = parseRequestUrl();
        if(request.id){
            const product = await getProduct(request.id);
            addToCart({
                product: product.id,
                name: product.name,
                price: product.price,
                image: product.thumbnail,
                description: product.description
            })
        }
        // return (
        //     `<div> Cart Screen </div>
        //     <div>${getCartItems().length}</div>
        //     `
            
        // )

        const cartItem = getCartItems();
        // return (
        //     `<div class="cart"> Cart Screen </div>
        //         <div class="cart-list">
        //         <ul> 
        //         <li> <h3> Shopping cart </h3> <div> Price </div> </li>
        //         ${cartItem.length === 0 ? '<div> Cart is empty. </div>' : cartItem.map(item => `
        //         <li> <div> ${item.name} </div>
        //         <div> ${item.price} </div> </li>
        //         `) }
        //         </ul>
        //         </div>
        //     `
            
        // )

        return (
            `
            <section class="h-100 gradient-custom">
            <div class="container py-5">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-8">
                  <div class="card mb-4">
                    <div class="card-header py-3">
                      <h5 class="mb-0">Cart - 2 items</h5>
                    </div>
                    <div class="card-body">
                    ${cartItem.length == 0 ? '<div class="row"> </div>' : cartItem.map(item=>`
                    <!-- Single item -->
                    <div class="row">
                      <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <!-- Image -->
                        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img src="${item.image}"
                            class="w-100" alt="${item.name}" />
                          <a href="#!">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                          </a>
                        </div>
                        <!-- Image -->
                      </div>
        
                      <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <!-- Data -->
                        <p><strong>${item.name}</strong></p>
                        <p>${item.description}</p>
                        <button type="button" class="btn btn-primary btn-sm me-1 mb-2" id="${item.product}" data-mdb-toggle="tooltip"
                          title="Remove item">
                          <i class="fas fa-trash"></i>
                        </button>
                        <!-- Data -->
                      </div>
        
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <!-- Quantity -->
                        <div class="d-flex mb-4" style="max-width: 300px">
                          <button class="btn btn-primary px-3 me-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="fas fa-minus"></i>
                          </button>
        
                          <div class="form-outline">
                            <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                            <label class="form-label mx-3" for="form1">Quantity</label>
                          </div>
        
                          <button class="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <!-- Quantity -->
        
                        <!-- Price -->
                        <p class="text-start text-md-center">
                          <strong>${item.price}</strong>
                        </p>
                        <!-- Price -->
                      </div>
                    </div>
                    <!-- Single item -->
        
                    <hr class="my-4" />
        
                    <!-- Single item -->
                    `)
}
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <p><strong>Expected shipping delivery</strong></p>
                      <p class="mb-0">12.10.2020 - 14.10.2020</p>
                    </div>
                  </div>
                  <div class="card mb-4 mb-lg-0">
                    <div class="card-body">
                      <p><strong>We accept</strong></p>
                      <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa" />
                      <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express" />
                      <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard" />
                      <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                        alt="PayPal acceptance mark" />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4">
                    <div class="card-header py-3">
                      <h5 class="mb-0">Summary</h5>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li
                          class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                          <div>
                            <strong>Total amount</strong>
      
                          </div>
                          <span><strong>$53.98</strong></span>
                        </li>
                      </ul>
          
                      <button type="button" class="btn btn-primary btn-lg btn-block">
                        Go to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            `
        )
    }
}

export default CartScreen;