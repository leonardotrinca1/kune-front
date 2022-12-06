<template>
    <div>
        <h1>Editar Categoria</h1>
        <input type="text" name="name" id="name" v-model="category.name">
        <button @click="update">Salvar</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import env from "/env.json"
import { useRoute } from "vue-router";
import axios from "axios";

const apiURL = env.apiURL

const route = useRoute()

const category = ref({ id: null, name : "" })

const load = () => {
    let id = route.params.id
    axios.get(apiURL + "/category/" + id)
    .then((response) => {
        category.value.id = response.data.id;
        category.value.name = response.data.name;
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}

const update = () => {
    axios.put(apiURL + "/category", category.value)
    .then((response) => {
        if(response.data != ""){
            alert("Dados atualizados com sucesso!")
            load()
        }
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}

onMounted(() => {
    load();
})

</script>

<style lang="scss" scoped>

</style>