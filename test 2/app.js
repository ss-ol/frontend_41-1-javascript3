//1
function extractNumbers(str) {
    const numberPattern = /\d+/g;
    const matches = str.match(numberPattern);
    return matches ? matches.map(Number) : [];
}

console.log(extractNumbers("v4k7f8u5t6h2u"));

//2
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 144) {
            clearInterval(interval);
        }
    }, 1000);
}
count();
//3
const fetchProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach((product) => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchProducts();
//4
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.color-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const backgroundColor = event.target.getAttribute('data-color');
            document.body.style.backgroundColor = backgroundColor;
        });
    });
});
//5
document.addEventListener("DOMContentLoaded", () => {
    const block = document.getElementById("block");
    const modalButton = document.getElementById("modalButton");

    modalButton.addEventListener("click", () => {
        block.classList.toggle("hidden");
    });
});
//6