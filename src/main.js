/*
ESTUDO JAVASCRIPT 2019 
DESAFIO: CRIAR UMA PÁGINA WEB QUE BUSQUE AS INFORMAÇÕES DE UM DETERMINADO VEICULO NA TABELA FIPE
CONSULTA DE PREÇOS DA TABELA FIPE USANDO API NÃO OFICIAL (https://parallelum.com.br/fipe/api/v1/)
DIFICULDADE : INICIANTE
TEMPO GASTO : 1 DIA
PONTOS QUE QUERO MELHORAR : EXISTEM 3 FUNÇÕES PARECIDAS NAS QUAIS MUDAM APENAS A URL DA CHAMADA A API 
E O RESULTADO 
FALTOU REFATORAR OU MELHORAR A FUNÇÃO QUE RESETA A PESQUISA (NOVA PESQUISA)

CÓDIGO RODANDO EM : (https://fipeicc.netlify.app/)

ESTUDO JAVASCRIPT 2024

*/

import fipeApp from "./index.js";

const containerSelect = document.querySelector(".container-fipeApp");
const containerCLONE = containerSelect.cloneNode(true);
const btnReset = document.querySelector("button[name='reset']");

containerSelect.addEventListener("change", fipeApp);

btnReset.addEventListener("click", () => {
    if (containerSelect.firstElementChild.value === "null") return;
    containerSelect.innerHTML = containerCLONE.innerHTML;
});
