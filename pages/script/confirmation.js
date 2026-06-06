function clearCart() {
    localStorage.removeItem('cart')
    updateCartCount()
}

document.getElementById('find-more').addEventListener('click', () => {
    clearCart()
    window.location.href = 'index.html'
})