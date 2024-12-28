export default async function buscarDados(url) {
    if (typeof url !== "string") return;

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
}
