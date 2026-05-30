
// getting items from cart
function getCart(){
    return JSON.parse(localStorage.getItem('cart')) || []
}

function saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

// ADD TO CART
function addToCart(product){
    let cart = getCart()

    const existing = cart.find(item => item.id === product.id)

    if (existing) {
        existing.quantity++          
    } else {
        cart.push({ id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1})
    }

    saveCart(cart)                 
}


function decreaseQuantity(product){

}