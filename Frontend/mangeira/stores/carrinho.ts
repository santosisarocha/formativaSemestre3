import type { Produto } from "~/models/produtos";
import { getProdutos } from "~/services/produtos";

export type CarrinhoItem ={
    produto: Produto;
    quantidade: number;
}

export type Carrinho ={
    produtos: Array<CarrinhoItem>;
}

export const carrinho = defineStore('carrinhoStore', {
    state:(): Carrinho => ({
        produtos:[]        
    }),
    actions: {
        adicionarNoCarrinho(novoProduto: Produto){
            const produtojaExiste = this.getProdutoDoCarrinho(novoProduto)
            if(produtojaExiste){
                produtojaExiste.quantidade += 1;
                this.produtos =[
                    ...this.produtos.filter(item=>item.produto.id !== produtojaExiste.produto.id),
                    produtojaExiste
                ]
            }
            //produto não esta no caminho
            else{
                this.produtos.push({
                    quantidade: 1,
                    produto: novoProduto
                });
            }         
            
        },
        removerDoCarrinho(carrinhoItem:CarrinhoItem){
            const posicaoNoCarrinho = this.getProdutoDoCarrinhoIndex(carrinhoItem.produto);
            this.produtos.splice(posicaoNoCarrinho,1);
            if(carrinhoItem.quantidade){
            
                this.produtos =[
                    ...this.produtos,
                    carrinhoItem
                ];

            }
            
           
        }


    },
    getters:{
        getProdutoDoCarrinho: (carrinho:Carrinho)=>(produtoParaEncontrar: Produto)=>{
           return carrinho.produtos.find(item=>item.produto.id === produtoParaEncontrar.id);
        },
        getProdutoDoCarrinhoIndex: (carrinho:Carrinho)=>(produtoParaEncontrar: Produto)=>{
           return carrinho.produtos.findIndex(item=>item.produto.id === produtoParaEncontrar.id);
        },
        getCarrinho: (carrinho: Carrinho) => carrinho
    }
})