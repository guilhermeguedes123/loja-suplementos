import { products } from "./products.js";
const productsContainer = document.getElementById("products");
function renderProducts(productsToRender) {
    if (!productsContainer)
        return;
    productsContainer.innerHTML = "";
    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <p>R$ ${product.price.toFixed(2)}</p>

            <a
                href="https://wa.me/5584981682747?text=Olá,%20tenho%20interesse%20em%20${product.name}"
                target="_blank"
            >
                <button>Comprar</button>
            </a>
        `;
        productsContainer.appendChild(card);
    });
}
// Exibe todos os produtos ao carregar a página
renderProducts(products);
// Campo de pesquisa
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
});
