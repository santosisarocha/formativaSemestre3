
import type { reduceEachLeadingCommentRange } from 'typescript';

import type { Header } from '#build/components';
<script setup lang="ts">
import {ref} from 'vue';

const itensMenu = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Carrinho',
        icon: 'pi pi-shopping-bag'
    },
    {
        label: 'Login',
        icon: 'pi pi-user'
    }
])

</script>

<template>
    <header>
        <div class="flex align-items-center justify-content-center">
            <Menubar :model="itensMenu" />
        </div>
    </header>
</template>

<style scoped lang="scss">
    header{
        width: 100vw;
        height: 100px;

    }

</style>