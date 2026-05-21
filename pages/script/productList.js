const products = [
    {
        name: "Chicken Hearts",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/chicken-heart-dog-treats_940x.webp",
        link: "productPage.html"
    },
    {
        name: "Beef Paddywack",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/beef-paddywack.webp"
    },
    {
        name: "Lamb Liver",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/lamb_liver.webp"
    },
    {
        name: "Chicken Neck",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/chicken-neck.webp"
    },
    {
        name: "Teeth Cleanser",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/roo-cleanser.webp"
    }
]


const container = document.getElementById('product-container')

products.forEach(product =>{
    container.innerHTML += `
      <div class="variety-product">
                <div class="product-image">
                    <img src="${product.image}" alt="chicken hearts">   
                </div>
                <div class="texts">
                    <h3><a href="${product.link}">${product.name} </a> </h3>
                    <p>${product.description}</p>
                    <div class = "price-alignment">
                        <p class = "price-display">${product.price} </p>
                            <select class = "weight">
                                <option value ="100g"> 100g</option>
                                <option value ="200g"> 200g</option>
                                <option value ="500g"> 500g</option>
                            </select>
                    </div>
                    <button class="add-cart">
                        <p> Add To Cart </p>
                    </button>
                </div>
            </div>
    `
})


document.querySelectorAll('.add-cart').forEach(btn =>{
    btn.addEventListener('click', () =>{
        const number = document.querySelector('.cart-count')
        const current = parseInt(number.textContent) || 0

        number.textContent = current + 1
        number.classList.add('active')
        addToCart(item)
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
   
        const card = selection.closest('.variety-product')
        const priceDisplay = card.querySelector('.price-alignment p')
        priceDisplay.textContent = prices[weight]


    })
})