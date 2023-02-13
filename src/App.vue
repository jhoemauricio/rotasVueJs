<template>
  <div>
    <ul>
      <li>
        <!--Router link responsavel por redirecionar para rota-->
        <router-link to="/">Home</router-link><br>
        <router-link to="/sobre">Sobre</router-link>
      </li>
    </ul>
    <!-- <h1>Olá</h1> -->

    <!-- Router view é a visualização da rota pois é dinâmico e sempre vai renderizar a pagina que esta acessando -->
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App'
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
