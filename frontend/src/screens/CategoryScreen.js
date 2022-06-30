const CategoryScreen = {
    render: () => {
        return `
        <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-body">
                <!--Section: Contact v.2-->
        <section class="mb-4">
    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <!--Section description-->
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div class="row justify-content-md-center">
        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5 mx-md-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <!--Grid row-->
                <div class="row">
                    <!--Grid column-->
                    <div class="col-md-8 my-2">
                        <div class="md-form mb-0">
                        <label for="name" class="my-1">Your name</label>
                        <input type="text" id="name" name="name" class="form-control">
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-8 my-2">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                        <input type="text" id="email" name="email" class="form-control">
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-8 my-2">
                        <div class="md-form mb-0">
                        <label for="subject" class="">Subject</label>
                        <input type="text" id="subject" name="subject" class="form-control">
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-8 my-2">
                        <div class="md-form">
                        <label for="message">Your message</label>
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        </div>
                    </div>
                </div>
                <!--Grid row-->
                <div class="my-2">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            </form>

        </div>

    </div>

</section>
<!--Section: Contact v.2-->     
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 bg-primary">
                <div class="card-header py-3">
                  <h3 class="mb-0 text-center mt-4 text-white">Contact us</h3>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush list-unstyled text-white">
                <li>
                    <p class="text-white"><li><i class="mx-3 fas fa-map-marker-alt fa-2x"></i> San Francisco, CA 94126, USA</p>
                </li>
                <li>
                    <p><i class=" fas fa-phone mt-4 fa-2x mx-3"></i> + 01 234 567 89</p>
                </li>
                <p> <li><i class="fas fa-envelope fa-2x mx-3"></i> contact@mdbootstrap.com</p>
            </li>
            </ul>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
        `
    },
}

export default CategoryScreen;