export default function montaURL(currentTarget, { name }) {
    const BASEURL = "https://fipe.parallelum.com.br/api/v2/";
    const [TIPO, MARCA, MODELO, ANO] = [...currentTarget.querySelectorAll("select")]; //garante os valores atualizados

    const urlFIPE = {
        tipo: `${BASEURL}${TIPO.value}/brands`,
        marca: `${BASEURL}${TIPO.value}/brands/${MARCA.value}/models`,
        modelo: `${BASEURL}${TIPO.value}/brands/${MARCA.value}/models/${MODELO.value}/years`,
        ano: `${BASEURL}${TIPO.value}/brands/${MARCA.value}/models/${MODELO.value}/years/${ANO.value}`,
    };

    return urlFIPE[name] || { ERRO: "ERRO INTERNO" };
}
/*
https://fipe.parallelum.com.br/api/v2/{vehicleType}/brands
https://fipe.parallelum.com.br/api/v2/{vehicleType}/brands/{brandId}/models
https://fipe.parallelum.com.br/api/v2/{vehicleType}/brands/{brandId}/models/{modelId}/years
https://fipe.parallelum.com.br/api/v2/{vehicleType}/brands/{brandId}/models/{modelId}/years/{yearId}
*/
