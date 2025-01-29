<script>
        function addToCart(product, price) {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push({ name: product, price: price });                     
              localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert(`${product} sepete eklendi.`);
        }

        function showCart() {
             document.getElementById('sepet').classList.remove('hidden');
            document.getElementById('urunler').classList.add('hidden');   
              document.getElementById('about').classList.add('hidden');
            updateCart();
            window.scrollTo(0, 0);
        }

        function filterProducts(category) {      
            const allCards = document.querySelectorAll('.card');
            allCards.forEach(card => {
                card.style.display = card.classList.contains(category) ? 'block' : 'none';
             });
            document.getElementById('sepet').classList.add('hidden');
             document.getElementById('urunler').classList.remove('hidden');
              document.getElementById('about').classList.add('hidden');
            window.scrollTo(0, 0);
        }

        function showAllProducts() { 
            const allCards = document.querySelectorAll('.card');
              allCards.forEach(card => card.style.display = 'block');
            document.getElementById('sepet').classList.add('hidden');
             document.getElementById('about').classList.add('hidden');
            document.getElementById('urunler').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function showWomenProducts() {
            filterProducts('women');
        }

        function showMenProducts() {
            filterProducts('men');
        }

          function showWomenWatches() {
            filterProducts('women-watch');
        }
       
        function showMenWatches() {
            filterProducts('men-watch');
        }

         function showChildrenWatches() {
            filterProducts('children-watch');
        }

            function showChildrenGlasses() {
            filterProducts('children');
        }

        function showAbout() {
            document.getElementById('sepet').classList.add('hidden');
              document.getElementById('urunler').classList.add('hidden');       
            document.getElementById('about').classList.remove('hidden');
             window.scrollTo(0, 0);
        }

        function updateCart() {
             const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const cartList = document.getElementById('cart-items');                    
            let totalPrice = 0;

            cartList.innerHTML = '';
              cartItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - ${item.price} TL`;           
                 cartList.appendChild(listItem);
                totalPrice += item.price;
            });

            totalPriceEl.textContent = `Toplam: ${totalPrice} TL`;
        }

        function clearCart() {
            localStorage.removeItem('cartItems');
             alert('Sepet temizlendi.');                       
            updateCart();
        }

        function purchaseCart() {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            if (cartItems.length === 0) {
                alert("Sepetiniz boş. Satın alacak ürün bulunamadı.");
                return;
            }                                                   

            const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
            alert(`Satın alma işleminiz başarıyla tamamlandı. Toplam tutar: ${totalPrice} TL. Teşekkür ederiz!`);
            clearCart();
        }
    </script>