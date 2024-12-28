export default async function criaElemento(dados, target) {
    if (target.nextElementSibling.tagName === "DIV") {
        target.nextElementSibling.removeAttribute("hidden");
        target.nextElementSibling.innerHTML = `
        <p>Modelo : ${dados.model}</p>
        <p>Ano fabricação : ${dados.modelYear}</p>
        <p>Cod. FIPE : ${dados.codeFipe}</p>
        <p>Combustível : ${dados.fuel}</p>
        <p>Fabricante : ${dados.brand}</p>
        <p>Referência : ${dados.referenceMonth}</p>
        <p>Valor : ${dados.price}</p>`;
        return;
    } else {
        const fragment = document.createDocumentFragment();
        dados.forEach(({ code, name }) => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = name;
            fragment.append(option);
        });
        target.setAttribute("disabled", "");
        target.nextElementSibling.removeAttribute("hidden");
        target.nextElementSibling.focus();
        target.nextElementSibling.appendChild(fragment);
        return;
    }
}
