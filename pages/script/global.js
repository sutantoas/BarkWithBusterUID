
// getting items from cart
function getCart(){
    return JSON.parse(localStorage.getItem('cart')) || []
}

function saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

// ADD TO CART
function addToCart(product, quantity = 1){
    let cart = getCart()

    let existing = null;
    for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
        existing = cart[i];
        break;
    }
}

    if (existing) {
        existing.quantity += quantity
    } else {
        cart.push({ id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity})
    }

    saveCart(cart)   
    updateCartCount()              
}

function updateCartCount(){
    const cart = getCart()
    const total = cart.reduce((sum, item) => sum + item.quantity, 0)

    const badge = document.querySelector('.cart-count')
    if(badge){
        badge.textContent = total
        if(total > 0){
            badge.classList.add('active')
        }else{
            badge.classList.remove('active')
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount()
})

function updateQuantity(id, change){
    let cart = getCart()
    const item = cart.find(p => p.id === id)

    if(item){
        item.quantity += change
        if(item.quantity <= 0){
            cart = cart.filter(p => p.id !== id)
          const card = document.querySelector(`.qty-decrease[data-id="${id}"]`).closest('.cart-item')
      card.remove()
    } else {
      // update span directly
      const card = document.querySelector(`.qty-decrease[data-id="${id}"]`).closest('.cart-item')
      card.querySelector('span').textContent = item.quantity
    }
    }
    saveCart(cart)
    updateTotalPrice()
}

function updatePrice(id, weight){
    let cart = getCart()
    const item = cart.find(p => p.id === id)
    const prices = {
            '100g': '$15.95',
            '200g': '$21.95',
            '500g': '$25.95'
        }

        if(item){
            item.weight == weight
            item.price = prices[weight]
            saveCart(cart)
        }
}

function updateTotalPrice(){
    let cart = getCart()
    let totalPrice = 0;
    cart.forEach(element => {
        const price = parseFloat(element.price.replace('$', ''))
        totalPrice += price * element.quantity
    })
    document.getElementById('subtotal').textContent = `$${totalPrice.toFixed(2)}`
    document.getElementById('total').textContent = `$${totalPrice.toFixed(2)}`
}

function clearCart() {
  localStorage.removeItem('cart')
  location.reload()
}

