<template>
    <div>
        <h1>Editar Evento</h1>
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

const event = ref({ id: null, event_name : "", event_date :"", address :"", description:"", categories:""  })

const load = () => {
    let id = route.params.id
    axios.get(apiURL + "/event/v2/" + id)
    .then((response) => {
        event.value.id = response.data.id;
        event.value.event_name = response.data.event_name;
        event.value.event_date = response.data.event_date;
        event.value.address = response.data.address;
        event.value.description = response.data.description;
        event.value.categories = response.data.categories;
  
    }).catch((error) => {
        alert("Erro: " + error.response.status)
    })
}
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

const update = () => {
    axios.put(apiURL + "/event/v2/edit", event.value)
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
    findAll();
})

</script>

<style lang="scss" scoped>

</style>