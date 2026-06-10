
// getting items from cart
function gettingCart(){
    return JSON.parse(localStorage.getItem('cart')) || []
}

//Saving items to cart
function savingToCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

// Add to Cart
function addToCart(product, quantity = 1){
    let cart = gettingCart()
    let existing = null;

    //Loops through and add products to cart
    for (let i = 0; i < cart.length; i++) {

        //Checks ID through number and weight
        const productID = product.id.toString().split('-')[0]
        const weightedId = productID + '-' + product.weight 

        if (cart[i].id === weightedId) {
            existing = cart[i];
            break;
        }
}
    //If it already exists update the quantity
    if (existing) {
        existing.quantity += quantity
    } else {
        cart.push({ id: product.id + '-' + product.weight,
            name: product.name,
            price: product.price,
            image: product.image,
            weight: product.weight,
            quantity: quantity})
    }

    savingToCart(cart)   
    updateCartCount()              
}

//Updating cart count icon
function updateCartCount(){
    const cart = gettingCart()
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

//Update quantity of items
function updateQuantity(id, change){
    let cart = gettingCart()

    let item = null
    //find item in cart array
    for(let i = 0; i < cart.length; i++){
        if(cart[i].id === id){
            item = cart[i]
            break
        }
    }

    if(item){
        item.quantity += change
        //find the item index to remove
        if(item.quantity <= 0){
            for(let i = 0; i < cart.length; i++){
                if(cart[i].id === id){
                    cart.splice(i, 1)
                    break
                }
            }
            const card = document.querySelector(`.qty-decrease[data-id="${id}"]`).closest('.cart-item')
            card.remove()
        } else {
            const card = document.querySelector(`.qty-decrease[data-id="${id}"]`).closest('.cart-item')
            card.querySelector('span').textContent = item.quantity
        }
    }
    savingToCart(cart)
    updateTotalPrice()
}


//Update pricing
function updatePrice(id, weight){
    let cart = gettingCart()

    let item = null
    //find item in cart array
    for(let i = 0; i < cart.length; i++){
        if(cart[i].id === id){
            item = cart[i]
            break
        }
    }

    const prices = {
            '100g': '$15.95',
            '200g': '$21.95',
            '500g': '$25.95'
        }

        if(item){
            item.weight == weight
            item.price = prices[weight]
            savingToCart(cart)
        }
}

//Update total pricing
function updateTotalPrice(){
    let cart = gettingCart()
    let totalPrice = 0;
    cart.forEach(element => {
        const price = parseFloat(element.price.replace('$', ''))
        totalPrice += price * element.quantity
    })
    document.getElementById('subtotal').textContent = `$${totalPrice.toFixed(2)}`
    document.getElementById('total').textContent = `$${totalPrice.toFixed(2)}`
}

//Hamburger function
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')
const closeMenu = document.getElementById('close-menu')
const overlay = document.querySelector('.overlay')

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open')
        if (overlay) overlay.classList.add('active')
    })

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('open')
        if (overlay) overlay.classList.remove('active')
    })

    if (overlay) {
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('open')
            overlay.classList.remove('active')
        })
    }
}

//Searching function
const searchIcon = document.querySelector('.search-icon')  
const searchOverlay = document.getElementById('search-overlay')
const searchClose = document.getElementById('search-close')
const searchSubmit = document.getElementById('search-submit')

if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        searchOverlay.classList.add('active')
    })
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active')
    })
}

if (searchSubmit) {
    searchSubmit.addEventListener('click', () => {
        window.location.href = '../pages/productPage.html'  
    })
}
