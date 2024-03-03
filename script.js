console.log("script.js");

let drop_down_btn = document.querySelectorAll(".drop-down-btn");
let drop_down_options = document.querySelectorAll(".drop-down");
let toggle_bar = document.querySelector(".toggle_bar");
let aside = document.querySelector("aside");

drop_down_btn.forEach(btn => {
    console.log(btn.getAttribute("index"));
    btn.addEventListener("click",()=>{
       let btnIndex = btn.getAttribute("index");
       drop_down_options.forEach(options => {
            let optionIndex = options.getAttribute("index");
            console.log(optionIndex);
            if (optionIndex == btnIndex) {
                options.classList.toggle("active");
            }
            if (btnIndex == "1") {
                options.classList.toggle("category");
            }
       });
    });
});

toggle_bar.addEventListener("click",()=>{
    aside.classList.toggle("active");
});