import {getProduct} from "../api.js";
import { getCartItems, setCartItems } from "../localstorage.js";
import { parseRequestUrl, rerender } from "../utils.js";
import Search from '../components/Search.js'



const addToCart = (item,forceUpdate = false) =>{
    let cartItems = getCartItems();
    const existItems = cartItems.find(x => x.product === item.product);
    if(existItems){
      // ako postoi takov item, apdetejuvaj go, ne dodavaj nov
        cartItems = cartItems.map(x=> x.product === existItems.product ? item : x)
    }else{
        cartItems = [...cartItems, item]
        const cartAmount = document.getElementById('cart-amount');
        cartAmount.innerHTML = cartItems.length;
        windowsReaload();
        
    }

    setCartItems(cartItems);
}

function windowsReaload(){
  location.reload();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
 
  cartItem = cartItem.map((item) => {
    if (item.product === id) {
      if (action === "minus" && item.quantity > 1) {
        item.quantity--;
        rerender(CartScreen);
      } else if (action === "plus" && item.quantity < item.stock) {
        item.quantity++;

        rerender(CartScreen);
      }
    }

    return {
      ...item,
    };
  });

  setCartItems(cartItem);
  
}


// const removeFromCart = (id) =>{
//   setCartItems(getCartItems().filter(x => x.product !== id))
//   if(id === parseRequestUrl().id){
//     document.location.hash = '#/cart';
//   }else{
//     rerender(CartScreen);
//   }
// }



function removeItemFromCart(id) {
  setCartItems(getCartItems().filter(x => x.product !== id))
  // if(id === parseRequestUrl().id){
  //   // document.location.hash = '#/cart';
  //   // rerender(CartScreen);
  //   windowsReaload()
  // }else{

  //   windowsReaload();
  // }
  
  windowsReaload();
}

let cartItem = getCartItems();
let cartItem2 =  getCartItems();  
console.log(cartItem);
const CartScreen = {
    after_render: () =>{
    // const deleteBtns = document.getElementsByClassName('del-button');
    // Array.from(deleteBtns).forEach((deleteBtn) =>{
    //   deleteBtn.addEventListener('click', ()=>{
    //     removeFromCart(deleteBtn.id)
    //   })
    // })
    const btnsMinus = document.querySelectorAll('.minus');
    btnsMinus.forEach(btn =>{
      btn.addEventListener('click', function() {
        changeNumberOfUnits('minus', Number(btn.getAttribute('id').charAt(10)))
        console.log(btn);
        
      });
    })

    const plusBtns = document.querySelectorAll('.plus');
    plusBtns.forEach(btn =>{
      btn.addEventListener('click', function() {
        changeNumberOfUnits('plus', Number(btn.getAttribute('id').charAt(9)))
        
      });
    })

    const delBtns = document.querySelectorAll('.del-button');
    delBtns.forEach(btn =>{
      btn.addEventListener('click',function(){
        console.log(Number(btn.getAttribute('id').charAt(8)));
        removeItemFromCart(Number(btn.getAttribute('id').charAt(8)));
      })
    })
    },
    render: async () =>{
        const request = parseRequestUrl();
        window.scrollTo(0,0);
        window.location.href = '#/cart';
        Search();  
        if(request.id){
            const product = await getProduct(request.id);
            addToCart({
                product: product.id,
                name: product.name,
                price: product.price,
                image: product.thumbnail,
                description: product.description,
                stock: product.stock,
                quantity: 1
            })
        }
      
        const cartItem1 = JSON.parse(JSON.stringify( getCartItems()));
        console.log(cartItem1);
        return (
            `
            <section class="h-100 gradient-custom">
            <div class="container py-5">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-8">
                  <div class="card mb-4">
                    <div class="card-header py-3">
                      <h5 class="mb-0">Cart - ${cartItem1.length} items</h5>
                    </div>
                    <div class="card-body">
                    ${cartItem.length == 0 ? '<div class="row"> </div>' : cartItem1.map((item,index)=>`
                    <!-- Single item -->
                    <div class="row">
                      <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <!-- Image -->
                        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                          <img src="${item.image}"
                            class="w-100" alt="${item.name}" />
                          <a href="#/product/${item.product}">
                            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                          </a>
                        </div>
                        <!-- Image -->
                      </div>
        
                      <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <!-- Data -->
                        <p><strong><a href="#/product/${item.product}">${item.name} </a></strong></p>
                        <p>${item.description}</p>
                        <p>${item.stock}</p>
                        <button type="button" class="del-button btn btn-primary btn-sm me-1 mb-2 " id="del-btn-${item.product}" data-mdb-toggle="tooltip"
                          title="Remove item">
                          <i class="fas fa-trash"></i>
                        </button>
                        <!-- Data -->
                      </div>
      
                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <!-- Quantity -->
                        <div class="d-flex mb-4 ms-5" style="max-width: 300px">
                        <span class="btn btn-primary minus mx-4" id="btn-minus-${item.product}">-</span>
                        <span class="number py-2" id="number-${item.product}">${cartItem[index].quantity}</span>
                        <span class="btn btn-primary plus mx-4" id="btn-plus-${item.product}">+</span>           
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
                    `).join("\n")
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
                          <div>
                          <span><strong>
                          ${cartItem1.length > 0 ? cartItem.reduce((prev,current)=> prev + current.quantity, 0) : ""}
                          ${cartItem1.length > 2 ? `<span> items = </span>` : `<span> item </span>` } </span>
                          ${cartItem1.length > 0 ? cartItem.reduce((prev,current)=> prev + current.price * current.quantity, 0) + " $": ''}
                          </strong></span>
                          </div>
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
