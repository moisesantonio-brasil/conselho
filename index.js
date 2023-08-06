let button = document.querySelectorAll("button")
let image1 = document.querySelector("#primeiro")
let image2 = document.querySelector("#segundo")
let image3 = document.querySelector("#terceiro")

button[0].addEventListener("click",()=>{
    
    fetch('https://api.adviceslip.com/advice').then(resposta =>{
        return resposta.json()
    }).then(corpo =>{
        document.getElementById("tst").textContent = "Número: "+corpo.slip.id
        document.getElementById("tst2").textContent = "Conselho: "+corpo.slip.advice
       image1.style = "display:none"
       image2.style = "display:none"
       image3.style = "display:flex"
    })
   
})


