document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "02-Ago-26", arquivo: "02-08-26.pdf" },
        { data: "09-Ago-26", arquivo: "09-08-26.pdf" },
        { data: "16-Ago-26", arquivo: "16-08-26.pdf" },
        { data: "23-Ago-26", arquivo: "23-08-26.pdf" },
        { data: "30-Ago-26", arquivo: "30-08-26.pdf" },
    ];

    const coresFolhetos = [

        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "#FFD700",
        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
    ];

    const coresButtons = [

        "rgb(89, 206, 10)",
        "rgb(89, 206, 10)",
        "#FFD700",
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
