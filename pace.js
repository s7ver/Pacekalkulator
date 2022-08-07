
document.getElementById("velg").addEventListener("click",distansevalg)

function distansevalg() {
    const d = document.getElementById("distanse").value
    console.log(d)
    
}

document.getElementById("velg2").addEventListener("click",pacekalk)

function pacekalk() {
    const d = document.getElementById("distanse").value

    if (d == "400m") {
        const p = document.getElementById("måltid").value
        console.log(p)
        let tohundre = (p/2)-1.5
        console.log(tohundre)
        document.getElementById("res").innerHTML = "Åpne på "+tohundre+" sekunder på første 200m."
    }

    else if (d == "800m") {
        const p = document.getElementById("måltid").value
        let tohundre = (p/4)-0.5
        let firehundre = (p/2)-1
        let sekshundre = ~~((((p/4)*3)-1.5)/60)
        let seksrest = (((p/4)*3)-1.5) % 60
        document.getElementById("res").innerHTML = "Åpne på "+tohundre+" sekunder på første 200m, deretter "+firehundre+" sekunder på 400m, og "+sekshundre+"min og "+seksrest+" sekunder ved 600m."
    }

    else if (d == "1500m") {
        const p = document.getElementById("måltid").value
        let kvart = ~~((p/1500)*400)
        console.log(kvart)
        let halv = ~~((p/1500)*800)
        document.getElementById("res").innerHTML = "Åpne på "+kvart+" sekunder på første 400m, deretter "+halv+" sekunder på 800m."
    }
}