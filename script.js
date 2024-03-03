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

let check_options = document.querySelector(".fas.fa-caret-down");

check_options.addEventListener("click",()=>{
    document.querySelector(".option_list").classList.toggle("active");
})

let check_box = document.querySelector("input[type='checkbox']");

check_box.addEventListener("change",()=>{
    if (check_box.checked == true) {
        document.querySelector(".option_check").classList.add("active");
    }else{
        document.querySelector(".option_check").classList.remove("active");
    }
});

let all_list = document.querySelectorAll(".list");

all_list.forEach(list => {
    list.addEventListener("click",()=>{
        if (list.textContent.toLowerCase().trim() == "none") {
            console.log('none');
            check_box.checked = false;
            document.querySelector(".option_check").classList.remove("active");
        }else{
            check_box.checked = true;
            document.querySelector(".option_check").classList.add("active");
        }
        document.querySelector(".option_list").classList.toggle("active");
    })
});

let category_menu = document.querySelectorAll(".category_menu .menu_btn");

category_menu.forEach(menu => {
    menu.addEventListener("click",()=>{
        category_menu.forEach(e => {
            e.classList.remove("active");
        });
        menu.classList.add("active");
    });
});

let all_menu_btn = document.querySelectorAll("aside .menu_btn");

all_menu_btn.forEach(btn => {
    btn.addEventListener("click",()=>{
        all_menu_btn.forEach(menu => {
            menu.classList.remove("active");
        });
        btn.classList.add("active");
    })
});

let compose_message = document.querySelector(".compose_message");
let minimize = document.querySelector(".minimize");
let maximize = document.querySelector(".maximize");
let closeBtn = document.querySelector(".close");
let compose = document.querySelector(".compose");

compose.addEventListener("click",()=>{
    compose_message.classList.add("active");
})

minimize.addEventListener("click",()=>{
    compose_message.classList.add("minimized");
    compose_message.classList.remove("fullscreen");
})

maximize.addEventListener("click",()=>{
    compose_message.classList.remove("minimized");
    compose_message.classList.add("fullscreen");
})

closeBtn.addEventListener("click",()=>{
    compose_message.className = "compose_message";
})