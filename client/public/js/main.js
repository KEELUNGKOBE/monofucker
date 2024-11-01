console.log("Monofucker Shop initialized");

// 產品數據
const products = [
    {
        id: 1,
        name: "限量版T恤",
        price: 890,
        image: "images/product1.jpg",
        description: "獨特設計的限量版T恤"
    },
    {
        id: 2,
        name: "經典帽子",
        price: 590,
        image: "images/product2.jpg",
        description: "百搭款式的棒球帽"
    },
    {
        id: 3,
        name: "潮流外套",
        price: 1890,
        image: "images/product3.jpg",
        description: "時尚有型的街頭外套"
    },
    {
        id: 4,
        name: "設計師背包",
        price: 1290,
        image: "images/product4.jpg",
        description: "實用美觀的後背包"
    }
];

// 顯示產品
function displayProducts() {
    const container = document.getElementById("products-container");
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product-card";
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">NT$ ${product.price}</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">加入購物車</button>
        `;
        container.appendChild(productElement);
    });
}

// 加入購物車功能
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`已將 ${product.name} 加入購物車！`);
        // 這裡之後可以添加真正的購物車功能
    }
}

document.addEventListener("DOMContentLoaded", displayProducts);
