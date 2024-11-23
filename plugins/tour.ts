import {TourGuideClient} from "@sjmc11/tourguidejs/src/Tour" 

export default defineNuxtPlugin((nuxtApp) => {
  const tour = new TourGuideClient({})
  
return {
    provide: {
      tour: tour,
    },
  };
});