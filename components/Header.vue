<template>
  <div>
    <nav class="full-width nav-bar">
      <div id="head" class="header">
        <div class="header-container">
          <div class="company-logo">
            <img src="../assets/ece.png" alt="ECE" />
          </div>

          <div class="contact" style="color: #000000">
            <div class="first-row">
              <p>
                <i class="fa fa-map-marker-alt fa-1x"></i> 8133 Leo Bldg. II,
                4th floor. Dr. A Santos Ave. San Dioniso, Parañaque City
              </p>
            </div>

            <div class="second-row">
              <a
                target=" _top"
                href="mailto:customerservice@eastbluecargoexpress.ph"
              >
                <i class="far fa-envelope fa-1x"></i>
                customerservice@eastbluecargoexpress.ph</a
              ><br />
              <a href="tel:028054612"
                ><i class="fa fa-phone-alt fa-1x"></i> (02) 805-4612</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="menu">
        <div class="btn-wrapper">
          <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>

        <div class="backdrop"></div>

        <div class="btn-center">
          <div class="close-btn"><i class="fas fa-times"></i></div>
          <NuxtLink class="menu-btn" to="/">Home</NuxtLink>
          <NuxtLink class="menu-btn" to="/about">About us</NuxtLink>
          <NuxtLink class="menu-btn" to="/services">Services</NuxtLink>
          <NuxtLink class="menu-btn" to="/contact-us">Contact Us</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    this.burgerToggle()
    this.onScroll()
  },
  methods: {
    onScroll() {
      $(window).scroll(() => {
        const height = $('#head').height()
        if ($(window).scrollTop() > height) {
          $('.menu').addClass('fixed')
        } else {
          $('.menu').removeClass('fixed')
        }
      })
    },

    burgerToggle() {
      $('.hamburger').click(() => {
        $('.btn-center').toggleClass('active')
        $('.backdrop').toggleClass('backdrop-show')
      })

      $('.btn-center a').click(() => {
        $('.btn-center').toggleClass('active')
        $('.backdrop').toggleClass('backdrop-show')
      })

      $('.backdrop').click(() => {
        $('.btn-center').toggleClass('active')
        $('.backdrop').toggleClass('backdrop-show')
      })

      $('.close-btn').click(() => {
        $('.btn-center').toggleClass('active')
        $('.backdrop').toggleClass('backdrop-show')
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.nav-bar {
  position: relative;
  width: 100%;
  height: 200px;
}

.header {
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.hamburger {
  display: none;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background-color: #e6e6e6;
  margin: 3px;
}

.header-container {
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-container .company-logo img {
  width: 7em;
  height: 7em;
  border-radius: 50%;
}

.contact {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 15px;
}

.contact p {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 15px;
  margin: 0;
}

.contact a {
  color: #000000;
  text-decoration: none;
}

.contact a:hover {
  color: #e96e56;
}

.contact i {
  width: 20px;
  height: 20px;
  color: #717d80;
}

.menu {
  display: flex;
  justify-content: center;
  height: 70px;
  width: 100%;
  background: #253e6b;
}

.fixed {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
}

.menu .btn-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  height: 100%;
}

.menu .button-list {
  margin: 0;
  display: flex;
  width: 75%;
  justify-content: space-around;
  align-items: center;
}

.menu .btn-center .menu-btn {
  padding: 0.5rem;
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #faf8f0;
  text-decoration: none;
  text-transform: uppercase;
}

.menu .btn-center a:hover,
.menu .btn-center a.active {
  color: #18a4e0;
}

.close-btn {
  display: none;
}

.backdrop {
  display: none;
  animation: 0.4s ease-in-out fadeIn forwards;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100vh;
  z-index: 2;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
}

@media only screen and (max-width: 62rem) {
  .nav-bar {
    display: grid;
    height: 70px;
  }

  .header {
    display: none;
  }

  .menu {
    position: relative;
    display: block;
    top: 0;
  }

  .btn-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 2;
  }

  .hamburger {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    width: 25px;
    height: 100%;
    cursor: pointer;
    z-index: 2;
    right: 0;
  }

  .hamburger:hover div {
    transition: 0.5s;
    background-color: #00d8f7;
  }

  .btn-center {
    right: 0;
    top: 0;
    height: 100vh;
    width: 90%;
    background-color: #152238;
    transform: translateX(100%);
    transition: 0.3s ease-in-out;
    z-index: 2;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .close-btn {
    display: block;
    position: absolute;
    top: 24px;
    right: 0;
    margin-right: 50px;
    transform: translateX(100%);
    z-index: 3;
    font-size: 2em;
    color: #e6e6e6;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  .active {
    transform: translateX(0%);
  }

  .backdrop-show {
    transition: 0.3s ease-in-out;
    display: block;
  }
}
</style>
