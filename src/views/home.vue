<template>
  <div>
    <div class="h-100 " style="overflow-x:hidden">
      <div class="row align-items-center h-100 text-center">
        <div class="col-xl-12 col-lg-12 col-md-12 px-5 mt-4" style="z-index: 2">
          <h1 class="text-white">Laravel Echo Sample</h1>
          <p class="text-lead text-white">
            By Anas Omush
          </p>
          <p class="text-lead text-white">
            You can check console also for history of events
          </p>
          <div style="display:flex; justify-content: center;">
            <div style="width:30%">
              <div id="order-updated-object" style="text-align:left">
                <p class="alert alert-success mt-4">Order Created</p>
                <pre class="text-white">{{
                  JSON.stringify(orderCreated, undefined, 2)
                }}</pre>
              </div>
              <div id="order-updated-object" style="text-align:left">
                <p class="alert alert-danger mt-4">Order Updated</p>
                <pre class="text-white">{{
                  JSON.stringify(orderUpdated, undefined, 2)
                }}</pre>
              </div>
              <div id="subscription-created-object" style="text-align:left">
                <p class="alert alert-secondary mt-4">Subscription Created</p>
                <pre class="text-white">{{
                  JSON.stringify(subscriptionCreated, undefined, 2)
                }}</pre>
              </div>
              <div id="subscription-updated-object" style="text-align:left">
                <p class="alert alert-primary mt-4">Subscription Updated</p>
                <pre class="text-white">{{
                  JSON.stringify(subscriptionUpdated, undefined, 2)
                }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      orderCreated: {},
      orderUpdated: {},
      subscriptionCreated: {},
      subscriptionUpdated: {}
    };
  },
  created: function() {
    const timer = 10000;
    this.$echo
      .private("Orders")
      .listen(".created", e => {
        console.log({ orderCreated: e });
        this.orderCreated = e;
        swal({
          icon: "success",
          text: `Order Created \n ${JSON.stringify(e, undefined, 2)}`,
          buttons: false,
          timer: timer
        });
      })
      .listen(".updated", e => {
        console.log({ orderUpdated: e });
        this.orderUpdated = e;
        swal({
          icon: "success",
          text: `Order Updated \n ${JSON.stringify(e, undefined, 2)}`,
          buttons: false,
          timer: timer
        });
      });

    this.$echo
      .private("Subscriptions")
      .listen(".created", e => {
        console.log({ subscriptionCreated: e });
        this.subscriptionCreated = e;
        swal({
          icon: "success",
          text: `Subscription Created \n ${JSON.stringify(e, undefined, 2)}`,
          buttons: false,
          timer: timer
        });
      })
      .listen(".updated", e => {
        console.log({ subscriptionUpdated: e });
        this.subscriptionUpdated = e;
        swal({
          icon: "success",
          text: `Subscription Updated \n ${JSON.stringify(e, undefined, 2)}`,
          buttons: false,
          timer: timer
        });
      });
  },
  methods: {}
};
</script>
