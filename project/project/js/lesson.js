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

const converter = (element, targetElement , targetElement2)=>{
    element.oninput=()=>{
        const request = new XMLHttpRequest();
        request.open('GET','../data/converter.json');
        request.setRequestHeader("Content-type","application/json");
        request.send()

        request.onload=()=>{
            const data = JSON.parse(request.response)
            if (element.id === "som"){
                targetElement.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value / data.eur).toFixed(2)
            }
            if (element.id === "usd"){
                targetElement.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = (element.value * data.usd / data.eur).toFixed(2);
            }
            if (element.id === "eur"){
                targetElement.value = (element.value * data.eur).toFixed(2);
                targetElement2.value = (element.value / data.eur * data.usd).toFixed(2)
            }
            if (element.value === ''){
                targetElement.value = ''
                targetElement2.value = ''
            }
        }
    }
}

converter(somInput,usdInput,euroInput)
converter(usdInput,somInput,euroInput)
converter(euroInput,somInput,usdInput)


// DRY - DON'T REPEAT YOURSELF
//KISS - KEEP EAT SIMPLE , STUPID


//CARD SWITCHER
const card = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

let cardId = 1;

function displayCard() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'} ">${data.completed}</p>
            <span>${data.id}</span>
            `;
        });
}

displayCard();
const slideCard = (button,buttonName)=>{
    displayCard()
    button.onclick=()=>{
        switch (buttonName) {
            case 'next':
                if (cardId === 200){
                    cardId = 0;
                }
                cardId++
                break;
                case 'prev':
                    if (cardId === 1){
                        cardId = 201;
                    }
                    cardId=cardId - 1;

        }
        displayCard();
    }
}
slideCard(btnNext,'next');
slideCard(btnPrev,'prev');

//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));