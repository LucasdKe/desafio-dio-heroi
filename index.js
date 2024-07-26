let nomeHeroi = "shaolin"
let xpHeroi = 200

switch (true) {
    case (xpHeroi <= 1000):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Ferro")
        break
    case (xpHeroi <= 2000):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Bronze")
        break
    case (xpHeroi <= 5000):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Prata")
        break
    case (xpHeroi <= 7000):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Ouro")
        break
    case (xpHeroi <= 8000):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Platina")
        break
    case (xpHeroi <= 9000):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Ascendente")
        break
    case (xpHeroi <= 10000):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Imortal")
        break
    case (xpHeroi >= 10001):
        console.log("O Heroi de nome " + nomeHeroi + " Está no nivel de Radiante")
        break
    default:
        console.log (nomeHeroi + "Não esta ranqueado ainda")
}