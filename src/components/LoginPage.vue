<template>
    <img class="logo" src="../assets/Mandarin_Oriental_Hotel_Group-Logo.wine.png" alt="">
    <h1>Log In</h1>
    <div class="sign-in">
        <input type="email" v-model="email" id="email" placeholder="Enter email">
        <input type="password" v-model="password" id="password" placeholder="Enter password">
        <button v-on:click="signin">Sing In</button>
        <p>
            <router-link to="/sign-up">
                Sign Up
            </router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {

        async signin() {
            try {
                const result = await axios.get(`http://localhost:4000/users?email=${this.email}&password=${this.password}`);
                console.log(result);
                if (result.status === 200 && result.data.length > 0) {
                    localStorage.setItem('user_data', JSON.stringify(result.data[0]));
                    this.$router.push({ name: 'HomePage' });
                } else {
                    alert('Unexpected response status: ' + result.status);
                }
            } catch (error) {
                console.error('Error making the GET request:', error);
                alert('Error occurred during sign in');
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user_data');
        if (user) {
            this.$router.push({ name: 'HomePage' })
        }
    }
}
</script>
