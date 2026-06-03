


document.addEventListener('DOMContentLoaded', () =>{

const cart = getCart()
const container = document.getElementById("final-details")

if(!container) return

cart.forEach(product =>{
    container.innerHTML += `
                <div class="product-details">
                    <img src="${product.image}" alt="product">
                    <div class="prodcut-info">
                        <h2>${product.name}</h2>
                        <p>100 Grams</p>
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
