

document.addEventListener('DOMContentLoaded', () =>{

const cart = getCart()
const container = document.getElementById("cart-row")

if(!container) return

cart.forEach(product =>{
    container.innerHTML += `
    <div class="cart-item">
        <div class="cart-product">
            <img src="${product.image}" alt="products">
            <div class="product-title">
                <h4> ${product.name} </h4>
                    <div class="quantity-button">
                        <button class = "qty-decrease" data-id="${product.id}"> - </button>
                        <span class = "qty value" id="qty-dispaly"> ${product.quantity} </span>
                        <button class="qty-increase" data-id="${product.id}"> + </button>
                    </div>   
            </div>
        </div>
            <select class = "weight" data-id="${product.id}">
                <option value ="100g"> 100g</option>
                <option value ="200g"> 200g</option>
                <option value ="500g"> 500g</option>
            </select>
                <div class = "pricing">
                    <h3>${product.price}</h3>
                </div>
    </div>
    `
})

document.querySelectorAll(".qty-decrease").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        updateQuantity(selection.dataset.id, -1)
    })
})

document.querySelectorAll(".qty-increase").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        updateQuantity(selection.dataset.id, 1)
    })
})


document.querySelectorAll('.weight').forEach(selection =>{
    selection.addEventListener('change', ()=>{
        const weight = selection.value
        updatePrice(selection.dataset.id, weight)
    const card = selection.closest('.cart-item')
    const prices = {
            '100g': '$15.95',
            '200g': '$21.95',
            '500g': '$25.95'
        }
    card.querySelector('.pricing h3').textContent = prices[weight]
    updateTotalPrice()
  })
})
updateTotalPrice()

})



