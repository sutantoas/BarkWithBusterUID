
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

const cart = gettingCart()
let quantity = 1

//decreasing quantity of product
document.querySelectorAll(".qty-decrease").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        if(quantity > 1){
            quantity--
            document.getElementById("qty-display").textContent = quantity
        }
    })
})

//increasing quantity of product
document.querySelectorAll(".qty-increase").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        quantity++
        document.getElementById("qty-display").textContent = quantity
    })
})

//adding to cart
document.querySelectorAll(".add-to-cart").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        const selectedWeightBtn = document.querySelector('.weight.selected')
        const displayedName = document.querySelector('.title-price h2').textContent.trim() 
        const selectedWeight = selectedWeightBtn ? selectedWeightBtn.value : '100g'
        const displayedPrice = document.querySelector('.title-price h4').textContent.trim()  

        const product = {
            id: selection.dataset.id,  
            name: displayedName,
            price: displayedPrice,
            image: selection.dataset.image,  
            weight: selectedWeight
        }
        addToCart(product, quantity)
    })
})

//Scroll through images
const mainImage = document.querySelector('.product-images img')
const selectImages = document.querySelectorAll('.indiv-image img')

selectImages.forEach(selectImage => {
    selectImage.addEventListener('click', () => {
        mainImage.src = selectImage.src
        mainImage.alt = selectImage.alt

        selectImages.forEach(t => t.classList.remove('active'))
        selectImage.classList.add('active')
    })
})



