<script lang="ts">
    export default {
        data() {
            return { count: 0 }
        },
        methods: {
            increase() {
                this.count += 1;
            }
        },
        mounted() {
            console.log("El valor inicial del contador es " + this.count)
        }
    }
</script>

<template>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Aumentar</button>

    <p v-if="count<=10">Vamos tu puedes!</p>
    <p v-else>Lo lograste!</p>
</template>