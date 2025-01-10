<template>
  <div>
    <!-- Header Section -->
    <header class="header">
      <div class="container header-content">
        <img src="../assets/LogoBig.png" alt="Logo" class="logo" /> <br> <br>
        <nav class="nav">
          <router-link to="/ExploreSpots">Explore Spots</router-link>
          <router-link v-if="!userLoggedIn" to="/login" class="btn login">Log in</router-link>
          <div v-else class="profile-menu">
         <!--   <img src="../assets/user.png" alt="Profile" class="profile-icon" @click="navigateToProfile" /> -->
            <router-link to="/profile">
              <img src="../assets/user.png" alt="Profile" class="profile-icon" />
            </router-link>
          </div>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Discover Your Perfect Camping Getaway Today</h1>
        <p>
          Find and book unique camping spots tailored to your adventure needs.
          Whether you seek a serene forest escape or a beachside retreat, we
          have the perfect location waiting for you.
        </p>
        <img src="../assets/pics/pic4.jpg" alt="Camping" class="hero-image" />
        <br><br>
        <router-link to="/ExploreSpots" class="btn">Explore</router-link>
      </div>
    </section>

    <!-- Explore Section -->
    <section class="explore">
      <div class="container">
        <h2>Discover Your Perfect Camping Spot Today</h2>
        <p>
          Finding your ideal camping spot is easy. Use our search bar to enter
          your desired location and filter results based on your preferences.
        </p>
        <div class="features">
          <div class="feature">
            <img src="../assets/pics/pic1.jpg" alt="Scenic View" class="pic_small" />
            <h3>Simple Steps to Book Your Adventure</h3>
            <p>Once you’ve found a spot you love, booking is just a click away.</p>
          </div>
          <div class="feature">
            <img src="../assets/pics/pic2.jpg" alt="Cozy Campsite" class="pic_small" />
            <h3>Customize Your Search for the Best Experience</h3>
            <p>
              Filter by price, amenities, and location type to tailor your
              experience.
            </p>
          </div>
          <div class="feature">
            <img src="../assets/pics/pic3.jpg" alt="Group Camping" class="pic_small" />
            <h3>Read Reviews to Make Informed Choices</h3>
            <p>
              Check out user reviews to ensure your spot meets your
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <div class="container footer-content">
        <img src="../assets/LogoSmall.png" alt="Logo" class="logo" />
        <nav class="footer-nav">
          <router-link to="/ExploreSpots">Explore Spots</router-link>
          <a href="#">Join Us</a>
          <a href="#">Host a Spot</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      userLoggedIn: false,
      userType: null,
    };
  },
  created() {
    const userType = localStorage.getItem('userType');
    if (userType) {
      this.userLoggedIn = true;
      this.userType = userType;
    }
  },
};
</script>
  
  <style scoped>
  /* General Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
  }
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
  }
  .btn {
    background-color: #639f69;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
    text-decoration: none;
  }
  .btn.login {
    padding: 10px;
  }
  
  /* Header Styles */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    background-color: #04540c;
  }

  .nav {
  display: flex; /* Use flexbox to align items horizontally */
  justify-content: center;
  align-items: center; /* Vertically center the items */
  color:#ddd;
  gap: 20px;
  }

  .nav a {
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent (default text color) */
  }

  .nav a:hover {
    color: #639f69; /* Add a hover effect if desired */
  }

  .profile-menu {
    margin-right: 15px; /* Add spacing between items */
  }

  .profile-menu {
    display: flex; /* Ensure the profile menu behaves as a flex item */
    align-items: center;
  }

  .profile-icon {
    width: 30px; /* Adjust size if necessary */
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
  }
  
  /* Hero Section Styles */
  .hero {
    background-color: #f7f7f7;
    padding: 30px 0;
    text-align: center;
  }
  .hero-image {
    background: #ddd;
    height: 400px;
    margin-top: 10px;
  }
  
  /* Explore Section Styles */
  .explore {
    padding: 30px 0;
    text-align: center;
  }
  .features {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .feature {
    width: 30%;
  }
  .feature-image {
    background: #ddd;
    height: 150px;
    margin-bottom: 10px;
  }
  
  /* Footer Styles */
  .footer {
    background-color: #04540c;
    padding: 20px 0;
    text-align: center;
  }
  .footer-nav a {
    margin-right: 15px;
    text-decoration: none;
    color: #ddd;
  }

  /*/ Pics */
  .pic_small {
  width: 100%; /* Ensure images fit their container */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Optional: Add rounded corners */
  object-fit: cover; /* Ensure images are cropped properly */
}
  </style>