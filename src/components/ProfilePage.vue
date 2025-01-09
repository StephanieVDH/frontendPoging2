<template>
    <div class="profile-page">
      <h1>Your Profile</h1>
      <div v-if="userType === 'Host'">
        <h2>Owner Information</h2>
        <p>Name: {{ userInfo.name }}</p>
        <p>Email: {{ userInfo.email }}</p>
  
        <h3>Your Camping Spots</h3>
        <ul>
          <li v-for="spot in userInfo.campingSpots" :key="spot.id">
            {{ spot.name }} - {{ spot.location }}
          </li>
        </ul>
      </div>
  
      <div v-if="userType === 'Customer'">
        <h2>Customer Information</h2>
        <p>Name: {{ userInfo.name }}</p>
        <p>Email: {{ userInfo.email }}</p>
  
        <h3>Your Bookings</h3>
        <ul>
          <li v-for="booking in userInfo.bookings" :key="booking.id">
            {{ booking.spotName }} - {{ booking.date }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfilePage",
    data() {
      return {
        userType: null,
        userInfo: {},
      };
    },
    created() {
      this.userType = localStorage.getItem('userType');
  
      // Fetch user-specific data from the API
      fetch(`http://localhost:3000/api/profile/${this.userType}`)
        .then((response) => response.json())
        .then((data) => {
          this.userInfo = data;
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    },
  };
  </script>
  
  <style scoped>
  .profile-page {
    max-width: 600px;
    margin: 50px auto;
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  </style>