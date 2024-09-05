let map = document.querySelector("#map")
let chanceNumber
let pirate = document.querySelector("#pirate")
let gl = document.querySelector("#pd")
let stats = document.querySelector("#stats")
let counter = 0
let treasureX = Math.random() * 400 + 50
let treasureY = Math.random() * 400 + 50
let c1X = Math.random() * 400 + 50
let c1Y = Math.random() * 400 + 50
let c2X = Math.random() * 400 + 50
let c2Y = Math.random() * 400 + 50
let c3X = Math.random() * 400 + 50
let c3Y = Math.random() * 400 + 50
let chance = document.querySelector(".chance")
let winDist = 15
let trapDist = 15
let counterMin = null
let counterMax = null
let ng = document.querySelector("#ng")

function setStats() {
    if (!counterMin && !counterMax) {
        counterMin = counter
        counterMax = counter
    }
    else {
        if (counter < counterMin) {
            counterMin = counter
        }
        if (counter > counterMax) {
            counterMax = counter
        }
    }
    console.log(counterMin, counterMax);
}


map.onclick = function (event) {
    counter++
    console.log(counter);
    let pirateX = event.offsetX
    let pirateY = event.offsetY
    pirate.style.left = pirateX + "px"
    pirate.style.top = pirateY + "px"
    let a = pirateX - treasureX
    let b = pirateY - treasureY
    let c = pirateX - c1X
    let d = pirateY - c1Y
    let e = pirateX - c2X
    let f = pirateY - c2Y
    let g = pirateX - c3X
    let h = pirateY - c3Y
    let dist = Math.sqrt(a ** 2 + b ** 2)
    let distc1 = Math.sqrt(c ** 2 + d ** 2)
    let distc2 = Math.sqrt(e ** 2 + f ** 2)
    let distc3 = Math.sqrt(g ** 2 + h ** 2)
    if (counter % 5 == 0) {
        chance.classList.remove("chanceDisabled")
    }


    if (dist < winDist) {
        gl.innerHTML = "You found the treasure!    It took you " + counter + " steps"
        map.style.pointerEvents = "none"
        setStats()
        
    }
    else if (dist < 30) {
        gl.innerHTML = "so hot!"
    }
    else if (dist < 60) {
        gl.innerHTML = "hot"
    }
    else if (dist < 100) {
        gl.innerHTML = "warm"
    }
    else if (dist < 140) {
        gl.innerHTML = "windy"
    }
    else if (dist < 180) {
        gl.innerHTML = "cold"
    }
    else if (dist < 220) {
        gl.innerHTML = "freeze"

    }
    else if (dist < 260) {
        gl.innerHTML = "arctic"
    }
    else if (dist < 300) {
        gl.innerHTML = "bro you are in the ice age:)"
    }
    else {
        gl.innerHTML = "liquid nitrogen"
    }
    if (chanceNumber == 3) {
        gl.innerHTML = "..."

    }
    if (distc1 < trapDist) {
        gl.innerHTML = "you are in the trap"
        map.style.pointerEvents = "none"

    }
    if (distc2 < trapDist) {
        gl.innerHTML = "you are in the trap"
        map.style.pointerEvents = "none"

    }
    if (distc3 < trapDist) {
        gl.innerHTML = "you are in the trap"
        map.style.pointerEvents = "none"

    }
}
chance.onclick = function () {
    chance.classList.add("chanceDisabled")
    chanceNumber = Math.floor(Math.random() * 6);

    switch (chanceNumber) {
        case 0:
            alert('Now you can find the treasure easier');
            winDist = 60
            break
        case 1:
            alert('-5 steps in stats!');
            counter = counter - 5
            break
        case 2:
            alert('Someone replaced the treasure');
            treasureX = Math.random() * 400 + 50
            treasureY = Math.random() * 400 + 50
            break
        case 3:
            alert('next 5 steps you dont know where you are');

            break
        case 4:
            alert('there are more traps next 3 steps');
            trapDist = 30
            break
        case 5:

            alert('Victory! You are so lucky');
            gl.innerHTML = "You found the treasure!    It took you " + counter + " steps"
            map.style.pointerEvents = "none"
            setStats()
            break
    }

}
stats.onclick = function () {
    alert('the fastest win: ' + counterMin + '\nthe longest win ' + counterMax)

}
ng.onclick = function () {
    gl.innerHTML = "Good luck!"
    pirate.style.left = "95px"
    pirate.style.top = "70px"
    treasureX = Math.random() * 400 + 50
    treasureY = Math.random() * 400 + 50
    c1X = Math.random() * 400 + 50
    c1Y = Math.random() * 400 + 50
    c2X = Math.random() * 400 + 50
    c2Y = Math.random() * 400 + 50
    c3X = Math.random() * 400 + 50
    c3Y = Math.random() * 400 + 50
    counter = 0
    map.style.pointerEvents = "auto"
}


