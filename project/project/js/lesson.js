// PHONE BLOCK
const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneSpan = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = "всё правильно"
        phoneSpan.style.color = "green"
    } else {
        phoneSpan.innerHTML = "номер указан неверно"
        phoneSpan.style.color = "red"
    }
}

//TAB SLIDER
let index = 0
const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabContentItems = document.querySelectorAll('.tab_content_item');
const tabContentItemParent = document.querySelector('.tab_content_items');
const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = "none"
    })
    tabContentItems.forEach((item) => {
        item.classList.remove("tab_content_item_active")
    })
}

const showTabContent = (index) => {
    tabContentBlocks[index].style.display = "block"
    tabContentItems[index].classList.add("tab_content_item_active")
}
hideTabContent()
showTabContent(index)

tabContentItemParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, tabIndex) => {
            if (event.target === item) {
                hideTabContent()
                index = tabIndex
                showTabContent(index)
            }
        })
    }
}

//hw

const autoSlaider = ()=>{
    hideTabContent()
    index=(index+1)%tabContentItems.length
    showTabContent(index)
}
setInterval(() => {
    autoSlaider()
}, 3000);


// converter
const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");
const euroInput = document.querySelector("#eur");

const asyncConverter = async (element, targetElement, targetElement2) => {
    element.oninput = async () => {
        try {
            const request = new XMLHttpRequest();
            request.open('GET', '../data/converter.json');
            request.setRequestHeader("Content-type", "application/json");
            request.send();

            return new Promise((resolve) => {
                request.onload = () => {
                    const data = JSON.parse(request.response);
                    if (element.id === "som") {
                        targetElement.value = (element.value / data.usd).toFixed(2);
                        targetElement2.value = (element.value / data.eur).toFixed(2);
                    } else if (element.id === "usd") {
                        targetElement.value = (element.value * data.usd).toFixed(2);
                        targetElement2.value = (element.value * data.usd / data.eur).toFixed(2);
                    } else if (element.id === "eur") {
                        targetElement.value = (element.value * data.eur).toFixed(2);
                        targetElement2.value = (element.value / data.eur * data.usd).toFixed(2);
                    }
                    if (element.value === '') {
                        targetElement.value = '';
                        targetElement2.value = '';
                    }
                    resolve();
                };
            });
        } catch (error) {
            console.error('Error in converter:', error);
            targetElement.value = '';
            targetElement2.value = '';
        }
    };
};

asyncConverter(somInput, usdInput, euroInput);
asyncConverter(usdInput, somInput, euroInput);
asyncConverter(euroInput, somInput, usdInput);


//card switcher
const card = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

let cardId = 1;

async function fetchCardData(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = await response.json();
        card.innerHTML = `
      <p>${data.title}</p>
      <p style="color: ${data.completed ? 'green' : 'red'} ">${data.completed}</p>
      <span>${data.id}</span>
    `;
    } catch (error) {
        console.error('Error fetching card data:', error);
    }
}

async function slideCard(button, buttonName) {
    try {
        await fetchCardData(cardId);
        button.onclick = async () => {
            switch (buttonName) {
                case 'next':
                    if (cardId === 200) {
                        cardId = 0;
                    }
                    cardId++;
                    break;
                case 'prev':
                    if (cardId === 1) {
                        cardId = 201;
                    }
                    cardId--;
            }
            await fetchCardData(cardId);
        };
    } catch (error) {
        console.error('Error handling slide card:', error);
    }
}

slideCard(btnNext, 'next');
slideCard(btnPrev, 'prev');

// Fetch posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

//weather
const searchInput = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");

const API_KEY = 'e417df62e04d3b1b111abeab19cea714';
const API = 'http://api.openweathermap.org/data/2.5/weather';

async function searchWeather(cityName) {
    try {
        const response = await fetch(`${API}?q=${cityName}&appid=${API_KEY}`);
        const data = await response.json();

        city.innerHTML = data.name || 'город не найден';
        temp.innerHTML = data.main?.temp ? Math.round(data.main.temp - 273) + '&deg;C' : '';
    } catch (error) {
        console.error('Ошибка при запросе погоды:', error);
    }
}

searchInput.oninput = () => {
    searchWeather(searchInput.value);
};