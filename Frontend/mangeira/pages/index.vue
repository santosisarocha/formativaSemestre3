<script setup lang="ts">

// const {data: produtosFound} = await useFetch(`htt`)

import {getProdutos} from '~/services/produtos';
console.log("get")
getProdutos()
</script>

<template>
    <main class="home-container">
        <h1>deu cero </h1>

    </main>
</template>

<style scoped lang="scss">
.home-container{
    margin: 0;
    width: 100vw;
    min-height: calc(100vh - var(--altura-header));
    // min-width: 50vh;
    
}

</style>