import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      axios: () => axios.create({
        withCredentials: true,
        baseURL: "http://api-dev.beezlinq.com/api/v1",
      }),
    },
  };
});
