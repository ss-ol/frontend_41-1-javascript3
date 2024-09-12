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