<script setup lang="ts">
import { type Produto } from '~/models/produtos';
type propType = {
    produto: Produto;
}

const props = defineProps<propType>();
console.log("produto recebido", props.produto);

</script>

<template>
    <div>
        <section class="cartao flex flex-column align-items-center justify-content-center"
        v-if="props.produto"
        >
            <div class="produto-imagem">
                <img :src="props.produto.fotos[0]">
            </div>
            <div>
                <h4>{{ props.produto.nome }}</h4>
            </div>
            <div class="flex flex-row">
                <span>R${{ props.produto.preco }} - </span>
                <div class="ml-2">
                    <label>Qtd. Disponivel: </label>
                    <span>{{ props.produto.quantidade }}</span>
                </div>                
            </div>
            
            <Button class="botao-add" label="Adicionar"/>
            

        </section>

    </div>
</template>

<style scoped lang="scss">
    .cartao{
        width: 300px;
        max-width: 300px;
        height: 350px;
        max-height: 350px;
        background-color: rgba(255, 255, 255, 0.63);
        border-radius: 1.5rem;
        margin: 1.5rem;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
            transition: 1s;
        }

        .produto-imagem {
            width: 75%;
            height: 70%;
            max-width: 250px;
            max-height: 250px;
            img{
            width: 100%;
            height: 100%;
        }
        }
        .botao-add{
            width: 80%;
            height: 5rem;
            margin: 1rem;
        }
    }

</style>