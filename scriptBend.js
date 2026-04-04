console.log("Inicio da execução.");

function buscaDadosDoServidor(){
    //Codigo que busca dados do servidor
    return new Promise((resolve, reject) => {
        console.log("Buscando dados do servidor");

        setTimeout(() => {
            let sucesso = Math.random > 0.5;

            if(sucesso) {
                resolve("Dados recebidos com sucesso");
            } else{
                reject("falha ao buscar dados no servidor")
            }
        }, 2000);
    });

}
buscaDadosDoServidor()
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro)  =>{
        console.error(erro);
    });

console.log("Final da execução");