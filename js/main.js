console.log("Monofucker Shop initialized");

// 藝術品數據
const products = [
    {
        id: 1,
        name: "星空下的舞者",
        price: 28900,
        image: "images/product1.jpg",
        description: "現代抽象舞蹈藝術畫作，油彩，60x80cm"
    },
    {
        id: 2,
        name: "城市印象",
        price: 32500,
        image: "images/product2.jpg",
        description: "都市風景水彩畫，複合媒材，50x70cm"
    },
    {
        id: 3,
        name: "靜謐時光",
        price: 45800,
        image: "images/product3.jpg",
        description: "極簡主義雕塑，大理石，高度45cm"
    },
    {
        id: 4,
        name: "自然之聲",
        price: 39900,
        image: "images/product4.jpg",
        description: "環保藝術裝置，回收材料創作，90x120cm"
    }
];

// 顯示產品
function displayProducts() {
    const container = document.getElementById("products-container");
    container.innerHTML = ""; // 清空現有內容
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product-card";
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">NT$ ${product.price.toLocaleString()}</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">收藏藝術品</button>
        `;
        container.appendChild(productElement);
    });
}

// 加入收藏功能
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`已將 ${product.name} 加入收藏！`);
    }
}

document.addEventListener("DOMContentLoaded", displayProducts);
