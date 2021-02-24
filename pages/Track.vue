<template>
  <div>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div class="d-md-flex flex-column">
            <h2>EASTBLUE TRACK & TRACE</h2>
            <input
              id="trackingNumber"
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter your tracking number"
            />
            <button
              id="trackBtn"
              type="button"
              class="btn btn-lg btn-primary my-2 bg-primary"
            >
              Track
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#trackingNumber:focus {
  box-shadow: 0 0 0 0.2rem rgb(31 76 160 / 25%);
}
#trackBtn:hover {
  background: #253e6b !important;
}
</style>
