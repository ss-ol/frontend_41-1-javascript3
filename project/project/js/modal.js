//modal

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
const closeModal=()=>{
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modalTrigger.onclick=()=> openModal()
modalCloseButton.onclick=() => closeModal()
modal.onclick =(event) =>{
    if (event.target === modal){
        closeModal()
    }
}

//HW

setTimeout(function (){
    modal.style.display = 'block';
},10000);

const scrollBottom = ()=>{
    return window.innerHeight+window.scrollY>=document.body.offsetHeight;
}
const scrollHandler = ()=>{
    if (scrollBottom()){
        openModal()
        window.removeEventListener("scroll",scrollHandler);
    }
}
window.addEventListener('scroll',scrollHandler);