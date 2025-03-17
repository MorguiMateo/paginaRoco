const gemas = 0.0125
const robux = 0.0125
const pavos = 0.009



function convert(game, amount) {
  if (game === "gemas") {
    return amount * gemas
  } else if (game === "robux") {
    return amount * robux
  } else if (game === "pavos") {
    return amount * pavos
  }
}

function convertArs(game, amount) {
  if (game === "gemas") {
    return amount * (gemas * 1200)
  } else if (game === "robux") {
    return amount * (robux * 1200)
  } else if (game === "pavos") {
    return amount * (pavos * 1200)
  }
}

function convertAndDisplay() {

  const game = document.getElementById("game").value
  const amount = parseFloat(document.getElementById("amount").value)
  const resultElement = document.getElementById("result")
  
  if (isNaN(amount)) {
    resultElement.textContent = "Resultado: Ingrese una cantidad válida"
    return
  }
  
  const result = convert(game, amount)
  const resultArs = convertArs(game, amount)

  resultElement.textContent = `Dolares: ${amount} ${game} = $${result.toFixed(2)} USD \n Pesos: ${amount} ${game} = $${resultArs.toFixed(4)} ARS`



}

