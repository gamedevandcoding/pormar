window.addEventListener("load", function(){

    try{
        

        let checkbox_biography_expand = document.getElementById("checkbox_biography_expand");
        let paragraph_biography_expand = document.getElementById("extra_biography_paragraph");
        let span_biography_expand = this.document.getElementById("biography_paragraph_span_text");
        checkbox_biography_expand.addEventListener("change", function(){
            if(checkbox_biography_expand.checked){ 
                paragraph_biography_expand.style.display = "inline";
                span_biography_expand.textContent = "Leggi di meno...";
            }
            else{ 
                paragraph_biography_expand.style.display = "none";
                span_biography_expand.textContent = "Continua a leggere...";
            }
        })


        function create_material_item(index_material_nav, material_img_texture_src, material_img_showcase_src, material_name, material_description){
    
            let material_nav_item = document.createElement("a");
            material_nav_item.className = "material_nav_item";
    
            let material_nav_item_img_container = document.createElement("div");
            material_nav_item_img_container.className = "material_nav_item_img_container";
            material_nav_item.appendChild(material_nav_item_img_container);
    
            let material_nav_item_img_texture = document.createElement("img");
            material_nav_item_img_texture.className = "material_nav_item_img_texture";
            material_nav_item_img_texture.src = material_img_texture_src;
            material_nav_item_img_texture.loading = "lazy";
            material_nav_item_img_container.appendChild(material_nav_item_img_texture);
    
            let material_nav_item_img_showcase = document.createElement("img");
            material_nav_item_img_showcase.className = "material_nav_item_img_showcase";
            material_nav_item_img_showcase.src = material_img_showcase_src;
            material_nav_item_img_showcase.loading = "lazy";
            material_nav_item_img_container.appendChild(material_nav_item_img_showcase);
            
            let material_nav_item_text_container = document.createElement("div");
            material_nav_item_text_container.className = "material_nav_item_text_container";
            material_nav_item.appendChild(material_nav_item_text_container);
    
            let material_nav_item_text_h1 = document.createElement("h1");
            material_nav_item_text_h1.className = "material_nav_item_text_h1";
            material_nav_item_text_h1.textContent = material_name;
            material_nav_item_text_container.appendChild(material_nav_item_text_h1);
    
            let material_nav_item_text_p = document.createElement("p");
            material_nav_item_text_p.className = "material_nav_item_text_p";
            material_nav_item_text_p.textContent = material_description;
            material_nav_item_text_container.appendChild(material_nav_item_text_p);
    
            let material_nav_item_text_span = document.createElement("span");
            material_nav_item_text_span.className = "material_nav_item_text_span";
            material_nav_item_text_span.textContent = "SCOPRI DI PIÙ";
            material_nav_item_text_container.appendChild(material_nav_item_text_span);
    
            index_material_nav.appendChild(material_nav_item);
        }
    
    
        function create_benefit_content(index_section_benefits){
    
            let section_benefits_content = document.createElement("div");
            section_benefits_content.className = "section_benefits_content";
            section_benefits_content.id = "index_content_benefits";
            index_section_benefits.appendChild(section_benefits_content);
    
            let benefits_subtitle_h2 = document.createElement("h2");
            benefits_subtitle_h2.className = "benefits_subtitle_h2";
            benefits_subtitle_h2.textContent = "PIETRE & MARMI";
            section_benefits_content.appendChild(benefits_subtitle_h2);
    
            let benefits_title = document.createElement("div");
            benefits_title.className = "benefits_title";
            section_benefits_content.appendChild(benefits_title);
    
            let benefits_title_h1 = document.createElement("h1");
            benefits_title_h1.className = "benefits_title_h1";
            benefits_title_h1.textContent = "SCOPRI BENEFICI";
            benefits_title.appendChild(benefits_title_h1);
    
            let benefits_read_description_label = document.createElement("label");
            benefits_read_description_label.className = "benefits_read_description_label";
            benefits_read_description_label.setAttribute("for", "benefits_audio_checkbox");
            benefits_title.appendChild(benefits_read_description_label);
    
            let benefits_read_description_checkbox = document.createElement("input");
            benefits_read_description_checkbox.type = "checkbox";
            benefits_read_description_checkbox.className = "benefits_read_description_checkbox";
            benefits_read_description_checkbox.id = "benefits_audio_checkbox";
            benefits_read_description_label.appendChild(benefits_read_description_checkbox);
    
            let benefits_read_description_play_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            benefits_read_description_play_svg.setAttribute("class", "benefits_read_description_svg");
            benefits_read_description_play_svg.setAttribute("id", "benefits_read_description_svg_play");
            benefits_read_description_play_svg.setAttribute("viewBox", "0 0 48.20898 55.66699");
            benefits_read_description_label.appendChild(benefits_read_description_play_svg);
            let benefits_read_description_play_svg_polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            benefits_read_description_play_svg_polygon.setAttribute("points", "0 0 0 55.667 48.209 27.833 0 0");
            benefits_read_description_play_svg.appendChild(benefits_read_description_play_svg_polygon);
    
            let benefits_read_description_pause_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            benefits_read_description_pause_svg.setAttribute("class", "benefits_read_description_svg");
            benefits_read_description_pause_svg.setAttribute("id", "benefits_read_description_svg_pause");
            benefits_read_description_pause_svg.setAttribute("viewBox", "0 0 33.42712 51.58337");
            benefits_read_description_label.appendChild(benefits_read_description_pause_svg);
            let benefits_read_description_pause_svg_rect01 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            benefits_read_description_pause_svg_rect01.setAttribute("width", "9.85437");
            benefits_read_description_pause_svg_rect01.setAttribute("height", "51.58337");
            benefits_read_description_pause_svg.appendChild(benefits_read_description_pause_svg_rect01);
            let benefits_read_description_pause_svg_rect02 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            benefits_read_description_pause_svg_rect02.setAttribute("x", "23.57288");
            benefits_read_description_pause_svg_rect02.setAttribute("width", "9.85425");
            benefits_read_description_pause_svg_rect02.setAttribute("height", "51.58337");
            benefits_read_description_pause_svg.appendChild(benefits_read_description_pause_svg_rect02);
    
            let benefits_list = document.createElement("ul");
            benefits_list.className = "benefits_list";
            benefits_list.id = "index_benefits_list";
            section_benefits_content.appendChild(benefits_list);
    
        }
        function create_benefit_element(index_benefits_list, benefits_title, benefits_paragraph){
    
            let benefits_list_element = document.createElement("li");
            benefits_list_element.className = "benefits_list_element";
    
            let benefits_list_element_label = document.createElement("label");
            benefits_list_element_label.className = "benefits_list_element_label";
            benefits_list_element.appendChild(benefits_list_element_label);
    
            let benefits_list_element_checkbox = document.createElement("input");
            benefits_list_element_checkbox.type = "checkbox";
            benefits_list_element_checkbox.className = "benefits_list_element_checkbox";
            benefits_list_element_label.appendChild(benefits_list_element_checkbox);
    
            let benefits_list_element_label_h2 = document.createElement("h2");
            benefits_list_element_label_h2.className = "benefits_list_element_label_h2";
            benefits_list_element_label_h2.textContent = benefits_title;
            benefits_list_element_label.appendChild(benefits_list_element_label_h2);
    
            let benefits_list_element_label_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            benefits_list_element_label_svg.setAttribute("class", "benefits_list_element_label_svg");
            benefits_list_element_label_svg.setAttribute("viewBox", "0 0 86.603 46.25");
            benefits_list_element_label.appendChild(benefits_list_element_label_svg);
            let benefits_list_element_label_svg_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            benefits_list_element_label_svg_path.setAttribute("d", "M43.301 46.25 86.603 0H0l43.301 46.25z");
            benefits_list_element_label_svg.appendChild(benefits_list_element_label_svg_path);
    
            let benefits_list_element_p = document.createElement("p");
            benefits_list_element_p.className = "benefits_list_element_p";
            benefits_list_element_p.textContent = benefits_paragraph;
            benefits_list_element.appendChild(benefits_list_element_p);
    
            index_benefits_list.appendChild(benefits_list_element);
    
        }
        function create_benefit_script(index_benefits_list){
    
            let benefit_script = document.createElement("script");
            benefit_script.type = "text/javascript";
            benefit_script.src = "script/benefits.js";
            index_benefits_list.appendChild(benefit_script);
        }
    
    
        let isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
        let index_material_nav = document.getElementById("index_material_nav");
        let material_nav_items = [
            {
                material_img_texture_src: "media/img/materiali/opz/pietra_leccese_texture.webp",
                material_img_showcase_src: "media/img/materiali/opz/pietra_leccese_showcase.webp",
                material_name: "PIETRA LECCESE",
                material_description: "Roccia calcarea argillosa salentina usata per l'architettura con ornamenti raffinati, caratterizzata dal colore beige chiaro con leggera grana."
            },
            {
                material_img_texture_src: "media/img/materiali/opz/porfido_texture.webp",
                material_img_showcase_src: "media/img/materiali/opz/porfido_showcase.webp",
                material_name: "PORFIDO",
                material_description: "Roccia magmatica quarzifera di colore viola, rosso, marrone e grigio formata da fenocristalli, conferisce un aspetto naturale ai tuoi ambienti esterni."
            },
            {
                material_img_texture_src: "media/img/materiali/opz/ardesia_texture.webp",
                material_img_showcase_src: "media/img/materiali/opz/ardesia_showcase.webp",
                material_name: "ARDESIA",
                material_description: "Roccia metamorfica scistosa ligure, di un colore grigio metallico molto elegante, famosa per la resistenza agli agenti atmosferici."
            }
        ];
        let index_section_benefits = document.getElementById("index_section_benefits");
        let benefits_list_element = [
            {
                benefits_title: "AUMENTO VALORE IMMOBILIARE",
                benefits_paragraph: "Rinnovare la tua proprietà con i nostri marmi di lusso e pietre eleganti è una scelta intelligente, perché potrai aumentare significativamente il valore della tua proprietà, consentendoti di valorizzare il tuo hotel e chiedere tariffe più alte, aumentare il canone d'affitto, ottenere un prezzo di vendita per il tuo immobile molto più alto, e dare un'atmosfera più raffinata e accativante al tuo negozio potenziando le tue vendite.",
            },
            {
                benefits_title: "EFFICIENZA ENERGETICA",
                benefits_paragraph: "Risparmia in bolletta arredando il tuo immobile con le nostre pietre naturali a massa termica isolante le quali oltre a donare ai tuoi spazi una grande eleganza, mantiene i tuoi ambienti caldi in inverno e freschi in estate, aumentando l'efficienza energetica della tua proprietà, e riducendo  i tuoi costi.",
            },
            {
                benefits_title: "PROTEGGE DALLE ALLERGIE",
                benefits_paragraph: "Il nostro catalogo di marmo e pietre è caratterizzato da materiali con una composizione che elimina la presenza di agenti allergenici, contribuendo così a rendere il tuo ambiente più pulito e protetto da polvere ed acari, rivelandosi un investimento molto intelligente per la sua funzionalità, eleganza, e resistenza.",
            },
            {
                benefits_title: "GRANDE RESISTENZA",
                benefits_paragraph: "Rinnovare la tua proprietà con i nostri marmi e pietre di alta qualità, è la scelta ideale per rendere il tuo immobile elegante, e resistente nel tempo. I nostri materiali sono lavorati in modo tale da garantire una grande durabilità contro gli agenti atmosferici e l'usura quotidiana eliminando i tuoi costi di manutenzione.",
            }
        ];
        if(!isMobileDevice.test(navigator.userAgent)){
            

            for(var i = 0; i < material_nav_items.length; i++){ create_material_item(index_material_nav, material_nav_items[i].material_img_texture_src, material_nav_items[i].material_img_showcase_src, material_nav_items[i].material_name, material_nav_items[i].material_description); }
    
            create_benefit_content(index_section_benefits);
            let index_benefits_list = document.getElementById("index_benefits_list");
            for(var i = 0; i < benefits_list_element.length; i++){ create_benefit_element(index_benefits_list, benefits_list_element[i].benefits_title, benefits_list_element[i].benefits_paragraph); }
            create_benefit_script(index_benefits_list);
            index_section_benefits.style.display = "block";
    
        }
        

        function create_popup_gallery(main_parent){

            let popup_gallery_container = document.createElement("div");
            popup_gallery_container.className = "popup_gallery_container";
            popup_gallery_container.id = "popup_gallery_div";
            main_parent.appendChild(popup_gallery_container);

            let popup_gallery_background = document.createElement("div");
            popup_gallery_background.className = "popup_gallery_background";
            popup_gallery_background.id = "popup_gallery_bg";
            popup_gallery_container.appendChild(popup_gallery_background);

            let popup_gallery_image_content = document.createElement("div");
            popup_gallery_image_content.className = "popup_gallery_image_content";
            popup_gallery_container.appendChild(popup_gallery_image_content);

            let popup_gallery_image = document.createElement("img");
            popup_gallery_image.className = "popup_gallery_image";
            popup_gallery_image.id = "popup_gallery_img";
            popup_gallery_image_content.appendChild(popup_gallery_image);

            let popup_gallery_controls = document.createElement("div");
            popup_gallery_controls.className = "popup_gallery_controls";
            popup_gallery_image_content.appendChild(popup_gallery_controls);

            let popup_gallery_btn_close = document.createElement("button");
            popup_gallery_btn_close.className = "popup_gallery_button_close";
            popup_gallery_btn_close.id = "popup_gallery_btn_close";
            popup_gallery_controls.appendChild(popup_gallery_btn_close);
            let popup_gallery_btn_close_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            popup_gallery_btn_close_svg.setAttribute("class", "popup_gallery_button_close_svg");
            popup_gallery_btn_close_svg.setAttribute("viewBox", "0 0 225.34814 225.34814");
            popup_gallery_btn_close.appendChild(popup_gallery_btn_close_svg);
            let popup_gallery_btn_close_svg_polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            popup_gallery_btn_close_svg_polygon.setAttribute("points", "128.697 112.669 225.338 16.028 209.31 0 112.669 96.641 16.038 0.01 0.01 16.038 96.641 112.669 0 209.31 16.028 225.337 112.669 128.697 209.32 225.348 225.348 209.32 128.697 112.669");
            popup_gallery_btn_close_svg.appendChild(popup_gallery_btn_close_svg_polygon);

            let popup_gallery_img_btn_container = document.createElement("div");
            popup_gallery_img_btn_container.className = "popup_gallery_img_btn_container";
            popup_gallery_controls.appendChild(popup_gallery_img_btn_container);

            let popup_gallery_img_previous_btn = document.createElement("button");
            popup_gallery_img_previous_btn.className = "popup_gallery_img_btn";
            popup_gallery_img_previous_btn.id = "popup_gallery_img_previous_btn";
            popup_gallery_img_btn_container.appendChild(popup_gallery_img_previous_btn);
            let popup_gallery_img_previous_btn_svg_div = document.createElement("div");
            popup_gallery_img_previous_btn_svg_div.className = "popup_gallery_img_next_btn_svg_div";
            popup_gallery_img_previous_btn.appendChild(popup_gallery_img_previous_btn_svg_div);
            let popup_gallery_img_previous_btn_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            popup_gallery_img_previous_btn_svg.setAttribute("class", "popup_gallery_img_btn_svg");
            popup_gallery_img_previous_btn_svg.setAttribute("viewBox", "0 0 128.69702 225.32788");
            popup_gallery_img_previous_btn_svg_div.appendChild(popup_gallery_img_previous_btn_svg);
            let popup_gallery_img_previous_btn_svg_polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            popup_gallery_img_previous_btn_svg_polygon.setAttribute("points", "128.697 16.028 112.669 0 16.028 96.641 0.01 112.659 0 112.669 112.659 225.328 128.687 209.3 32.056 112.669 128.697 16.028");
            popup_gallery_img_previous_btn_svg.appendChild(popup_gallery_img_previous_btn_svg_polygon);

            let popup_gallery_img_next_btn = document.createElement("button");
            popup_gallery_img_next_btn.className = "popup_gallery_img_btn";
            popup_gallery_img_next_btn.id = "popup_gallery_img_next_btn";
            popup_gallery_img_btn_container.appendChild(popup_gallery_img_next_btn);
            let popup_gallery_img_next_btn_svg_div = document.createElement("div");
            popup_gallery_img_next_btn_svg_div.className = "popup_gallery_img_next_btn_svg_div";
            popup_gallery_img_next_btn.appendChild(popup_gallery_img_next_btn_svg_div);
            let popup_gallery_img_next_btn_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            popup_gallery_img_next_btn_svg.setAttribute("class", "popup_gallery_img_btn_svg");
            popup_gallery_img_next_btn_svg.setAttribute("viewBox", "0 0 128.69702 225.32788");
            popup_gallery_img_next_btn_svg_div.appendChild(popup_gallery_img_next_btn_svg);
            let popup_gallery_img_next_btn_svg_polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            popup_gallery_img_next_btn_svg_polygon.setAttribute("points", "128.687 112.659 112.669 96.641 16.028 0 0 16.028 96.641 112.669 0.01 209.3 16.038 225.328 128.697 112.669 128.687 112.659");
            popup_gallery_img_next_btn_svg.appendChild(popup_gallery_img_next_btn_svg_polygon);

            let popup_gallery_span = document.createElement("span");
            popup_gallery_span.className = "popup_gallery_span";
            popup_gallery_span.id = "popup_gallery_text";
            popup_gallery_controls.appendChild(popup_gallery_span);

        }
        create_popup_gallery(document.body);

        let popup_gallery_div = document.getElementById("popup_gallery_div");
        let popup_gallery_bg = document.getElementById("popup_gallery_bg");
        let popup_gallery_img = document.getElementById("popup_gallery_img");
        let popup_gallery_text = document.getElementById("popup_gallery_text");

        let section_gallery_list_elements = document.getElementsByClassName("section_gallery_list_element");
        let section_gallery_list_element_imgs = document.getElementsByClassName("section_gallery_list_element_img");
        let section_gallery_list_element_spans = document.getElementsByClassName("section_gallery_list_element_span");

        var current_gallery_index = 0;
        var total_gallery_list_elements = section_gallery_list_elements.length;
        for (let i = 0; i < total_gallery_list_elements; i++){
            section_gallery_list_elements[i].addEventListener("click", function(){
                popup_gallery_div.style.display = "flex";
                popup_gallery_img.src = section_gallery_list_element_imgs[i].getAttribute('src');
                popup_gallery_text.textContent = section_gallery_list_element_spans[i].textContent;
                document.body.style.overflow = 'hidden';
                current_gallery_index = i;
            });
        }
        popup_gallery_bg.addEventListener("click", function(){
            popup_gallery_div.style.display = "none";
            popup_gallery_img.src = "";
            popup_gallery_text.textContent = "";
            document.body.style.overflow = 'auto';
            current_gallery_index = 0;
        });

        let popup_gallery_close = document.getElementById("popup_gallery_btn_close");
        let popup_gallery_next_btn = document.getElementById("popup_gallery_img_next_btn");
        let popup_gallery_previous_btn = document.getElementById("popup_gallery_img_previous_btn");
        popup_gallery_close.addEventListener("click", function(){
            popup_gallery_div.style.display = "none";
            popup_gallery_img.src = "";
            popup_gallery_text.textContent = "";
            document.body.style.overflow = 'auto';
            current_gallery_index = 0;
        });
        popup_gallery_next_btn.addEventListener("click", function(){
            var next_gallery_index;
            if(current_gallery_index < total_gallery_list_elements - 1){
                next_gallery_index = current_gallery_index + 1;
                popup_gallery_img.src = section_gallery_list_element_imgs[next_gallery_index].getAttribute('src');
                popup_gallery_text.textContent = section_gallery_list_element_spans[next_gallery_index].textContent;
            }
            else{ 
                next_gallery_index = 0;
                popup_gallery_img.src = section_gallery_list_element_imgs[next_gallery_index].getAttribute('src');
                popup_gallery_text.textContent = section_gallery_list_element_spans[next_gallery_index].textContent;
            }
            current_gallery_index = next_gallery_index;

        });
        popup_gallery_previous_btn.addEventListener("click", function(){
            var previous_gallery_index;
            if(current_gallery_index < 1){
                previous_gallery_index = total_gallery_list_elements - 1;
                popup_gallery_img.src = section_gallery_list_element_imgs[previous_gallery_index].getAttribute('src');
                popup_gallery_img.textContent = section_gallery_list_element_spans[previous_gallery_index].textContent;
            }
            else{
                previous_gallery_index = current_gallery_index - 1;
                popup_gallery_img.src = section_gallery_list_element_imgs[previous_gallery_index].getAttribute('src');
                popup_gallery_img.textContent = section_gallery_list_element_spans[previous_gallery_index].textContent;
            }
            current_gallery_index = previous_gallery_index;
        });

    }
    catch(error){ console.log("Error:", error); }


});