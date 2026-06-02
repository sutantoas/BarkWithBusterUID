
document.querySelectorAll('.weight').forEach(btn =>{
    btn.addEventListener('click', () => {
        document.querySelectorAll('.weight').forEach(button =>{
            button.classList.remove('selected')
        })
        btn.classList.add('selected')
         const weight = btn.value

        const prices = {
            '100g': '$15.95',
            '200g': '$21.95',
            '500g': '$25.95'
        }
   
        const card = btn.closest('.product-details')
        card.querySelector('.title-price h4').textContent = prices[weight]
    })
    
})

const cart = getCart()
let quantity = 1

document.querySelectorAll(".qty-decrease").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        if(quantity > 1){
        quantity--
        document.getElementById("qty-display").textContent = quantity
        }
    })
})

document.querySelectorAll(".qty-increase").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        quantity++
        document.getElementById("qty-display").textContent = quantity
    })
})

document.querySelectorAll(".add-to-cart").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        const product = {
            id: '1',
            name: 'Chicken Heart',
            price: '$15.95',
            image: 'assets/image/chicken.png'
        }
        console.log('quantity being added: ', quantity)
        addToCart(product, quantity)
    })
})



