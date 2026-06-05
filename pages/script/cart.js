

document.addEventListener('DOMContentLoaded', () =>{

const cart = getCart()
const container = document.getElementById("cart-row")

if(!container) return

cart.forEach(product =>{
    container.innerHTML += `
    <div class="cart-item" data-id="${product.id}">
        <div class="cart-product">
            <img src="${product.image}" alt="products">
            <div class="product-title">
                <h4> ${product.name} </h4>
                    <div class="quantity-button">
                        <button class = "qty-decrease" data-id="${product.id}"> - </button>
                        <span class = "qty-value" id="qty-dispaly"> ${product.quantity} </span>
                        <button class="qty-increase" data-id="${product.id}"> + </button>
                    </div>   
            </div>
        </div>
            <select class = "weight" data-id="${product.id}">
                <option value ="100g" ${product.weight === '100g' ? 'selected' : ''}> 100g</option>
                <option value ="200g" ${product.weight === '200g' ? 'selected' : ''}> 200g</option>
                <option value ="500g" ${product.weight === '500g' ? 'selected' : ''}> 500g</option>
            </select>
                <div class = "pricing">
                    <h3>${product.price}</h3>
                </div>
        <button class="remove-item" data-id="${product.id}">✕</button>
    </div>
    `
})

//Decrease quantity
document.querySelectorAll(".qty-decrease").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        updateQuantity(selection.dataset.id, -1)
    })
})

//Increase quantity
document.querySelectorAll(".qty-increase").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        updateQuantity(selection.dataset.id, 1)
    })
})

//Change weight in cart
document.querySelectorAll('.weight').forEach(selection =>{
    selection.addEventListener('change', ()=>{
    const weight = selection.value
    updatePrice(selection.dataset.id, weight)

    //Checks item current weight
    const card = selection.closest('.cart-item')
    const oldId = card.dataset.id
    const baseId = oldId.split('-')[0]
    const newId = baseId + '-' + weight

    const prices = {
            '100g': '$15.95',
            '200g': '$21.95',
            '500g': '$25.95'
        }

    //Updates pricing
    card.querySelector('.pricing h3').textContent = prices[weight]
    updateTotalPrice()

    //Checking and merging if weight already exists within cart.
    const cart = getCart()
    const currentItem = cart.find(i => i.id === oldId)
    const existingNewWeight = cart.find(i => i.id === newId)
        
    if (existingNewWeight && existingNewWeight !== currentItem) {
            existingNewWeight.quantity += currentItem.quantity
            
            // remove current item
            const index = cart.indexOf(currentItem)
            cart.splice(index, 1)
            saveCart(cart)
            card.remove()

            //Updates product
            const mergedCard = document.querySelector(`.cart-item[data-id="${newId}"]`)
            if (mergedCard) {
                mergedCard.querySelector('.qty-value').textContent = existingNewWeight.quantity
            }
        } else {
            card.querySelector('.pricing h3').textContent = prices[weight]
            if (currentItem) {
                currentItem.weight = weight
                currentItem.price = prices[weight]
                currentItem.id = newId
                card.dataset.id = newId
                saveCart(cart)
            }
        }

  })
})

//Removes item if less than 1
document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.id
        let cart = getCart()
        cart = cart.filter(item => item.id !== id)
        saveCart(cart)
        btn.closest('.cart-item').remove()
        updateTotalPrice()
        updateCartCount()
    })
})

updateTotalPrice()

})



