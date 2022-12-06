<script setup>
import Home from '@/views/Home.vue';
</script>

<template>
  <div>
    <h1>Front-End App</h1>
    <ul>
      <li> <router-link to="/">Início</router-link> </li>
      <li> Eventos
        <ul>
          <li> <router-link to="/categories">Listar Categorias</router-link> </li>
          <li> <router-link to="/categories/create">Cadastrar</router-link> </li>
          <li> <router-link to="/eventos">Listar Evento</router-link> </li>
          <li> <router-link to="/eventos/create">Cadastrar Evento</router-link> </li>
          
        </ul>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped>

</style>
