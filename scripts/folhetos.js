document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "30-Ago-26", arquivo: "30-08-26.pdf" },
        { data: "06-Set-26", arquivo: "6-09-26.pdf" },
        { data: "13-Set-26", arquivo: "13-09-26.pdf" },
        { data: "20-Set-26", arquivo: "20-09-26.pdf" },
        { data: "27-Set-26", arquivo: "27-09-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
    ];

    const coresButtons = [

        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
    ];

    const container = document.getElementById("folhetosContainer");

    folhetos.forEach((folheto, index) => {
        const div = document.createElement("div");
        div.classList.add("div-folhetos");

        const corDoTexto = coresFolhetos[index % coresFolhetos.length];

        const corDoButton = coresButtons[index % coresFolhetos.length];

        div.innerHTML = `
            <h1 class="text-folhetos" style="color: ${corDoTexto};">${folheto.data}</h1>
            <a href="folhetos/${folheto.arquivo}" target="_blank">
                <button class="button-folhetos" style="background-color: ${corDoButton};">Baixar</button>
            </a>
        `;

        container.appendChild(div);
    });
});
