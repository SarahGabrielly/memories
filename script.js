/* =========================
   CONFIGURAÇÕES
========================= */

const numeroWhatsApp = "9999999999";


/* =========================
   FILTROS DOS PRODUTOS
========================= */

const filtros = document.querySelectorAll(".filtros button");
const menuLinks = document.querySelectorAll(".menu a[data-filtro]");
const produtos = document.querySelectorAll(".box-cardapio");


function filtrarProdutos(filtro) {

    produtos.forEach(function (produto) {

        const categoria = produto.dataset.categoria;

        if (filtro === "todos" || categoria === filtro) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }

    });

}


/* =========================
   ATUALIZAR BOTÃO ATIVO
========================= */

function atualizarFiltroAtivo(filtro) {

    filtros.forEach(function (botao) {

        botao.classList.remove("ativo");

        if (botao.dataset.filtro === filtro) {
            botao.classList.add("ativo");
        }

    });

}


/* =========================
   BOTÕES DOS FILTROS
========================= */

filtros.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const filtro = botao.dataset.filtro;

        atualizarFiltroAtivo(filtro);
        filtrarProdutos(filtro);

    });

});


/* =========================
   MENU DO TOPO
========================= */

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const filtro = link.dataset.filtro;

        filtrarProdutos(filtro);
        atualizarFiltroAtivo(filtro);

        document
            .getElementById("produtos")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================
   ABRIR WHATSAPP
========================= */

function abrirWhatsApp(mensagem) {

    const mensagemCodificada = encodeURIComponent(mensagem);

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(url, "_blank");

}


/* =========================
   BOTÃO "ENTRE EM CONTATO"
========================= */

const btnWhatsapp =
    document.getElementById("btn-whatsapp");


if (btnWhatsapp) {

    btnWhatsapp.addEventListener("click", function () {

        abrirWhatsApp(
            "Olá! Gostaria de saber mais sobre os produtos da Deohass Memories."
        );

    });

}


/* =========================
   BOTÕES "PEDIR"
========================= */

const botoesWhatsapp =
    document.querySelectorAll(".btn-whatsapp-produto");


botoesWhatsapp.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const mensagem =
            botao.dataset.mensagem;

        abrirWhatsApp(mensagem);

    });

});


/* =========================
   WHATSAPP DO RODAPÉ
========================= */

const whatsappRodape =
    document.getElementById("whatsapp-rodape");


if (whatsappRodape) {

    whatsappRodape.addEventListener("click", function (event) {

        event.preventDefault();

        abrirWhatsApp(
            "Olá! Gostaria de saber mais sobre os produtos da Deohass Memories."
        );

    });

}


/* =========================
   CONVITES PERSONALIZADOS
========================= */

const btnConvites =
    document.getElementById("btn-convites");


if (btnConvites) {

    btnConvites.addEventListener("click", function (event) {

        event.preventDefault();

        abrirWhatsApp(
            "Olá! Tenho interesse em convites personalizados da Deohass Memories. Gostaria de saber mais sobre as opções de personalização."
        );

    });

}