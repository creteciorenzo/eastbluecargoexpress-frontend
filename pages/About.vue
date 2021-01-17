<template>
  <div>
    <section id="about" class="about-company">
      <div class="parallax">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <h2 style="color: #fff">ABOUT US</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <img
              src="../assets/ece.png"
              alt="Eastblue Cargo Express"
              class="rounded"
              width="300"
              height="300"
            />
          </div>

          <div class="col-md-6 about-intro p-3">
            <p class="m-3">
              <strong>EAST BLUE CARGO EXPRESS</strong> is a product of dynamic
              and experienced professionals in the Logistics Industry with the
              aim of providing highly depenedable and cost offeicient services
              that will cater clients Domestic and International Services.
            </p>
            <p class="m-3">
              Started as a brokerage and trucking company Jmeg Transport and EBG
              Customs brokerage the management saw the push of Having its own
              NVOCC to furthermore cater the vast demands of logistics and
              freight services thus making sure of our client that we are
              commited to be the one stop logistics of their choice.
            </p>
          </div>
        </div>
      </div>

      <div class="about-content">
        <div class="background"></div>
        <div class="container">
          <div class="d-flex flex-column py-5">
            <div
              class="col-md-8 text-container align-self-end text-right mb-5 pt-3"
            >
              <h3 class="mr-5">Our Mission</h3>
              <p class="mr-4">
                To Provide quick and most convinient way of handling your
                cargoes all the way making sure that we provide excellent
                service and satisfaction on our client. Making sure the welfare
                of our employees with God as our guide.
              </p>
            </div>

            <div class="col-md-8 text-container left text-left mb-5 pt-3">
              <h3 class="ml-5">our vision</h3>
              <p class="ml-4">
                To be your partner that will deliver efficient and quality
                logistics services thus making East Blue Cargo Express your
                choiced provider.
              </p>
            </div>

            <div
              class="col-md-8 text-container align-self-end text-right mb-3 pt-3"
            >
              <h3 class="mr-5">our team</h3>
              <p class="mr-4">
                Team of young innovative and hardworking professionals who is
                capable of making solutions in any logsitics requirement and
                commited to delivered the cargo from Origin to Final Destination
                or Vice Versa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: 'About - EastBlue Cargo Express',
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
#about {
  margin: 0;
  padding: 0;
}

.parallax {
  display: flex;
  align-items: center;
  background-image: linear-gradient(#2b3547b4, #2b3547b4),
    url('../assets/assorted-color-cargo-containers-near-body-of-water-2091159.jpg');
  min-height: 200px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.about-content {
  position: relative;
}

.background::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url('../assets/jet-cloud-landing-aircraft-46148.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: block;
  align-items: center;
  opacity: 0.2;
}

.text-container {
  background: rgba(255, 255, 255, 0.493);
  border-radius: 60px 60px 0 60px;
  box-shadow: 0px 5px 20px 0px #bbbbbb;
}

.text-container.left {
  background: rgba(255, 255, 255, 0.493);
  border-radius: 60px 60px 60px 0;
  box-shadow: 0px 5px 20px 0px #bbbbbb;
}

.mission-vision {
  border-radius: 10px;
  background-color: #18a4e0;
}

@media only screen and (max-width: 30rem) {
  .about-header {
    height: 400px;
    width: 100%;
  }

  .about-company h1 {
    font-size: 7vw;
  }

  .about-text {
    text-align: center;
    font-size: 4vw;
  }

  .custom-size {
    font-size: 4vw;
  }
}
</style>
