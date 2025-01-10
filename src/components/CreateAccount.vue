<template>
    <div class="create-account-page">
      <h1>Create an Account</h1>
      <form @submit.prevent="createAccount">
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="form.username"
            required
            placeholder="Enter your username"
          />
        </div>
  
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label for="phonenumber">Phone number</label>
          <input
            type="phonenumber"
            id="phonenumber"
            v-model="form.phonenumber"
            required
            placeholder="Enter your phone number"
          />
        </div>
  
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            placeholder="Enter your password"
          />
        </div>
  
        <div>
          <label for="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            v-model="form.dateOfBirth"
            required
          />
        </div>
  
        <div>
          <label for="userType">I am a</label>
          <select id="userType" v-model="form.userType">
            <option value="Customer">Guest</option>
            <option value="Host">Host</option>
          </select>
        </div>
  
        <button type="submit">Create Account</button>
      </form>
  
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">Account created successfully!</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          email: '',
          phonenumber: '',
          password: '',
          dateOfBirth: '',
          userType: 'Customer',
        },
        error: null,
        success: false,
      };
    },
    methods: {
      async createAccount() {
        try {
          this.error = null;
          this.success = false;
          const response = await fetch('http://localhost:3000/api/create-account', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.form),
          });
  
          const data = await response.json();
          if (response.ok && data.success) {
            this.success = true;
            this.form = {
              username: '',
              email: '',
              phonenumber: '',
              password: '',
              dateOfBirth: '',
              userType: 'Customer',
            };
          } else {
            this.error = data.message || 'An error occurred.';
          }
        } catch (err) {
          this.error = 'An error occurred while trying to create the account.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .create-account-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  form div {
    margin-bottom: 1em;
  }
  
  label {
    margin-bottom: 0.5em;
    font-weight: bold;
  }
  
  input,
  select,
  button {
    padding: 0.5em;
    font-size: 1em;
  }
  
  .error {
    color: red;
  }
  
  .success {
    color: green;
  }
  </style>
  
  