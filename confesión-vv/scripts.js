const questions = document.querySelector(".question");
const gif = document.querySelector(".gif")
const siBtn = document.querySelector(".si-btn")
const noBtn = document.querySelector(".no-btn")

siBtn.addEventListener("click", ()=> {
    questions.innerHTML = "hayyy te amooooo espositaaaa";
    gif.src="https://media.tenor.com/F1lX2zWAi2EAAAAM/tonton-friends.gif"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px"
})