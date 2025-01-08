<template>
    <div class="camping-overview">
      <h1>Explore Spots</h1>
      <div class="camping-grid">
        <div v-for="spot in paginatedCampingspots" :key="spot.ID" class="camping-card">
          <img :src="spot.Image" :alt="spot.Name" class="camping-image" />

          <h2 class="camping-name">
          <router-link :to="{ name: 'CampingDetails', params: { id: spot.ID } }">
          {{ spot.Name }}
          </router-link>
          </h2>

          <p class="camping-price">€{{ spot.Price }} per night</p>
        </div>
      </div>
      <div class="pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  export default {
    name: "CampingSpots",
    data() {
      return {
        campingspots: [], // Holds all campingspot data
        currentPage: 1, // Current page for pagination
        spotsPerPage: 20, // Number of spots per page
      };
    },
    computed: {
      // Calculate the total number of pages
      totalPages() {
        return Math.ceil(this.campingspots.length / this.spotsPerPage);
      },
      // Get campingspots for the current page
      paginatedCampingspots() {
        const start = (this.currentPage - 1) * this.spotsPerPage;
        const end = start + this.spotsPerPage;
        return this.campingspots.slice(start, end);
      },
    },
    methods: {
      // Fetch campingspot data from the API
      fetchCampingspots() {
        fetch("http://localhost:3000/api/campingspots") // Update the endpoint to match your API
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse JSON from the response
          })
          .then((data) => {
            this.campingspots = data; // Assign the fetched data to the campingspots array
          })
          .catch((error) => {
            console.error("Error fetching campingspots:", error);
          });
      },
      // Change to a different page
      changePage(page) {
        this.currentPage = page;
      },
    },
    mounted() {
      this.fetchCampingspots(); // Fetch data when the component is mounted
    },
  };
  </script>
  
  <style scoped>
  .camping-overview {
    padding: 20px;
  }
  .camping-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .camping-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    padding: 10px;
  }
  .camping-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
  }
  .camping-name {
    margin: 10px 0;
    font-size: 18px;
    font-weight: bold;
  }
  .camping-price {
    color: #555;
    font-size: 16px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .pagination button {
    margin: 0 5px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #eee;
    cursor: pointer;
  }
  .pagination button.active {
    background-color: #007bff;
    color: #fff;
  }
  .pagination button:hover {
    background-color: #0056b3;
    color: #fff;
  }
  </style>