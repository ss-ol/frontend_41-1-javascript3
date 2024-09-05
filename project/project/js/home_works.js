const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailSpan = document.querySelector("#gmail_result");

// const regExp =/^\w{5,30}@gmail.com$/g
const regExp = /\w@gmail.com$/

gmailButton.addEventListener("click",()=>{
   console.log(gmailInput.value)
    if(regExp.test(gmailInput.value)){
        gmailSpan.innerHTMl = "написано правильно"
        gmailSpan.style.color = "springgreen"
    }
    else {
        gmailSpan.innerHTML = "указано неправильно"
        gmailSpan.style.color = "red"
    }
})


const childBlock = document.querySelector(".child_block");

const position = 0;


childBlock.addEventListener("click",()=>{
   function recursionAnimation(){
      position == position+5;
      if(position>500)return;
      childBlock.style.left = position+"px";
      animation();
   }
   function animation(){
      setTimeout(recursionAnimation, 100);
   }
   animation()
})