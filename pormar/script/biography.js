var reading_biography = 0;
let audio_read_biography = new Audio("media/audio/biography.mp3");
let checkbox_read_biography = document.getElementById("biography_audio_checkbox");

let svg_read_biography_play = document.getElementById("biography_read_paragraph_svg_play");
let svg_read_biography_pause = document.getElementById("biography_read_paragraph_svg_pause");

checkbox_read_biography.addEventListener('change', function(event){
    if(event.target.checked){

        audio_read_biography.play();
        reading_biography = 1;

        svg_read_biography_play.style.display = "none";
        svg_read_biography_pause.style.display = "block";

    }
    else{
        audio_read_biography.pause();
        audio_read_biography.currentTime = 0;
        reading_biography = 0;

        svg_read_biography_play.style.display = "block";
        svg_read_biography_pause.style.display = "none";
    }
});
audio_read_biography.addEventListener('ended', function(){
    checkbox_read_biography.checked = false;
    svg_read_biography_play.style.display = "block";
    svg_read_biography_pause.style.display = "none";
});
