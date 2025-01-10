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

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <br> <p>Don't haven an account yet?</p>
    <div>
        <button type="button" @click="redirectToCreateAccount">Create account</button>
      </div>
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
  redirectToCreateAccount() {
      this.$router.push('/create-account'); // Assuming Vue Router is used
    },
  async login() {
  this.loading = true;
  this.errorMessage = '';
  try {
    console.log('Attempting login with:', { email: this.email }); // Debug log
    
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
      }),
    });

    const data = await response.json();
    console.log('Server response:', data); // Debug log

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    // Store user data in localStorage - using correct property names
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('userType', data.userType);
    
    // Success message
      alert('Login successful!');
      this.$router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      this.errorMessage = error.message;
      alert(this.errorMessage);
    } finally {
      this.loading = false;
    }
  }
}
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
  