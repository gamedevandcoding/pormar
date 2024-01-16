let hamburger_checkbox = document.getElementById("header_hamburger_checkbox");
let hamburger_open = document.getElementById("header_hamburger_open_svg");
let hamburger_close = document.getElementById("header_hamburger_close_svg");
let mobile_navbar = document.getElementById("header_mobile_navbar");

hamburger_checkbox.addEventListener('change', function (){
    if(hamburger_checkbox.checked){

        hamburger_open.style.display = "none";
        hamburger_close.style.display = "block";
        mobile_navbar.style.display = "block";
        document.body.style.overflow = 'hidden';

    }
    else{

        hamburger_open.style.display = "block";
        hamburger_close.style.display = "none";
        mobile_navbar.style.display = "none";
        document.body.style.overflow = 'auto';

     }
});

window.addEventListener("load", function(){

    let isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    var isMobileMediaQuery = window.matchMedia("(max-width: 1080px)");
    if(!isMobileDevice.test(navigator.userAgent) && !isMobileMediaQuery.matches){
        let hover_style = document.createElement("link");
        hover_style.rel = "stylesheet";
        hover_style.type = "text/css";
        hover_style.href = "style/hover.css";
        hover_style.media = "screen";
        document.head.appendChild(hover_style); 
    }

});