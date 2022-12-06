<template>
    <div>
        <h1>Cadastrar Nova Categoria</h1>
        <input type="text" name="name" id="name" v-model="category.name">
        <button @click="save()">Salvar</button>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import axios from "axios";
import env from "/env.json"


    const apiURL = env.apiURL

    const category = reactive({
        name: ""
    })

    const save = () => {
        axios.post(apiURL + "/category", category)
        .then((response) => {
            if(response.status === 200){
                category.name = ""
                alert("Dados Cadastrados com sucesso!")                
            }
        }).catch( (error) => {
            alert("Erro: " + error.response.status)
        } )
    }

</script>

<style lang="scss" scoped>

</style>