<template>
  <div>
    <h1>Categorias Cadastradas</h1>
    <hr />
    <table border="1">
      <tr>
        <th>Nome</th>
        <th>Editar</th>
        <th>Excluir?</th>
      </tr>
      <tr v-for="c in categories" :key="c.id">
        <td>{{ c.name }}</td>
        <td>
          <router-link :to="{ name: 'pro-edit', params: { id: c.id } }"
            >Editar</router-link
          >
        </td>
        <td><button @click="destroy(c.id)">Excluir</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import env from "/env.json";
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";

const apiURL = env.apiURL;

const categories = ref([]);

const findAll = () => {
  axios
    .get(apiURL + "/category")
    .then((response) => {
      categories.value = response.data;
    })
    .catch((error) => {
      alert("Erro: " + error.response.status);
    });
};

const destroy = (id) => {
  if (confirm("Deseja excluir a categoria selecionada?")) {
    axios
      .delete(apiURL + "/category/" + id)
      .then((response) => {
        if (response.status === 200 && response.data == "") {
          alert("Dados Excluídos com sucesso!");
          findAll();
        }
      })
      .catch((error) => {
        alert("Erro: " + error.response.status);
      });
  }
};

onMounted(() => {
  //console.log("URL: " + url)
  findAll();
  console.log("data: " + categories.value);
});
</script>

<style lang="scss" scoped></style>
