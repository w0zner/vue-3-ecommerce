
<script setup lang="ts">
    import {onMounted, ref} from 'vue';
    const count = ref(0);

    function aumentar() {
        count.value += 1;
    }

    onMounted(function() {
        console.log("Hook")
    })
</script>

<template>
    <p> Soy la version composition API</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="aumentar" >Aumentar</button>
</template>