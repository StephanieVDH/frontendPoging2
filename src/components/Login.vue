<template>
    <div class="login-page">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            v-model="email"
            id="email"
            required
            placeholder="Enter your email"
          />
        </div>
  
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            required
            placeholder="Enter your password"
          />
        </div>
  
        <button type="submit" :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
  
      <!-- Display any login errors to the user -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
        loading: false,
      };
    },
    methods: {
      async login() {
        this.loading = true;
        this.errorMessage = '';
  
        try {
          const response = await fetch('YOUR_API_ENDPOINT/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });
  
          if (!response.ok) {
            // The request was made but the server responded with a status
            // code that falls outside the range of 2xx (e.g., 400 or 401)
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
          }
  
          // If the response is OK (status in the range of 2xx)
          const responseData = await response.json();
  
          // For example, if your API returns a token
          //const { token } = responseData;
  
          // Store token in local storage or wherever you like
          // localStorage.setItem('authToken', token);
  
          // Now that login is successful, you can navigate or do other actions
          // e.g. this.$router.push('/dashboard');
          console.log('Login successful:', responseData);
        } catch (error) {
          // Display an error message to the user
          this.errorMessage = error.message || 'Login failed';
          console.error('Login error:', error);
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: 50px auto;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 15px;
    cursor: pointer;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>
  