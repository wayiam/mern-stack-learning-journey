document.addEventListener('DOMContentLoaded',
    () => {
        let cart = []
        const productList = document.getElementById('product-list')
        let cartItems = document.getElementById('cart-items');
        let emptyCart = document.getElementById('empty-cart');
        let cartTotalMessage = document.getElementById('cart-total');
        let totalPriceDisplay = document.getElementById('total-price');
        let checkoutBtn = document.getElementById('checkout-btn');

        const products = [{
            id: 1,
            name: 'Wireless Mouse',
            price: 29.99,
            category: 'Electronics'
        },
        {
            id: 2,
            name: 'Bluetooth Headphones',
            price: 39.99,
            category: 'Electronics'
        },
        {
            id: 3,
            name: 'Gaming Keyboard',
            price: 49.99,
            category: 'Accessories'
        },
        {
            id: 4,
            name: 'Smartphone Stand',
            price: 19.99,
            category: 'Accessories'
        },
        {
            id: 5,
            name: 'Laptop Backpack',
            price: 59.99,
            category: 'Lifestyle'
        }
        ];

        cart = []

        //Add the product Dynamically
        products.forEach((product) => {
            const prodDiv = document.createElement("div");
            prodDiv.classList.add("product");
            prodDiv.innerHTML = `<span> <strong>${product.name}</strong> - <em>$${product.price.toFixed(2)}</em></span>
            <button data-id="${product.id}">Add to Cart</button>`

            //Append each child in the product list dynamically
            productList.appendChild(prodDiv)

        })


        productList.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const productId = parseInt(e.target.getAttribute("data-id"));
                let selectedProd = products.find((product) => product.id == productId);
                addToCart(selectedProd)
            }
        })

        function addToCart(selectedProd) {
            cart.push(selectedProd)
            renderCard()
        }

        function renderCard() {
            cartItems.innerText = ""
            let totalPrice = 0;
            if (cart.length > 0) {
                emptyCart.classList.add('hidden')
                cartTotalMessage.classList.remove('hidden')
                cart.forEach(item => {
                    totalPrice += item.price;
                    const cartItem = document.createElement("div")
                    cartItem.innerHTML =
                        `<span> <strong>${item.name}</strong> - <em>$${item.price}</em></span>
                    
                        `
                    cartItems.appendChild(cartItem)
                    totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
                });
            } else {
                  emptyCart.classList.remove('hidden')
                  totalPriceDisplay.textContent = `$0.00`
            }
            checkoutBtn.addEventListener('click',
                ()=>{
                    cart.length= 0;
                    alert('Checked Out Successfully')
                    renderCard();
                }
            )
        }

    }
)