<script setup lang="ts">
import {getProdutos} from '~/services/produtos';
import { type Produto } from '~/models/produtos';
import { type Ref, ref } from 'vue';
import { onMounted } from 'vue';

const produtos: Ref<Array<Produto>> = ref([]);

const produtoTeste: Produto ={
    id: 1,
    nome: 'Produto Teste',
    preco: 30.50,
    quantidade: 50,
    categoriaFK: {
        id:1,
        nome: 'cadeira'
    },
    fotos:[
        "https://viainox.f1cdn.com.br/view/false/false/true/false/22707.jpg?MjI3MDct"
    ]
}

onMounted(()=>{
    getProdutos().then(pagination=>{ 
        console.log("Pagination", pagination)
        produtos.value = pagination?.results ?? [];
        console.log("produtos encontrados: ", produtos.value)
    })
})



</script>

<template>
    <main class="home-container flex flex-column align-items-center justify-content-center">
        <h1>Home</h1>
        <div class="produtos-container grid align-items-center justify-content-center">
            <ProdutoItem class="col-4" :produto="produtoTeste" />
            <ProdutoItem class="col-4" :produto="produtoTeste" />
            <ProdutoItem class="col-4" :produto="produtoTeste" />
            <ProdutoItem class="col-4" :produto="produtoTeste" />
            <ProdutoItem class="col-4" :produto="produtoTeste" />
            <ProdutoItem class="col-4" :produto="produtoTeste" />
            <ProdutoItem class="col-4" :produto="produtoTeste" />

        </div>
    </main>
</template>

<style scoped lang="scss">
.home-container{
    margin: 0;
    width: 100vw;
    background-color: rgb(241, 243, 229);
    min-height: calc(100vh - var(--altura-header));
    // min-width: 50vh;
    
}

</style>