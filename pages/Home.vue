<template>
  <div>
    <div id="home" class="showcase">
      <div class="container">
        <div class="row" align="center">
          <div class="home-content">
            <div class="col-md-12 title">
              <div class="business-name pt-5">
                <h1>Eastblue Cargo Express</h1>
              </div>
            </div>

            <div class="col-md-6 text">
              <div class="intro">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi fugit odio laborum reiciendis quisquam quibusdam
                  assumenda perspiciatis fuga, velit debitis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body-content py-5">
      <div class="container">
        <div class="row justify-content-around text-center py-5">
          <div class="col-md-12">
            <h2>What we offer</h2>
          </div>
          <div class="col-md-3">
            <img
              src="../assets/service1.jpg"
              alt="Service-1"
              class="img-thumbnail"
            />
            <h6>International/Domestic Freight Forwarding</h6>
          </div>
          <div class="col-md-3">
            <img
              src="../assets/service2.jpeg"
              alt="Service-2"
              class="img-thumbnail"
            />
            <h6>Customs Brokerage</h6>
          </div>
          <div class="col-md-3">
            <img
              src="../assets/service4.jpg"
              alt="Service-3"
              class="img-thumbnail"
            />
            <h6>Trucking Service</h6>
          </div>
          <div class="col-md-4">
            <router-link to="/services"
              ><a type="button" class="btn btn-outline-primary">
                More Services<span class="badge"
                  ><i class="fa fa-arrow-right"></i
                ></span> </a
            ></router-link>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row justify-content-around py-5">
          <div class="col-md-12 text-center">
            <h2>About</h2>
          </div>
          <div class="col-md-12">
            <p>
              EAST BLUE CARGO EXPRESS is a product of dynamic and experienced
              professionals in the Logistics Industry with the aim of providing
              highly depenedable and cost offeicient services that will cater
              clients Domestic and International Services.
            </p>

            <p>
              Started as a brokearge and trucking company Jmeg Transport and EBG
              Customs brokerage the management saw the push of Having its own
              NVOCC to furthermore cater the vast demands of logistics and
              freight services thus making sure of our client that we are
              commited to be the one stop logistics of their choice.
            </p>
          </div>
          <div class="col-md-3 text-center">
            <router-link to="/about"
              ><a type="button" class="btn btn-outline-primary">
                Learn More<span class="badge"
                  ><i class="fa fa-arrow-right"></i
                ></span> </a
            ></router-link>
          </div>
        </div>
        <hr class="featurette-divider" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#home {
  margin: 0;
  color: #faf8f0;
  height: calc(100vh - 200px);
  width: 100%;
  background-image: linear-gradient(#2b3547b4, #2b3547b4),
    url('../assets/homepage.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* .showcase::after {
  content: '';
  height: 80vh;
  width: 100%;
  background-image:
    linear-gradient(#253e6bb4, #253e6bb4),
    url("../../../assets/homepage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  transition: all 500ms;
} */

.home-content {
  z-index: 1;
  left: 0;
  right: 0;
  padding-top: 7em;
}

.home-content .title {
  animation-delay: 2.5s;
  /* transform: translateX(-100rem); */
  /* animation: slideIn 3s forwards; */
}

.home-content .text {
  animation-delay: 3s;
  /* transform: translateX(100rem); */
  /* animation: slideIn 3s forwards; */
}

.btn:hover {
  color: #faf8f0;
}

@keyframes slideIn {
  from {
  }

  to {
    transform: translateY(0);
  }
}

@media only screen and (max-width: 62rem) {
  #home {
    height: calc(100vh - 70px);
  }
}

@media only screen and (max-width: 30rem) {
  .home-content {
    width: 100%;
  }

  .home-logo img {
    width: 50vw;
    height: 50vw;
  }

  .business-name h1 {
    font-size: 10vw;
    font-size: 1.5rem;
  }
}
</style>
