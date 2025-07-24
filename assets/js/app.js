const flowers = [
    "Rose Delight", "Tulip Breeze", "Daisy Glow", "Orchid Mist",
    "Lily Blossom", "Sunshine Marigold", "Carnation Kiss", "Peony Dream"
];
const productGrid = document.getElementById("product-grid");
let cartTotal = 0;

function renderProducts() {
    productGrid.innerHTML = "";
    flowers.forEach((name, index) => {
        const price = Math.floor(Math.random() * 40) + 10;
        const item = document.createElement("div");
        item.innerHTML = `
            <img src="./assets/img/sample-flower-image.png" alt="${name}" class="w-full h-[322.94px] object-cover zoom-hover">
            <h3 class="text-[22px] font-medium mt-4 text-[#111]">${name}</h3>
            <p class="text-[#111] font-bold text-[22px] mt-2">${price} USD</p>
            <button class="w-full mt-4 bg-orange-600 text-white px-4 py-2 hover:bg-orange-700" onclick="addToCart(${price})">Add to Cart</button>
        `;
        productGrid.appendChild(item);
    });
}

function addToCart(amount) {
    cartTotal += amount;
    document.getElementById("cart-info").querySelector("span").innerText = `Cart ($${cartTotal})`;
    showToast();
}

function showToast() {
    const toast = document.getElementById("toast-undo");
    toast.classList.add("animate-slide-in-right");
    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 5000);
}

function hideToast() {
    const toast = document.getElementById("toast-undo");
    toast.classList.remove("animate-slide-in-right");
    toast.classList.add("hidden");
}

renderProducts();
