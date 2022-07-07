import Search from '../components/Search.js'
const RegisterScreen = {
    render: async  () =>{
      window.scrollTo(0,0);
      Search();
       return `
       <section class="background-radial-gradient overflow-hidden mt-5 ">
       <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
       <div class="row gx-lg-5 align-items-center mb-5">
         <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
           <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
             The best offer <br />
             <span style="color: hsl(218, 81%, 75%)">for your business</span>
           </h1>
           <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Temporibus, expedita iusto veniam atque, magni tempora mollitia
             dolorum consequatur nulla, neque debitis eos reprehenderit quasi
             ab ipsum nisi dolorem modi. Quos?
           </p>
         </div>
   
         <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
           <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
           <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
   
           <div class="card bg-glass">
             <div class="card-body px-4 py-5 px-md-5">
               <form>
                 <!-- 2 column grid layout with text inputs for the first and last names -->
                 <div class="row">
                   <div class="col-md-6 mb-4">
                     <div class="form-outline">
                       <input type="text" id="form3Example1" class="form-control" />
                       <label class="form-label" for="form3Example1">First name</label>
                       <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div>
                     </div>
                   </div>
                   <div class="col-md-6 mb-4">
                     <div class="form-outline">
                       <input type="text" id="form3Example2" class="form-control" />
                       <label class="form-label" for="form3Example2">Last name</label>
                       <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div>
                     </div>
                   </div>
                 </div>
   
                 <!-- Email input -->
                 <div class="form-outline mb-4">
                   <input type="email" id="form3Example3" class="form-control" />
                   <label class="form-label" for="form3Example3">Email address</label>
                   <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div>
                 </div>
   
                 <!-- Password input -->
                 <div class="form-outline mb-4">
                   <input type="password" id="form3Example4" class="form-control" />
                   <label class="form-label" for="form3Example4">Password</label>
                   <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div>
                 </div>
   
                 <!-- Checkbox -->
                 <div class="form-check d-flex justify-content-center mb-4">
                   <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                   <label class="form-check-label" for="form2Example33">
                     Subscribe to our newsletter
                   </label>
                 </div>
   
                 <!-- Submit button -->
                 <button type="submit" class="btn btn-primary btn-block mb-4">
                   Sign up
                 </button>
   
                 <!-- Register buttons -->
                 <div class="text-center">
                   <p>or sign up with:</p>
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-facebook-f"></i>
                   </button>
   
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-google"></i>
                   </button>
   
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-twitter"></i>
                   </button>
   
                   <button type="button" class="btn btn-link btn-floating mx-1">
                     <i class="fab fa-github"></i>
                   </button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
     </div>
     </<section>
       `
    },
    after_render: async () =>{
      
    },
}
export default RegisterScreen;