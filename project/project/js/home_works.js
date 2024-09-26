const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailSpan = document.querySelector("#gmail_result");

// Corrected regex pattern
const regExp = /^\w{5,30}@gmail.com$/;

gmailButton.addEventListener("click", () => {
    console.log(gmailInput.value);
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = "написано правильно";
        gmailSpan.style.color = "green";
    } else {
        gmailSpan.innerHTML = "указано неправильно";
        gmailSpan.style.color = "red";
    }
});

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0, positionY = 0;

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionX > 0 && positionY >= offsetHeight) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(moveBlock);
    } else if (positionX <= 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(moveBlock);
    }
}
moveBlock();

const startCounter = document.querySelector("#start");
const stopCounter = document.querySelector("#stop");
const resetCounter = document.querySelector("#reset");

let counter = 0;
let isCounterActive = false;

startCounter.addEventListener("click", () => {
    isCounterActive = true;
    increaseCounter();
});
stopCounter.addEventListener("click", () => {
    isCounterActive = false;
});
resetCounter.addEventListener("click", () => {
    counter = 0;
    isCounterActive = false;
    // Optionally update the display here
});
function increaseCounter() {
    if (isCounterActive) {
        counter++;
        // Update the display with counter value here if needed
        setTimeout(increaseCounter, 1200);
    }
}
// Persons

document.addEventListener('DOMContentLoaded', () => {
    const charactersContainer = document.querySelector('.character_container');
    const request = new XMLHttpRequest();
    request.open('GET', '../data/persons.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            console.log('Response text:', request.responseText);
            const characters = JSON.parse(request.responseText);

            characters.forEach(character => {
                const characterBlock = document.createElement("div");
                characterBlock.classList.add("character_block");

                characterBlock.innerHTML = `
                <div class="character_photo">
                    <img src="${character.person_photo}" alt="${character.name}">
                </div>
                <h2>${character.name}</h2>
                <p>Age: ${character.age}</p>
                <p>Bio: ${character.bio}</p>
                `;
                const h2Element = characterBlock.querySelector("h2");
                const pElements = characterBlock.querySelectorAll("p");

                if (h2Element) {
                    h2Element.style.color = "white";
                }
                pElements.forEach(p => {
                    p.style.color = "white";
                });
                charactersContainer.append(characterBlock);
            });
        } else {
            console.error("Request failed", request.status);
        }
    };

    request.onerror = () => {
        console.error("Request fully failed");
    };
});
// Data
const request = new XMLHttpRequest()
request.open("GET","data.hw4.json")
request.setRequestHeader("Content-type","application/json")
request.send()
request.onload=()=> {
    console.log(request.response)
}