

//Renders product based on whats in cart
document.addEventListener('DOMContentLoaded', () =>{

const cart = gettingCart()
const container = document.getElementById("final-details")
const container_mobile = document.getElementById("mobile-final-details")

if(!container) return

cart.forEach(product =>{
    container.innerHTML += `
                <div class="product-details">
                    <img src="${product.image}" alt="product">
                    <div class="product-info">
                        <h2>${product.name}</h2>
                        <p>${product.weight}</p>
                        <p>Qty: ${product.quantity}</p>
                    </div>
                    <div class="price">
                            <p>${product.price}</p>
                        </div>
                </div>
    `
    })

//Mobile display of products
cart.forEach(product =>{
    container_mobile.innerHTML += `
                <div class="product-details">
                    <img src="${product.image}" alt="product">
                    <div class="product-info">
                        <h2>${product.name}</h2>
                        <p>${product.weight}</p>
                        <p>Qty: ${product.quantity}</p>
                    </div>
                    <div class="price">
                            <p>${product.price}</p>
                        </div>
                </div>
    `
    })
    updateTotalPrice()
})

//Toggle order summary in mobile
const toggle = document.getElementById('order-summary-toggle')
const content = document.getElementById('order-summary-content')
const arrow = document.querySelector('.toggle-arrow')

if (toggle && content) {
    console.log('toggle:', document.getElementById('order-summary-toggle'))
console.log('content:', document.getElementById('order-summary-content'))
    toggle.addEventListener('click', () => {
        content.classList.toggle('open')
        arrow.textContent = content.classList.contains('open') ? '∧' : '∨'
    })
}
