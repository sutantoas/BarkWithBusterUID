const products = [
    {
        id: "1",
        name: "Chicken Heart",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/chicken-heart-dog-treats_940x.webp",
        link: "productPage.html"
    },
    {
        id: "2",
        name: "Beef Paddywack",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/beef-paddywack.webp",
        link:"productPageBeef.html"
    },
    {
        id: "3",
        name: "Lamb Liver",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/lamb_liver.webp"
    },
    {
        id: "4",
        name: "Chicken Neck",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/chicken-neck.webp"
    },
    {
        id: "5",
        name: "Teeth Cleanser",
        description: "Air Dried Dog treats",
        price: "$15.95",
        image: "assets/image/roo-cleanser.webp"
    },{
        id:"6",
        name: "Kangaroo Cubes",
        description: "Air Dried Dog Treats",
        price: "$15.95",
        image: "assets/image/kangaroo-cubes.png",
        link: "productPagreRoo.html"
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
                        <button class="add-cart"
                            data-id="${product.id}"
                            data-name="${product.name}"
                            data-price="${product.price}"
                            data-image="${product.image}">
                            <p> Add To Cart </p>
                        </button>
                    </div>
                   
                </div>
            </div>
    `
})

// Saving products to cart
document.querySelectorAll('.add-cart').forEach(btn =>{
    btn.addEventListener('click', () =>{
        const number = document.querySelector('.cart-count')
        const current = parseInt(number.textContent) || 0

        number.textContent = current + 1
        number.classList.add('active')

        const card = btn.closest('.variety-product')
        const selectedWeight = card.querySelector('.weight').value
        const priceDisplay = card.querySelector('.price-display')

        const product = {
            id: btn.dataset.id,
            name: btn.dataset.name,
            price: priceDisplay.textContent.trim(),
            image: btn.dataset.image,
            weight: selectedWeight
        }

        addToCart(product)
    })
})

//Changing weight and price
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