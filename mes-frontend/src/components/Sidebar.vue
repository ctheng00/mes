<template>
  <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
    :class="sideBarOpen ? '' : 'hidden'" id="main-nav">

    <div class="w-full h-20 border-b flex px-4 items-center mb-8">
      <p class="font-semibold text-3xl text-blue-400 pl-4">MES</p>
    </div>

    <div class="mb-4 px-4">
      <p class="pl-4 text-sm font-semibold mb-1">MAIN</p>
      <div
        :class="'w-full flex items-center text-blue-400 h-10 pl-4' + (isActiveRoute('/dashboard/home') ? ' bg-gray-200' : '') + ' hover:bg-gray-200 rounded-lg cursor-pointer'">
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z">
          </path>
        </svg>
        <a href="/" class="text-gray-700">Dashboard</a>
      </div>
      <div
        :class="'w-full flex items-center text-blue-400 h-10 pl-4' + (isActiveRoute('/production') ? ' bg-gray-200' : '') + ' hover:bg-gray-200 rounded-lg cursor-pointer'">
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z">
          </path>
        </svg>
        <a href="/production" class="text-gray-700">Production Tracking</a>
      </div>
      <div
        :class="'w-full flex items-center text-blue-400 h-10 pl-4' + (isActiveRoute('/quality-control') ? ' bg-gray-200' : '') + ' hover:bg-gray-200 rounded-lg cursor-pointer'">
        <svg class="h-6 w-6 fill-current mr-2" viewBox="0 0 20 20">
          <path
            d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z">
          </path>
        </svg>
        <a class="text-gray-700">Quality Control</a>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  props: {
    sideBarOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isActiveRoute(route) {
      console.log(this.$route.path);
      return this.$route.path === route;
    }
  }
}
</script>