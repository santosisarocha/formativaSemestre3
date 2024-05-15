<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { reactive } from 'vue';
    const credenciais = reactive({
        email: '',
        password: ''
    });

    const fazerLogin = ()=>{
        console.log("login: ", credenciais);
    } 


</script>

<template>
    <main class="login-main flex align-items-center justify-content-center">
        <section class="login-container flex flex-column align-items-center justify-content-center ">
            <img class="logo" src="public/logo.png" >
            <h4 class="row-login"> Mangeira & Mangeira </h4>
            <div class="row-login">
                <FloatLabel>
                    <InputText v-model="credenciais.email" type="email" id="email-input" class="input-text"/>
                    <label for="email-input">Email</label>
                </FloatLabel>
            </div>
            <div  class="row-login">
                <FloatLabel>
                    <InputText v-model="credenciais.password" type="password" id="password-input" class="input-text"/>
                    <label for="password-input">Senha</label>
                </FloatLabel>
                
            </div>
            <div id="login-button">
                <Button @click="fazerLogin" label="Entar" ></Button>
            </div>

        </section>
    </main>
</template>

<style scoped lang="scss">
    .login-main{
        width: 100vw;
        height: 100vh;
        background-color: rgb(241, 243, 229);
        background-repeat: repeat;
        background-size: cover;


        .login-container{
            width: 30vw;
            height: 70vh;
            background-color: white;
            border-radius: 30px;

            .logo{
                width: 20vh;
                height: 20vh;

            }

            .row-login{
                margin: 1rem 0 1rem 0;
                .input-text{
                    height: 2.5rem;
                    width: 250px;
                }
                #login-button{
                    width: 100px;
                    height: 30px;
                
                }
            }
        }
    }

</style>