import type { Produto } from "./produtos";
import type { Usuario } from "./usuario";

enum PAGAMENTOS {
    "P"="PENDENTE",
    "A"="APROVADO",
    "R"="RECUSADO",
    "C"="CANCELADO",
}
export type Venda ={
    usuarioFK: Usuario;
    dataHora?: String;
    status: PAGAMENTOS

}

export type VendasProdutos = {
    produtoFK : Produto;
    quantidade: number;
    vendaFK: Venda
}


export type VendasProdutoBody = {
    produtoFK: number;
    quantidade: number;
    vendaFK: number;
}