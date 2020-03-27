const game = {}

const web = {}

document.querySelector('#gamebtn').addEventListener('click', () => {
    document.getElementById('start').remove()
    document.getElementById('gameArea').style.display = 'flex'
    document.querySelector('header').style.backgroundColor = 'paleturquoise'
    document.querySelector('footer').style.backgroundColor = 'paleturquoise'
})

document.querySelector('#webbtn').addEventListener('click', () => {
    document.getElementById('start').remove()
    document.getElementById('webArea').style.display = 'flex'
    document.querySelector('header').style.backgroundColor = 'palevioletred'
    document.querySelector('footer').style.backgroundColor = 'palevioletred'
})

document.querySelector('#contact').addEventListener('click', () => {
    const bizCard = document.querySelector('#business-card')
    bizCard.style.display = "block"
    
    
})

document.querySelector('.close').addEventListener('click', () => {
    const bizCard = document.querySelector('#business-card')
    bizCard.style.display = "none"
})

document.querySelector('#web-home').addEventListener('click', () => {
    location.reload()
    
})

document.querySelector('#game-home').addEventListener('click', () => {
    location.reload()
    
})