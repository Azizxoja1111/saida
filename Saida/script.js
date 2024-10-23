// Массив для хранения товаров в корзине
let cart = [];

// Функция для добавления товара в корзину
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

// Функция для обновления корзины
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('p');
            itemElement.textContent = `${item.name} - ${item.price} руб.`;
            cartItems.appendChild(itemElement);
            total += parseInt(item.price);
        });

        const totalElement = document.createElement('p');
        totalElement.textContent = `Итого: ${total} руб.`;
        cartItems.appendChild(totalElement);
    }
}

// Добавление товара в корзину при клике на кнопку
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

// Обработка оформления заказа
document.getElementById('checkout').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Ваша корзина пуста!');
    } else {
        alert('Спасибо за заказ! Мы свяжемся с вами для подтверждения.');
        cart = []; // Очищаем корзину после оформления заказа
        updateCart();
    }
});
document.getElementById('checkout').addEventListener('click', function () {
    window.location.href = 'tel:+71234567890'; // Замените на нужный номер телефона
});
