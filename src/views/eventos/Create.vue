<template>
    <div>
        <h1>Cadastrar Novo Evento</h1>
        <input type="text" name="eventName" id="eventName" v-model="event.eventName"><br> <br>
        <input type="date" name="eventDate" id="eventDate" v-model="event.eventDate"><br> <br>
       <input type="text" name="address" id="address" v-model="event.address"><br><br>
       <input type="text" name="description" id="description" v-model="event.description"><br><br>        
       <select v-model="event.categories">
            <option>Escolha a categoria</option>
            <option v-for="c in categories" :value="c" :key="c.id">
                {{c.name}}
            </option>
        </select>      
      
        <button @click="save()">Salvar</button>
    </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import env from "/env.json"


    const apiURL = env.apiURL

    const event = reactive({
        event_name: "",
        event_date : "",
        address : "",
        description : "",
        categories:""
    });

    const categories= ref([]);



   const findAll = () => {
        axios
        .get(apiURL + "/category")
        .then((response) => {
            console.log("Response: " + JSON.stringify(response.data));
            categories.value = response.data;
        })
        .catch((error) => {
            alert("Error:" + error.response.data);
        });
    };
    

    const save = () => {
        axios.post(apiURL + "/event/v2", event)
        .then((response) => {
            if(response.status === 200){
                event.event_name = ""
                event.event_date = ""
                event.address = ""
                event.description = ""
                event.categories=""

                alert("Dados Cadastrados com sucesso!")                
            }
        }).catch( (error) => {
            alert("Erro: " + error.response.status)
        } )
    }

    onMounted( () => {
        findAll()
    } )
    
</script>

<style lang="scss" scoped>

</style>