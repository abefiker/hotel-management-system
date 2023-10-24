<template>
    <HeaderPart />
    <h1>Hello {{ name }}, Welcome to Home Page</h1>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurant" :key="item.id">
            
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td class="updat">
                    <router-link class="btn" :to="/update/+item.id">update</router-link>
                    <button v-on:click="DeleteData(item.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import HeaderPart from './HeaderPart.vue';
import axios from 'axios';

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurant : [],
        }
    },
    components: {
        HeaderPart,
    },
    methods: {
        async DeleteData(id){
            const result = await axios.delete('http://localhost:4000/restaurant/'+id)
            if ( result.status == 200){
                this.loadData();
            }
        },
        async loadData(){
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
        const result = await axios.get('http://localhost:4000/restaurant')
        console.log(result.data)
        this.restaurant = result.data
        }
    },
    async mounted() {
      this.loadData();
    }
}
</script>
<style scoped>
  table {
    margin-left: 210px;
    border-collapse: collapse;
    width: 70%;
    border: 1px solid #ddd; /* Add border for the table */

  }

  th, td {
    padding: 6px; /* Add some padding */
    text-align: left;
    border-bottom: 1px solid #ddd; /* Add border for each cell */
  }

  th {
    background-color: #f2f2f2; /* Add a background color for the header */
  }

  tr:hover {
    background-color: #f5f5f5; /* Change background color on hover */
  }

  /* Optional: Add some extra styling for specific columns */
  td:nth-child(2) { background-color: #f0f0f0; } 
  .updat {   
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  } 
  .updat button{
     border-radius: 5%;
        background-color: rgb(187, 90, 90);
        color: #ddd;
  }
  .btn {
        background-color: rgb(65, 156, 179);
        color: #ddd;
        text-decoration: none;
  }
</style>
