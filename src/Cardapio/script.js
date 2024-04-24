function adicionarAoCarrinho(nome, preco) {
    var carrinho = document.getElementById("itensCarrinho");
    var total = document.getElementById("totalCarrinho");
    var item = document.createElement("li");
    item.textContent = nome + " - R$ " + preco.toFixed(2);
    carrinho.appendChild(item);
    total.textContent = "Total: R$ " + calcularTotal();
}

function calcularTotal() {
    var itens = document.getElementById("itensCarrinho").getElementsByTagName("li");
    var total = 0;
    for (var i = 0; i < itens.length; i++) {
        var preco = parseFloat(itens[i].textContent.split("R$ ")[1]);
        total += preco;
    }
    return total.toFixed(2);
}



function enviarPedidoParaWhatsApp() {
    var itens = document.querySelectorAll('#itensCarrinho li');
    var detalhesPedido = "Pedido:\n";
    itens.forEach(function(item) {
        detalhesPedido += item.textContent.trim() + '\n';
    });
    var mensagemWhatsApp = encodeURIComponent(detalhesPedido);
    window.location.href = "https://wa.me/seu_numerodetelefone/?text=" + mensagemWhatsApp;
}