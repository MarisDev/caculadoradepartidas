function calculate(victory, defeat) {
    let result = victory - defeat
    return result
  }
  
  function rank() {
    let resultRank = calculate(50, 20)
    let level = ""
    if (resultRank <= 10) {
      level = "Ferro"
    } else if (resultRank <= 20) {
      level = "Bronze"
    } else if (resultRank <= 50) {
      level = "Prata"
    } else if (resultRank <= 80) {
      level = "Ouro"
    } else if (resultRank <= 90) {
      level = "Diamante"
    } else if (resultRank <= 100) {
      level = "Lendário"
    } else if (resultRank >= 100) {
      level = "Imortal"
    }
    return `O Herói tem de saldo de ${resultRank} e está no nível de ${level}`
  }
  
  console.log(rank())
