
const produtos = [
  { nome: "Choco Crunch", preco: 25.00 },
  { nome: "Morango Dream", preco: 22.00 },
  { nome: "Vanilla Cloud", preco: 20.00 }
];

const VALOR_MINIMO_DESCONTO = 50.00;
const TAXA_DESCONTO = 0.10;
const botaoSimulacao = document.querySelector("#simulate-button");

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function simularCompra() {
  const itensEscolhidos = [];
  let subtotal = 0;
  let quantidadeTotal = 0;

  for (const produto of produtos) {
    const resposta = prompt(
      `Quantos milkshakes ${produto.nome} você deseja?\nPreço unitário: ${formatarMoeda(produto.preco)}\nDigite 0 se não quiser este sabor.`
    );

    if (resposta === null) {
      alert("Simulação cancelada. Nenhum pedido foi calculado.");
      return;
    }

    if (resposta.trim() === "") {
      alert("Quantidade inválida. Informe um número inteiro igual ou maior que zero.");
      return;
    }

    const quantidade = Number(resposta);

    if (!Number.isSafeInteger(quantidade) || quantidade < 0) {
      alert("Quantidade inválida. Informe um número inteiro igual ou maior que zero.");
      return;
    }

    const totalProduto = produto.preco * quantidade;

    if (!Number.isFinite(totalProduto) || !Number.isSafeInteger(totalProduto * 100)) {
      alert("Quantidade muito alta. Tente novamente com um número menor.");
      return;
    }

    if (quantidade > 0) {
      itensEscolhidos.push({
        nome: produto.nome,
        quantidade,
        total: totalProduto
      });
    }

    subtotal += totalProduto;
    quantidadeTotal += quantidade;
  }

  if (quantidadeTotal === 0) {
    alert("Nenhum produto foi selecionado. O valor do pedido é R$ 0,00.");
    return;
  }

  subtotal = Math.round((subtotal + Number.EPSILON) * 100) / 100;
  const desconto = subtotal >= VALOR_MINIMO_DESCONTO
    ? Math.round((subtotal * TAXA_DESCONTO + Number.EPSILON) * 100) / 100
    : 0;
  const totalFinal = Math.round((subtotal - desconto + Number.EPSILON) * 100) / 100;

  let resumo = "RESUMO DO SEU PEDIDO\n\n";
  for (const item of itensEscolhidos) {
    resumo += `${item.nome}\nQuantidade: ${item.quantidade}\nValor: ${formatarMoeda(item.total)}\n\n`;
  }

  resumo += `Quantidade de milkshakes: ${quantidadeTotal}\n`;
  resumo += `Subtotal: ${formatarMoeda(subtotal)}\n`;
  resumo += `Desconto: -${formatarMoeda(desconto)}\n`;

  if (desconto === 0) {
    resumo += `Dica: pedidos a partir de ${formatarMoeda(VALOR_MINIMO_DESCONTO)} recebem 10% de desconto.\n`;
  }

  resumo += `\nTOTAL DO PEDIDO: ${formatarMoeda(totalFinal)}`;
  alert(resumo);
}

botaoSimulacao.addEventListener("click", simularCompra);
