let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    updateCartUI();
}

function updateCartUI() {
    document.getElementById("cart-count").textContent = cart.length;

    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>${item.name}</strong><br>
            Cena: ${item.price} zł<br>
            <button onclick="removeItem(${index})">Usuń</button>
        `;
        container.appendChild(div);
    });

    document.getElementById("total-price").textContent = total;
}

function removeItem(i) {
    total -= cart[i].price;
    cart.splice(i, 1);
    updateCartUI();
}

function openCart() {
    document.getElementById("cart").classList.add("open");
}

function closeCart() {
    document.getElementById("cart").classList.remove("open");
}
