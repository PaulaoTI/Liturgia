document.addEventListener("DOMContentLoaded", () => {

    const folhetos = [

        { data: "29-Mar-26", arquivo: "LIVRETOSEMANASANTA2026.pdf" },
        
    ];

    const coresFolhetos = [

        "rgb(226, 9, 9)"

    ];

    const coresButtons = [

        "rgb(226, 9, 9)"

    ]

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
