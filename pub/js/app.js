
const about = document.querySelector('#about-me')
const projects = document.querySelector('#projects')
const certs = document.querySelector('#certs')
const main = document.querySelector('#main')

const start = document.querySelector('#start')
const starttext = document.querySelector('#msg')
const msg = "Hello, welcome to my portfolio. Please click on a link or a button below to find out more information. You can also visit me on social media. Links to my socials can be found in the footer. Thanks!"


const aboutbtn = document.querySelector('#aboutbtn')
const projectbtn = document.querySelector('#projectbtn')
const certsbtn = document.querySelector('#certsbtn')





const startmsg = () => {
    let msg1 = msg.split('')
    let msg2 = ''

    msg1.forEach((letter, i)=> {
        setTimeout(() => {
            msg2 += letter
            starttext.textContent = msg2
        }, i * 50)
    })
    setTimeout(() => {
        aboutbtn.style.transition = 'all 2s ease'
        aboutbtn.style.opacity = '1'
        
    }, 9000)
    setTimeout(() => {
        projectbtn.style.transition = 'all 2s ease'
        projectbtn.style.opacity = '1'
        
    }, 9500)
    setTimeout(() => {
        certsbtn.style.transition = 'all 2s ease'
        certsbtn.style.opacity = '1'
        
    }, 10000)


}


window.addEventListener('load', () => {
    startmsg()

})






const displayAbout = () => {
    window.event.preventDefault()
    start.remove()
    main.querySelectorAll('section').forEach((element) => {
        element.style.display = 'none'
    })
    about.style.display = 'block'
}

const displayProjects = () => {
    window.event.preventDefault()
    start.remove()
    main.querySelectorAll('section').forEach((element) => {
        element.style.display = 'none'
    })
    projects.style.display = 'block'
}

const displayCerts = () => {
    window.event.preventDefault()
    start.remove()
    main.querySelectorAll('section').forEach((element) => {
        element.style.display = 'none'
    })
    certs.style.display = 'block'
}

