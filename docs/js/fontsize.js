/* =========================================================
   CONTROLE DE TAMANHO DE FONTE
   ========================================================= */

console.log("Script de fonte carregado com sucesso!");

let currentFontSize = 16;

/* Recupera tamanho salvo */
try {
    currentFontSize =
        parseFloat(localStorage.getItem("userFontSize")) || 16;
} catch (e) {
    console.warn("Não foi possível acessar o localStorage.");
}

/* Aplica tamanho da fonte */
window.aplicarFonte = function () {

    let styleTag = document.getElementById("dynamic-font-style");

    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamic-font-style";
        document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
        .wy-nav-content,
        .rst-content,
        article,
        p,
        li,
        td,
        th,
        span,
        a {
            font-size: ${currentFontSize}px !important;
            line-height: 1.6 !important;
        }
    `;

    try {
        localStorage.setItem("userFontSize", currentFontSize);
    } catch (e) {
        console.warn("Não foi possível salvar o tamanho da fonte.");
    }
};

/* Aumentar */
window.aumentarFonte = function () {

    console.log("Botão A+ clicado!");

    if (currentFontSize < 24) {
        currentFontSize += 2;
        window.aplicarFonte();
    }
};

/* Diminuir */
window.diminuirFonte = function () {

    console.log("Botão A- clicado!");

    if (currentFontSize > 12) {
        currentFontSize -= 2;
        window.aplicarFonte();
    }
};

/* Resetar */
window.resetarFonte = function () {

    console.log("Botão A (Reset) clicado!");

    currentFontSize = 16;
    window.aplicarFonte();
};

/* Aplicação automática ao carregar a página */
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        window.aplicarFonte
    );
} else {
    window.aplicarFonte();
}
