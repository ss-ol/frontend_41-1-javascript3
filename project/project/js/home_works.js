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


    const charactersContainer = document.querySelector('.character_container');
    const request = new XMLHttpRequest();
    request.open('GET', '../data/persons.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send();

    request.onload = () => {
      const data = JSON.parse(request.response);
      data.forEach(person => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
          <h2>${person.name}</h2>
          <img src="${person.person_photo}" alt="${person.name}" class="person_photo">
          <p>age:${person.age}</p>
          <p>bio:${person.bio}</p>
          `
          charactersContainer.appendChild(card);

      })
    };
// Data
const button = document.getElementById("button_bottom")
button.onclick= ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","../data/data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.onload=()=> {
        const data = JSON.parse(request.response)
        data.forEach(element=>{
            console.log(element)
        })
    }
}
