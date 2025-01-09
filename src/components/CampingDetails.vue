<template>
    <div v-if="spot" class="camping-details">
      <h1>{{ spot.Name }}</h1>
      <div class="spot-content">
        <img :src="spot.Image" :alt="spot.Name" class="main-image" />
        <div class="spot-info">
          <p class="price">€{{ spot.Price }} per night</p>
          <div class="description">
            <h2>About this spot</h2>
            <p>{{ spot.Description }}</p>
          </div>
          <!-- Add more details as needed -->
        </div>
      </div>
    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </template>
  
  <script>
  export default {
    name: 'CampingDetails',
    data() {
      return {
        spot: null
      }
    },
    methods: {
  fetchSpotDetails() {
    const spotId = this.$route.params.id;
    console.log('Fetching spot with ID:', spotId); // Debug log

    fetch(`http://localhost:3000/api/campingspots/${spotId}`)
      .then(response => {
        console.log('Response status:', response.status); // Debug log
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data); // Debug log
        this.spot = data;
      })
      .catch(error => {
        console.error('Error fetching spot details:', error);
      });
  }
},
mounted() {
  console.log('Component mounted, route params:', this.$route.params); // Debug log
  this.fetchSpotDetails();
}
  }
  </script>

<style scoped>
.camping-details {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.spot-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.spot-info {
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
}

.price {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.description h2 {
  margin-bottom: 10px;
}

.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
}

@media (max-width: 768px) {
  .spot-content {
    grid-template-columns: 1fr;
  }
}
</style>