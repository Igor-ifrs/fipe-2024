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
*/

const baseUrl = "https://parallelum.com.br/fipe/api/v1/";
const tiposVeiculo = document.getElementById("tiposVeiculo");
const marcasVeiculo = document.getElementById("marcasVeiculo");
const modelosVeiculo = document.getElementById("modelosVeiculo");
const anoVeiculo = document.getElementById("anoVeiculo");
const result = document.getElementById("result");
const btnReset = document.getElementsByName("reset")[0];

tiposVeiculo.addEventListener("change", async function () {
    this.disabled = true;
    const listaFabricantes = await chamadaFipeApi(baseUrl + this.value + "/marcas");
    listaFabricantes.map(function (e) {
        const opt = document.createElement("option");
        opt.value = e.codigo;
        opt.innerHTML = e.nome;
        marcasVeiculo.appendChild(opt);
    });
    marcasVeiculo.hidden = false;
});

marcasVeiculo.addEventListener("change", async function () {
    this.disabled = true;
    const listaModelos = await chamadaFipeApi(baseUrl + tiposVeiculo.value + "/marcas/" + this.value + "/modelos");
    listaModelos.modelos.map(function (e) {
        const opt = document.createElement("option");
        opt.value = e.codigo;
        opt.innerHTML = e.nome;
        modelosVeiculo.appendChild(opt);
    });
    modelosVeiculo.hidden = false;
});

modelosVeiculo.addEventListener("change", async function () {
    this.disabled = true;
    const listaAnos = await chamadaFipeApi(baseUrl + tiposVeiculo.value + "/marcas/" + marcasVeiculo.value + "/modelos/" + this.value + "/anos");
    listaAnos.map(function (e) {
        const opt = document.createElement("option");
        opt.value = e.codigo;
        opt.innerHTML = e.nome;
        anoVeiculo.appendChild(opt);
    });
    anoVeiculo.hidden = false;
});

anoVeiculo.addEventListener("change", async function () {
    this.disabled = true;
    const resultado = await chamadaFipeApi(baseUrl + tiposVeiculo.value + "/marcas/" + marcasVeiculo.value + "/modelos/" + modelosVeiculo.value + "/anos/" + this.value);
    result.innerHTML = `
  <p>Modelo : ${resultado.Modelo}</p>
  <p>Ano fabricação : ${resultado.AnoModelo}</p>
  <p>Cod. FIPE : ${resultado.CodigoFipe}</p>
  <p>Combustível : ${resultado.Combustivel}</p>
  <p>Fabricante : ${resultado.Marca}</p>
  <p>Referência : ${resultado.MesReferencia}</p>
  <p>Valor : ${resultado.Valor}</p>   
`;
    result.hidden = false;
    btnReset.hidden = false;
});

async function chamadaFipeApi(url) {
    if (self.fetch) {
        try {
            const req = await fetch(url);
            if (req.status === 200) {
                const json = await req.json();
                return json;
            }
        } catch (e) {
            console.log(e.message);
            return null;
        }
    } else {
        alert("Seu navegador não da suporte a este site 💩");
    }
}

btnReset.addEventListener("click", function () {
    tiposVeiculo.disabled = !tiposVeiculo.disabled;
    tiposVeiculo.value = "none";
    marcasVeiculo.innerHTML = '<option value="none" selected disabled >Selecione a marca do veículo</option>';
    modelosVeiculo.innerHTML = '<option value="none" selected disabled >Selecione o modelo do veículo</option>';
    anoVeiculo.innerHTML = '<option value="none" selected disabled >Selecione o ano do veículo</option>';
    marcasVeiculo.hidden = !marcasVeiculo.hidden;
    marcasVeiculo.disabled = !marcasVeiculo.disabled;
    modelosVeiculo.disabled = !modelosVeiculo.disabled;
    modelosVeiculo.hidden = !modelosVeiculo.hidden;
    anoVeiculo.disabled = !anoVeiculo.disabled;
    anoVeiculo.hidden = !anoVeiculo.hidden;
    result.hidden = !result.hidden;
    btnReset.hidden = !btnReset.hidden;
});
