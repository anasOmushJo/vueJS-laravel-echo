import Vue from "vue";
import Echo from "laravel-echo";
require("pusher-js");

Vue.prototype.$echo = getEcho();
function getEcho() {
  return new Echo({
    broadcaster: "pusher",
    key: "your-key",
    cluster: "ap2",
    forceTLS: true,
    wsHost: "your-host-without-schema",
    authEndpoint: "your-auth-endpoint",
    auth: {
      headers: {
        Authorization: "Bearer Token",
      },
    },
  });
}
