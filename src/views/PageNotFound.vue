<template>
  <div class="h-100 center-block">
    <div class="row align-items-center h-100 text-center">
      <div
        class="col-xl-12 col-lg-12 col-md-12 px-5 mx-auto"
        style="z-index: 2"
      >
        <div class="h-100 border-primary justify-content-center">
          <h2 class="text-lead text-white h-100">
            Page Not Found 404. Click
            <router-link :to="{ name: 'home' }" class="text-gray">{{
              "Here"
            }}</router-link>
            To go home page
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>
