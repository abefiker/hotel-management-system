<template>
    <img class="logo" src="../assets/Mandarin_Oriental_Hotel_Group-Logo.wine.png" alt="">
    <h1>Sign Up</h1>
    <div class="sign-up">
        <input type="text" v-model="name" id="name" placeholder="Enter Name">
        <input type="email" v-model="email" id="email" placeholder="Enter email">
        <input type="password" v-model="password" id="password" placeholder="Enter password">
        <button v-on:click="signup">Sign Up</button>
        <p>
            <router-link to="/sign-in">
                Sign In
            </router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async signup() {
            let newuser = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            try {
                const result = await axios.post('http://localhost:4000/users', newuser);
                console.log(result);
                if (result.status === 201) {
                    localStorage.setItem('user_data', JSON.stringify(result.data));
                    this.$router.push({ name: 'HomePage'});
                } else {
                    alert('Unexpected response status: ' + result.status);
                }
            } catch (error) {
                console.error('Error making the POST request:', error);
                alert('Error occurred during sign up');
            }

        }
    },
    mounted(){
        let user = localStorage.getItem('user_data');
        if(user){
            this.$router.push({ name: 'HomePage'})
        }
    }
}
</script>
