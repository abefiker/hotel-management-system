<template>
    <HeaderPart />
    <h1>Hello {{ uname }} , Welcome to update Page</h1>
    <form class="update">
        <input type="hidden" v-model="Restaurant.id"> 
        <input type="text" v-model="Restaurant.name" placeholder="Enter Name of Restaurant">
        <input type="number" v-model="Restaurant.contact" placeholder="Enter contact ">
        <input type="text" v-model="Restaurant.address" placeholder="Enter Address">
        <button v-on:click="Update">Update Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import HeaderPart from './HeaderPart.vue';
export default {
    name: 'UpdateRes',
    data() {
        return {
            uname: '',
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
    methods: {
        async Update(){
            console.log('Making PUT request');
            const result = await axios.put('http://localhost:4000/restaurant/'+this.$route.params.id,{
                name : this.Restaurant.name,
                contact : this.Restaurant.contact,
                address : this.Restaurant.address,
           });
             console.log('result' , result);  
            if (result.status == 200) {
                  this.loadData();
                } else {
                    alert('Unexpected response status: ' + result.status);
                }
        },
        async loadData(){
        let user = localStorage.getItem('user_data');
        if (user) {
            user = JSON.parse(user);
            this.uname = user.name
        } else {
            console.error('User data not found in local storage');
        }

        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get('http://localhost:4000/restaurant/'+this.$route.params.id)
          this.Restaurant = result.data
        }
    },
    async mounted() {
        this.loadData();  
    }
}
</script>