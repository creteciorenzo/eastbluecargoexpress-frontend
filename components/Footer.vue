<template>
  <div>
    <footer id="footer" class="custom-footer">
      <div class="background">
        <div class="container py-5">
          <div class="row parent justify-content-center text-center">
            <div class="col-md-3 center left padding">
              <h5 class="text-color-dark">our location</h5>
              <p>
                8133 Leo Bldg. II, 4th floor. Dr. A Santos Ave. San Dioniso,
                Parañaque City
              </p>
            </div>
            <div class="col-md-3 center">
              <h5 class="text-color-dark">contact information</h5>
              <ul class="p-0">
                <li>
                  <a href="tel:028054612">(02) 805-4612</a>
                </li>
                <li><a href="tel:09171522622">0917-152-2622</a></li>
                <li>
                  <a
                    href="customerservice@eastbluecargoexpress.ph"
                    title="Email me"
                    target="_top"
                  >
                    customerservice@eastbluecargoexpress.ph
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 center policies">
              <h5 class="text-color-dark">links</h5>
              <ul class="p-0">
                <li><a>Home</a></li>
                <li><a>About us </a></li>
                <li><a>Services</a></li>
                <li><a>Contact Us</a></li>
              </ul>
            </div>
            <div class="col-md-3 center">
              <ul class="social-icons p-0">
                <h5 class="text-color-dark">connect with us</h5>
                <li class="facebook-icon">
                  <a href="#" target="_blank">
                    <i class="fab fa-facebook-square fa-2x"></i>
                  </a>
                </li>
                <li class="twitter-icon">
                  <a href="#" target="_blank">
                    <i class="fab fa-twitter-square fa-2x"></i>
                  </a>
                </li>
                <li class="instagram-icon">
                  <a href="#" target="_blank">
                    <i class="fab fa-instagram-square fa-2x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright m-0 py-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center pt-3">
              <p>
                &copy; {{ year }} Eastblue Cargo Express. All Rights Reserve
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      today: null,
      year: null,
    }
  },
  mounted() {
    this.today = new Date()
    this.year = this.today.getFullYear()
  },
}
</script>

<style scoped>
#footer {
  position: relative;
  padding: 0;
  font-size: 0.9em;
  color: #7b8597;
}

#footer h5 {
  color: #7b8597;
}

#footer a {
  color: #7b8597;
  font-family: 'Montserrat';
}

#footer li {
  font-family: 'Montserrat';
}

#footer a:hover {
  color: #e96e56;
}

.background {
  background: #252b35;
  display: flex;
  align-items: center;
}

.social-icons li {
  display: inline-block;
  margin-right: 8px;
}

li {
  list-style: none;
}

.footer-copyright {
  background: #253e6b;
  color: #fff;
}

@media only screen and (max-width: 30rem) {
  #footer h5 {
    font-size: 4.5vw;
  }

  #footer p,
  li,
  a {
    font-size: 4vw;
  }

  .parent {
    grid-template-columns: 1fr;
  }
}

@media only screen and (min-width: 30.0625rem) and (max-width: 48rem) {
  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .policies li {
    display: inline;
  }

  .policies li:nth-child(2) {
    margin-left: 1em;
  }
}

@media only screen and (max-width: 62rem) and (min-width: 48.0625rem) {
  #footer h5 {
    font-size: 2vw;
  }

  #footer p,
  li,
  a {
    font-size: 1.9vw;
  }

  .parent {
    justify-content: center;
  }
}
</style>
