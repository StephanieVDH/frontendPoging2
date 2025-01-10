<template>
  <div class="profile-page">
    <h1>{{ userInfo.name }}</h1>
    <nav class="navbar">
      <ul class="nav-links">
        <li><router-link to="/" @click.native="goHome">Home</router-link></li>
        <li><button @click="logout">Log Out</button></li>
      </ul>
    </nav>
    <!-- Profile page for Hosts-->
    <div v-if="userType === 'Host'">
      <h2>Your information</h2>
      <p>Email: {{ userInfo.email }}</p>
      <p>Phone number: {{ userInfo.phonenumber }}</p>
      <h3>Your Camping Spots</h3>
      <ul>
        <li v-for="spot in userInfo.campingSpots" :key="spot.id">
          {{ spot.name }} - {{ spot.location }}
        </li>
      </ul>
      <button class="add-spot-btn" @click="navigateToAddSpot">
        Add a New Camping Spot
      </button>
    </div>
    <!-- Profile page for Users-->
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
  methods: {
    logout() {
      localStorage.removeItem('userId');
      localStorage.removeItem('userType');
      alert('Logged out successfully!');
      // Force a navigation reload
      this.$router.push('/').catch(() => {
        window.location.href = '/';
      });
    },
    goHome() {
      this.$router.push('/').catch(() => {
        window.location.href = '/';
      });
    },
    navigateToAddSpot() {
      this.$router.push('/add-spot');
    }
  },
  data() {
    return {
      userType: null,
      userInfo: {
        name: '',
        email: '',
        phonenumber: '',
        campingSpots: [],
        bookings: []
      }
    };
  },
  created() {
    // Check if user is logged in
    this.userType = localStorage.getItem('userType');
    const userId = localStorage.getItem('userId');
    
    if (!this.userType || !userId) {
      this.$router.push('/');
      return;
    }

    // Fetch user-specific data from the API
    fetch(`http://localhost:3000/api/profile/${this.userType}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Add if using JWT
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        return response.json();
      })
      .then((data) => {
        this.userInfo = data;
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        // Handle error appropriately
        alert('Error loading profile data');
      });
  }
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

.navbar {
  background-color: #04540c;
  padding: 1rem;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  text-decoration: none;
  color: white;
}

.nav-links button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.nav-links button:hover,
.nav-links a:hover {
  text-decoration: underline;
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