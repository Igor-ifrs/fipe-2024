import montaURL from "./montaURL.js";
import buscarDados from "./buscarDados.js";
import criaElemento from "./criaElemento.js";

export default async function fipeApp({ currentTarget, target }) {
    if (target.tagName !== "SELECT" || target.value === "null") return;
    const url = montaURL(currentTarget, target);
    const dados = await buscarDados(url);
    criaElemento(dados, target);
}
