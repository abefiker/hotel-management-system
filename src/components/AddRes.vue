<template>
    <HeaderPart />
    <h1>Hello {{ name }} , Welcome to Add Page</h1>
    <form class="add">
        <input type="text" v-model="Restaurant.name" placeholder="Enter Name of Restaurant">
        <input type="number" v-model="Restaurant.contact" placeholder="Enter contact ">
        <input type="text" v-model="Restaurant.address" placeholder="Enter Address">
        <button v-on:click="Add">Add Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import HeaderPart from './HeaderPart.vue';
export default {
    name: 'AddRes',
    data() {
        return {
            name: '',
            Restaurant : {
                name : '',
                contact : '',
                address : '',
            }
        }
    },
    components: {
        HeaderPart,
    },
    methods:{
        async Add(){
           const result = await axios.post('http://localhost:4000/restaurant',{
                name : this.Restaurant.name,
                contact : this.Restaurant.contact,
                address : this.Restaurant.address,
           })
            if (result.status == 201) {
                    this.$router.push({ path:'/' });
                } else {
                    alert('Unexpected response status: ' + result.status);
                }
              console.log('result' , result);  
        }
    },
    mounted() {
        let user = localStorage.getItem('user_data');
        if (user) {
            user = JSON.parse(user);
            this.name = user.name
        } else {
            console.error('User data not found in local storage');
        }
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
    }
}
</script>