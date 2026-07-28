document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "28-Jun-26", arquivo: "02-08-26.pdf" },
        { data: "05-Jul-26", arquivo: "09-08-26.pdf" },
        { data: "12-Jul-26", arquivo: "16-08-26.pdf" },
        { data: "19-Jul-26", arquivo: "25-08-26.pdf" },
        { data: "26-Jul-26", arquivo: "30-08-26.pdf" },
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
