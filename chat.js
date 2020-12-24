const chatBtn1 = document.querySelector(".chat-btn1");
const chatBtn2 = document.querySelector(".chat-btn2");
const chatBtn3 = document.querySelector(".chat-btn3");
const chatDisplay = document.querySelector(".list-display");
const mentDisplay = document.querySelector(".ment-display");
const listDisplay = document.querySelector(".chat-display");

chatBtn1.addEventListener("click",()=>{
    chatDisplay.classList.add("on");
    mentDisplay.classList.remove("on");
    listDisplay.classList.add("off");

})
chatBtn2.addEventListener("click",()=>{
    mentDisplay.classList.remove("on");
    chatDisplay.classList.remove("on");
    listDisplay.classList.remove("off");

})
chatBtn3.addEventListener("click",()=>{
    mentDisplay.classList.add("on");
    chatDisplay.classList.remove("on");
    listDisplay.classList.add("off");
})
