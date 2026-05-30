
document.querySelectorAll('.weight').forEach(btn =>{
    btn.addEventListener('click', () => {
        document.querySelectorAll('.weight').forEach(button =>{
            button.classList.remove('selected')
        })
        btn.classList.add('selected')
    })
})
