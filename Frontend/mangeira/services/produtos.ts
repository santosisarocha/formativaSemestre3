import {type Ref } from "vue";
import { BACKEND_URL } from "~/models/app";
import type { Pagination } from "~/models/pagination";
import type { Produto } from "~/models/produtos";

export const getProdutos = (numeroPagina:number=0): Pagination<Produto>|null =>{
    let data:  Pagination<Produto>|null = null;
    useFetch<Pagination<Produto>>(`${BACKEND_URL}/produtos?page=${numeroPagina}`)
        .then((response)=> {
            data = response.data.value;
        })
        .catch(error=>console.error(error));
        
    return data;
};