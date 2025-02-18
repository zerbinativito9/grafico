function iniciarProgresso() {
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);

  // Verifica se os valores inseridos são válidos
  if (isNaN(valor1) || isNaN(valor2) || valor2 <= 0 || valor1 < 0) {
    alert("Por favor, insira números válidos e positivos!");
    return;
  }

  // Atualiza as caixas de texto com os valores inseridos
  document.getElementById("valor1-display").textContent = valor1;
  document.getElementById("valor2-display").textContent = valor2;

  let barra = document.getElementById("barra");

  // Inicia a animação do gráfico
  let progresso = valor1;
  barra.style.width = `${(progresso / valor2) * 100}%`;

  let intervalo = setInterval(function() {
    if (progresso < valor2) {
      progresso += (valor2 - valor1) / 100; // Aumenta o progresso de forma suave
      if (progresso > valor2) progresso = valor2; // Garantir que o progresso não ultrapasse valor2
      barra.style.width = `${(progresso / valor2) * 100}%`;
    } else {
      clearInterval(intervalo); // Interrompe o intervalo quando atingir o valor 2
    }
  }, 50); // A cada 50ms para criar uma animação suave
}
