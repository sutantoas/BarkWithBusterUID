

document.addEventListener('DOMContentLoaded', () =>{

const cart = getCart()
const container = document.getElementById("cart-row")

cart.forEach(product =>{
    container.innerHTML += `
        <div class="cart-product">
            <img src="${product.image}" alt="products">
            <div class="product-title">
                <h4> ${product.name} </h4>
                    <div class="quantity-button">
                        <button class = "qty-decrease" id="${product.id}"> - </button>
                        <span class = "qty value" id="qty-dispaly"> ${product.quantity} </span>
                        <button class="qty-increase" id="${product.id}"> + </button>
                    </div>   
            </div>
        </div>
            <select class = "weight">
                <option value ="100g"> 100g</option>
                <option value ="200g"> 200g</option>
                <option value ="500g"> 500g</option>
            </select>
                <div class = "pricing">
                    <h3>$15.95</h3>
                </div>
    `
})
})

document.querySelectorAll(".qty-decrease").forEach(selection =>{
    selection.addEventListener('click', ()=>{
        cart.forEach(product =>{
            const quantity = selection.value
        })
    })
})

document.querySelectorAll('.weight').forEach(selection =>{
    selection.addEventListener('change', ()=>{
        const weight = selection.value

        const prices = {
            '100g': '$15.95',
            '200g': '$21.95',
            '500g': '$25.95'
        }
   
        const priceDisplay = card.querySelector('.pricing p')
        priceDisplay.textContent = prices[weight]


    })
})