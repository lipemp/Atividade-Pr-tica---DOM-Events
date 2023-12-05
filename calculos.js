/* Desenvolva aqui a rotina */
const valorBase = document.getElementById("valor_base");
const valorTransporte = document.getElementById("valor_transporte");
const valorAlimentacao = document.getElementById("valor_alimentacao");
const valorAutomovel = document.getElementById("valor_automovel");
const valorFaltas = document.getElementById("faltas");
const valorReceita = document.getElementById("valor_receita");
const valorDescontos = document.getElementById("valor_descontos");
const valorTotal = document.getElementById("valor_total");
const btnCalcular = document.getElementById("btn_calcular");

btnCalcular.addEventListener("click", function () {
  const base = parseFloat(valorBase.value);
  const transporte = parseFloat(valorTransporte.value);
  const alimentacao = parseFloat(valorAlimentacao.value);
  const automovel = parseFloat(valorAutomovel.value);
  const faltas = parseFloat(valorFaltas.value);

  const receitaTotal = base + transporte + alimentacao;
  const descontosTotal = automovel + faltas;
  const totalGeral = receitaTotal - descontosTotal;

  valorReceita.value = receitaTotal;
  valorDescontos.value = descontosTotal;
  valorTotal.value = totalGeral;
});

function calcular() {
    
    const base = parseFloat(valorBase.value);
    const transporte = parseFloat(valorTransporte.value);
    const alimentacao = parseFloat(valorAlimentacao.value);
    const automovel = parseFloat(valorAutomovel.value);
    const faltas = parseFloat(valorFaltas.value);
  
    const receitaTotal = base + transporte + alimentacao;
    const descontosTotal = automovel + faltas;
    const totalGeral = receitaTotal - descontosTotal;
  
    valorReceita.value = receitaTotal;
    valorDescontos.value = descontosTotal;
    valorTotal.value = totalGeral;
  }

valorBase.addEventListener('change', calcular);
valorTransporte.addEventListener('change', calcular);
valorAlimentacao.addEventListener('change', calcular);
valorAutomovel.addEventListener('change', calcular);
valorFaltas.addEventListener('change', calcular);