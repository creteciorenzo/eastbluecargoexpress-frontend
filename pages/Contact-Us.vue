<template>
  <div>
    <div class="contact">
      <div class="parallax">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <h2 style="color: #fff">CONTACT US</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row">
          <div class="col-md-6 details">
            <h3>Our Contact Details</h3>
            <ul>
              <li>
                <p>
                  <i class="fa fa-map-marker-alt fa-1x"></i> 8133 Leo Bldg. II,
                  4th floor. Dr. A Santos Ave. San Dioniso, Parañaque City
                </p>
              </li>
              <li>
                <a
                  target=" _top"
                  href="mailto:customerservice@eastbluecargoexpress.ph"
                >
                  <i class="far fa-envelope fa-1x"></i>
                  customerservice@eastbluecargoexpress.ph</a
                >
              </li>
              <li>
                <a href="tel:028054612"
                  ><i class="fa fa-phone-alt fa-1x"></i> (02) 805-4612</a
                >
              </li>
              <li>
                <a href="tel:09171522622"
                  ><i class="fa fa-mobile-alt fa-1x"></i> 0917-152-2622</a
                >
              </li>
            </ul>
          </div>

          <div class="col-md-6">
            <iframe
              class="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394.4889006883895!2d120.99462964231058!3d14.484444408603219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bf706cf77aab4aa!2sLeo&#39;s%20Bldg.!5e0!3m2!1sen!2sph!4v1595147537038!5m2!1sen!2sph"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact - EastBlue Cargo Express',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'EAST BLUE CARGO EXPRESS is a product of dynamic and experienced professionals in the Logistics Industry with the aim of providing highly depenedable and cost offeicient services that will cater clients Domestic and International Services.',
      },
      { name: 'msapplication-TileColor', content: '#f1f1f1' },
      {
        name: 'msapplication-TileColor',
        content: 'favicons/ms-icon-144x144.png',
      },
    ],
  },
}
</script>

<style scoped>
.parallax {
  display: flex;
  align-items: center;
  /* background-image: linear-gradient(#2b3547b4, #2b3547b4), url("../../../assets/selective-focus-photo-of-green-telephone-955081.jpg"); */
  min-height: 200px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.details ul {
  list-style: none;
  padding: 0;
}

.details ul li {
  margin: 2rem 0;
}

.details ul li p {
  margin: 0;
}

.details a {
  color: #000000;
  text-decoration: none;
}

.details a:hover {
  color: #e96e56;
}

.details i {
  width: 20px;
  height: 20px;
  color: #717d80;
}
</style>
