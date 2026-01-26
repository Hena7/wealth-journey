<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleSignup = () => {
  console.log('Name:', name.value)
  console.log('Email:', email.value)
  console.log('Password:', password.value)

  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
  }
}
</script>

<template>
  <div class="signup-container">
    <!-- The .prevent modifier stops the page from reloading when the form submits -->
    <form @submit.prevent="handleSignup" class="signup-card">
      <h1>Create account</h1>
      <p class="subtitle">Start tracking your financial future today.</p>
      <div class="input-group">
        <label>Full Name</label>
        <!-- v-model creates a "Two-Way Binding" -->
        <!-- Whatever the user types here instantly updates the 'fullName' variable above -->
        <input v-model="name" type="text" placeholder="John Doe" required />
      </div>
      <div class="input-group">
        <label>Email Address</label>
        <input v-model="email" type="email" placeholder="name@example.com" required />
      </div>
      <div class="input-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="••••••••" required />
        <span class="hint">Must be at least 8 characters long.</span>
      </div>
      <div class="input-group">
        <label>Confirm Password</label>
        <input v-model="confirmPassword" type="password" placeholder="••••••••" required />
      </div>
      <button type="submit" class="btn-primary">Create Account</button>
    </form>
  </div>
</template>
<style scoped>
/* 'scoped' means these styles won't leak out to other pages */
.signup-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0d1117; /* Dark background from your image */
  color: white;
  font-family: sans-serif;
}
.signup-card {
  background: #161b22;
  padding: 2.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #30363d;
}
h1 {
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  text-align: center;
}
.subtitle {
  color: #8b949e;
  text-align: center;
  margin-bottom: 2rem;
}
.input-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
}
input {
  background: #0d1117;
  border: 1px solid #30363d;
  color: white;
  padding: 0.75rem;
  border-radius: 6px;
  outline: none;
}
input:focus {
  border-color: #00f2fe; /* Cyan glow when clicking input */
}
.hint {
  font-size: 0.75rem;
  color: #8b949e;
  margin-top: 0.4rem;
}
.btn-primary {
  width: 100%;
  padding: 0.8rem;
  background-color: #00f2fe; /* The vibrant cyan from the image */
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-primary:hover {
  opacity: 0.9;
}
</style>
