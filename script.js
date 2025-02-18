// Função para iniciar o progresso do gráfico
function iniciarProgresso() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    
    // Verifica se os valores inseridos são válidos
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira números válidos!");
        return;
    }
    
    // Atualiza as caixas de texto com os valores inseridos
    document.getElementById("valor1-display").textContent = valor1;
    document.getElementById("valor2-display").textContent = valor2;
    
    // Calcula a diferença entre o valor 2 e o valor 1
    let diff = valor2 - valor1;
    let barra = document.getElementById("barra");
    
    // Inicia a animação do gráfico
    let progresso = valor1;
    barra.style.width = `${(progresso / valor2) * 100}%`;

    let interval = setInterval(function() {
        if (progresso < valor2) {
            progresso += 3;
            if (progresso > valor2) progresso = valor2; // Para quando atingir o valor2
            barra.style.width = `${(progresso / valor2) * 100}%`;
        } else {
            clearInterval(interval); // Interrompe o intervalo quando atingir o valor 2
        }
    }, 3000); // A cada 3 segundos
}
