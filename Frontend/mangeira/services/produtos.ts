import {type Ref } from "vue";
import { BACKEND_URL } from "~/models/app";
import type { Pagination } from "~/models/pagination";
import type { Produto } from "~/models/produtos";

export const getProdutos = (numeroPagina: number = 0): Promise<Pagination<Produto>|null> =>{
    return useFetch<Pagination<Produto>>(`${BACKEND_URL}/produtos?page=${numeroPagina}`)
        .then(response => {
            return Promise.resolve(response.data.value);
        })
        .catch(error=>{
            console.log("error",error);
            return Promise.resolve(null);
        });


 };
        
    