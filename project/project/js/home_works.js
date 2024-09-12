const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailSpan = document.querySelector("#gmail_result");

// const regExp =/^\w{5,30}@gmail.com$/g
const regExp = /\w@gmail.com$/

gmailButton.addEventListener("click",()=>{
    console.log(gmailInput.value)
    if(regExp.test(gmailInput.value)){
        gmailSpan.innerHTMl = "написано правильно"
        gmailSpan.style.color = "green"
    }
    else {
        gmailSpan.innerHTML = "указано неправильно"
        gmailSpan.style.color = "red"
    }
})


const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0 ,positionY = 0

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = ()=>{
    if(positionX < offsetWidth && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX >= offsetWidth && positionY<offsetHeight){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }else if(positionX < offsetWidth && positionY === 0) {
        positionX++
        childBlock.style.right = `${positionX}px`
        requestAnimationFrame(moveBlock)
    }else if (positionX >= offsetWidth && positionY<offsetHeight) {
        positionY++
        childBlock.style.bottom = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()
//TIME_BLOCK
const startCounter = document.querySelector("#start");
const stopCounter = document.querySelector("#stop");
const resetCounter = document.querySelector("#reset");

let counter = 0;
let isCounterActive = false;

startCounter.addEventListener("click", ()=>{
    isCounterActive = true;
    increaseCounter();
})
stopCounter.addEventListener("click",()=>{
    isCounterActive = false;
} )
resetCounter.addEventListener("click", ()=>{
    counter = 0;
    isCounterActive = false;
})
function increaseCounter (){
    if(isCounterActive){
        counter++;
        setTimeout(increaseCounter,1200);
    }
}