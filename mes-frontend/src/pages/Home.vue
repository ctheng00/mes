<template>
    <div id="home">

            <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
              <ol class="list-none p-0 inline-flex">
                <li class="flex items-center text-blue-500">
                  <a href="#" class="text-gray-700">Home</a>
                  <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                </li>
                <li class="flex items-center">
                  <a href="#" class="text-gray-600">Dashboard</a>
                </li>
              </ol>
            </nav>

            <div class="flex flex-wrap -mx-3 mb-20">

              <div class="w-1/2 xl:w-1/3 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
                    <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
                  </svg>

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">{{ this.metrics.status }}</p>
                    <p>Production Status</p>
                  </div>

                </div>
              </div>

              <div class="w-1/2 xl:w-1/3 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
                    <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
                  </svg>

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">{{ this.metrics.utilization }}</p>
                    <p>Machine utilization</p>
                  </div>
                </div>
              </div>

              <div class="w-1/2 xl:w-1/3 px-3">
                <div class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                  <svg class="w-16 h-16 fill-current mr-4 hidden lg:block" viewBox="0 0 20 20">
                    <path d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path>
                  </svg>

                  <div class="text-gray-700">
                    <p class="font-semibold text-3xl">{{ this.metrics.defects }}</p>
                    <p>Defect Rate</p>
                  </div>
                </div>
              </div>

              

            </div>

            <div class="flex flex-wrap -mx-3">

              <div class="w-full xl:w-1/2 px-3">
                <p class="text-xl font-semibold mb-4">Batch Completed</p>

                <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
                  <canvas id="buyers-chart" width="600" height="400"></canvas>
                </div>
              </div>

              <div class="w-full xl:w-1/2 px-3">
                <p class="text-xl font-semibold mb-4">Historical defect rates</p>

                <div class="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
                  <canvas id="reviews-chart" width="600" height="400"></canvas>
                </div>
              </div>

            </div>

    </div>
</template>

<script>
import axios from 'axios';
import { Chart } from 'chart.js';

export default {
  data() {
    return {
      metrics: {
        status: 'Running',
        utilization: '87%',
        defects: '0.5%'
      },
      buyersData: {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: 'Quantity',
            backgroundColor: 'rgba(99, 179, 237, 0.2)',
            borderColor: '#63b3ed',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#63b3ed',
            data: []
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      },
      reviewsData: {
        type: 'line',
        data: {
          labels: [],
          datasets: [{
            label: '%',
            backgroundColor: 'rgba(99, 179, 237, 0.2)',
            borderColor: '#63b3ed',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#63b3ed',
            data: []
          }]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      }
    };
  },
  methods: {
    async fetchData() {
      try {
        const buyersResponse = await axios.get('http://localhost:3000/dashboard/production-status');
        const reviewsResponse = await axios.get('http://localhost:3000/dashboard/product-defect-rates');

        this.buyersData.data.labels = buyersResponse.data.labels;
        this.buyersData.data.datasets[0].data = buyersResponse.data.data;

        this.reviewsData.data.labels = reviewsResponse.data.labels;
        this.reviewsData.data.datasets[0].data = reviewsResponse.data.data;

        this.renderCharts();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    renderCharts() {
      new Chart(document.getElementById('buyers-chart'), this.buyersData);
      new Chart(document.getElementById('reviews-chart'), this.reviewsData);
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>