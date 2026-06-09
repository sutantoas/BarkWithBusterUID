//Removes items from cart
function clearCart() {
    localStorage.removeItem('cart')
    updateCartCount()
}

//clear carts when users return to home page
document.getElementById('find-more').addEventListener('click', () => {
    clearCart()
    window.location.href = '../index.html'
})