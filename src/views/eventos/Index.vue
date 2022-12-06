<template>
  <div>
    <h1>Categorias Eventos</h1>
    <hr />
    <table border="1">
      <tr>
        <th>Nome</th>
        <th>Data</th>
        <th>endereço</th>
        <th>descrição</th>
        <th>codigo categoria</th>

       
        <th>Editar</th>
        <th>Excluir?</th>
      </tr>
      <tr v-for="e in event" :key="e.id">
        <td>{{ e.eventName }}</td>
        <td>{{ e.eventDate }}</td>
        <td>{{ e.address }}</td>
        <td>{{ e.description  }}</td>
        <td>{{ e.categories.name  }}</td>
        <td>
          <router-link :to="{ name: 'pro-edit2', params: { id: e.id } }"
            >Editar</router-link
          >
        </td>
        <td><button @click="destroy(e.id)">Excluir</button></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import env from "/env.json";
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";

const apiURL = env.apiURL;

const event = ref([]);

const findAll = () => {
  axios
    .get(apiURL + "/event/v2")
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      alert("Erro: " + error.response.status);
    });
};

const destroy = (id) => {
  if (confirm("Deseja excluir a categoria selecionada?")) {
    axios
      .delete(apiURL + "/event/v2/" + id)
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
  console.log("data: " + event.value);
});
</script>

<style lang="scss" scoped></style>
