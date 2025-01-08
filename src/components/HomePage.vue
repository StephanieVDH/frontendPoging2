<template>
    <div>
      <!-- Header Section -->
      <header class="header">
        <div class="container header-content">
          <img src="../assets/LogoBig.png" alt="Logo" class="logo" />
          <nav class="nav">
           <!-- <a href="../components/CampingSpots.vue">Explore Spots</a> -->
            <RouterLink to="/campingspots">Explore Spots</RouterLink>
            <a href="#">More Options</a>
            <button class="btn">Sign Up</button>
            <button class="btn login">Login</button>
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
          <img src="../assets/pics/pic4.jpg" alt="BLABLA" class="hero-image" />
          <br> <br>
          <button class="btn">Explore</button>
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
              <img src="../assets/pics/pic1.jpg" alt="View of a scenic forest and canyon at sunset from the back of a camper van, with two people in sleeping bags and a dog resting beside them." class="pic_small" />
              <h3>Simple Steps to Book Your Adventure</h3>
              <p>Once you’ve found a spot you love, booking is just a click away.</p>
            </div>
            <div class="feature">
              <img src="../assets/pics/pic2.jpg" alt="Cozy campsite in a forest featuring a blue and white tent, two camping chairs, and a fire pit surrounded by tall trees with sunlight filtering through the canopy." class="pic_small" />
              <h3>Customize Your Search for the Best Experience</h3>
              <p>
                Filter by price, amenities, and location type to tailor your
                experience.
              </p>
            </div>
            <div class="feature">
              <img src="../assets/pics/pic3.jpg" alt="Group camping scene with multiple tents set up in a grassy area surrounded by trees." class="pic_small" />
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
          <img src="/logo.png" alt="Logo" class="logo" />
          <nav class="footer-nav">
            <a href="#">Explore Camping</a>
            <a href="#">Join Us</a>
            <a href="#">Host a Spot</a>
            <a href="#">Get Help</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
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
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
  }
  .btn.login {
    background-color: #555;
  }
  
  /* Header Styles */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  .nav a {
    margin-right: 15px;
    text-decoration: none;
    color: #333;
  }
  
  /* Hero Section Styles */
  .hero {
    background-color: #f7f7f7;
    padding: 50px 0;
    text-align: center;
  }
  .hero-image {
    background: #ddd;
    height: 450px;
    margin-top: 20px;
  }
  
  /* Explore Section Styles */
  .explore {
    padding: 50px 0;
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
    background-color: #f7f7f7;
    padding: 20px 0;
    text-align: center;
  }
  .footer-nav a {
    margin-right: 15px;
    text-decoration: none;
    color: #333;
  }

  /*/ Pics */
  .pic_small {
  width: 100%; /* Ensure images fit their container */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Optional: Add rounded corners */
  object-fit: cover; /* Ensure images are cropped properly */
}
  </style>