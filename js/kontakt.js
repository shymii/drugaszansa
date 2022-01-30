const btn = document.querySelector('button')
const alertBox = document.querySelector('.alert')
const btnClose = document.querySelector('.alert-close')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const nameInp = document.querySelector('#imie')
    const emailInp = document.querySelector('#email')
    const topicInp = document.querySelector('#temat')
    const textInp = document.querySelector('#tresc')

    nameInp.value = ''
    emailInp.value = ''
    topicInp.value = ''
    textInp.value = ''
    alertBox.style.opacity = '1'
    alertBox.style.display = 'block'
    setTimeout(() => {
        alertBox.style.opacity = '0'
        alertBox.style.display = 'none'
    }, 2000)
})

alertBox.addEventListener('click', () => {
    alertBox.style.opacity = '0'
    alertBox.style.display = 'none'
})

btnClose.addEventListener('click', () => {
    alertBox.style.opacity = '0'
    alertBox.style.display = 'none'
})