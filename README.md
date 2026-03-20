<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Super Burguer</title>

  <style>
    body {
      font-family: Arial;
      margin: 0;
      text-align: center;
    }

    header {
      background: #222;
      color: white;
      padding: 15px;
    }

    section {
      padding: 20px;
    }

    .produto {
      border: 1px solid #ccc;
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
    }

    button {
      padding: 5px 10px;
      margin: 5px;
    }

    footer {
      background: #f4f4f4;
      padding: 15px;
      position: sticky;
      bottom: 0;
    }

    @media (min-width: 768px) {
      .produtos {
        display: flex;
        justify-content: center;
      }

      .produto {
        width: 200px;
      }
    }
  </style>
</head>

<body>

<header>
  <h1>🍔 Super Burguer</h1>
</header>

<section class="sobre">
  <h2>Sobre nós👇​​</h2>
  <p>Hamburgueria artesanal com ingredientes frescos e sabor único.</p>
</section>

<section class="produtos">
  <h2>Cardápio📕</h2>

  <div class="produto">
    <h3>X-Burguer🍔</h3>
    <p>R$ 15,00</p>
    <button onclick="diminuir(0)">-</button>
    <span id="qtd0">0</span>
    <button onclick="aumentar(0)">+</button>
  </div>

  <div class="produto">
    <h3>X-Bacon🍔🥓</h3>
    <p>R$ 18,00</p>
    <button onclick="diminuir(1)">-</button>
    <span id="qtd1">0</span>
    <button onclick="aumentar(1)">+</button>
  </div>

  <div class="produto">
    <h3>Refrigerante🥤</h3>
    <p>R$ 6,00</p>
    <button onclick="diminuir(2)">-</button>
    <span id="qtd2">0</span>
    <button onclick="aumentar(2)">+</button>
  </div>

</section>

<footer>
  <h2>Total: R$ <span id="total">0.00</span></h2>
</footer>

<section class="wpp">
  <button onclick="Whatsapp">Fazer pedido por WhatsApp📞</button>
</section>

<script>
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
</script>

</body>
</html>
