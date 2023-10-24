<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0;
}
.sign-up input , .sign-in input  , .add input ,.update input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid goldenrod;
}

.sign-up button , .sign-in button , .add button , .update button {
    width: 320px;
    height: 40px;
    color: #fff;
    border: 1px solid goldenrod;
    background-color: goldenrod;
    cursor: pointer;
}

.logo {
    width: 150px;
}

</style>
