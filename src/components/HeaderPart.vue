<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restuarant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default {
    name: "HeaderPart",
    methods: {
        logout(){
            localStorage.clear()
            this.$router.push({name:'LogIn'})
        }
    }
}
</script>
<style  scoped>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background-color: #ddd;
    color: #333;
}

</style>