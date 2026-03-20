let quantidades = [0, 0, 0];
let precos = [15, 18, 6];

function atualizarTotal() {
  let total = 0;

  for (let i = 0; i < quantidades.length; i++) {
    total += quantidades[i] * precos[i];
  }

  document.getElementById("total").innerText = total.toFixed(2);
}

function aumentar(index) {
  quantidades[index]++;
  document.getElementById("qtd" + index).innerText = quantidades[index];
  atualizarTotal();
}

function diminuir(index) {
  if (quantidades[index] > 0) {
    quantidades[index]--;
    document.getElementById("qtd" + index).innerText = quantidades[index];
    atualizarTotal();
  }
}