const game = {}

const web = {}

document.querySelector('#gamebtn').addEventListener('click', () => {

})

document.querySelector('#webbtn').addEventListener('click', () => {

})

document.querySelector('#contact').addEventListener('click', () => {
    const bizCard = document.querySelector('#business-card')
    bizCard.style.display = "block"
    
    
})

document.querySelector('.close').addEventListener('click', () => {
    const bizCard = document.querySelector('#business-card')
    bizCard.style.display = "none"
})