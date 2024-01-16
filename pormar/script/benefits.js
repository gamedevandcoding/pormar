let benefit_checkboxes = document.getElementsByClassName("benefits_list_element_checkbox");
let benefit_paragraphs = document.getElementsByClassName("benefits_list_element_p");

for (let i = 0; i < benefit_checkboxes.length; i++) {
    benefit_checkboxes[i].addEventListener("change", function(){
        if (this.checked) {
            benefit_paragraphs[i].style.display = "block";
        } else {
            benefit_paragraphs[i].style.display = "none";
        }
    });
}