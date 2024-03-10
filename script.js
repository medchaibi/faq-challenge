const btnPlus = document.querySelectorAll(".plus");


btnPlus.forEach(answer => {
    answer.addEventListener("click", (show)=> {
        let ShowAnswer = show.target.parentElement.parentElement.querySelectorAll(".sub-titles")[0]
        ShowAnswer.classList.toggle("active")
        if(ShowAnswer.classList.contains("active")){
            ShowAnswer.style.height = ` ${ShowAnswer.scrollHeight}px `
        }else{
            ShowAnswer.style.height = 0 ;
        }
        const bplus = show.target.parentElement.querySelectorAll(".btn-plus")[0]
        const bminus = show.target.parentElement.querySelectorAll(".btn-minus")[0]
        bminus.classList.toggle("hide")
        if(bminus.classList.contains("hide")){
            bplus.style.display = "none"
        }else{
            bplus.style.display = "block"
        }

    })
});
