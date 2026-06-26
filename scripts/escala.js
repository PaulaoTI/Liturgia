/*
document.addEventListener("DOMContentLoaded", () => {
    const escalas = [
        { nome: "JULHO", arquivo: "" }
    ];

    const container = document.getElementById("escalasContainer");

    escalas.forEach(escala => {
        const div = document.createElement("div");
        div.classList.add("div-escala");

        const disabled = escala.arquivo === "" ? "disabled" : "";
        const link = escala.arquivo || "#";

        div.innerHTML = `
            <h1 class="text-escala">${escala.nome}</h1>
            <a href="${link}">
                <button class="button-folhetos" ${disabled}>Baixar</button>
            </a>
        `;
        
        container.appendChild(div);
    });
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const escalas = [
        { nome: "JULHO", arquivo: "/escalas/EscaladeJulho.jpg" }
    ];

    const container = document.getElementById("escalasContainer");

    escalas.forEach(escala => {
        const div = document.createElement("div");
        div.classList.add("div-escala");

        const link = escala.arquivo || "";

        div.innerHTML = `
            <h1 class="text-escala">${escala.nome}</h1>
            <a href="${link}" target="_blank">
                <button class="button-escala">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
});
