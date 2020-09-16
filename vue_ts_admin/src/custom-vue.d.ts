import Vue from 'vue'
import { AxiosInstance } from 'axios';
declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance
  }
}

// declare module 'vue/types/vue' {
//   interface Vue {
//       [key: string]: any,
//   }
// }

declare module 'vue-ele-form' {}