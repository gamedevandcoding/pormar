<?php echo "<!DOCTYPE html><html lang='it'><head> <title>PORMAR.IT | CONTATTACI</title><link href='style/index.css' rel='stylesheet' media='screen'>"; ?>
        <?php include_once 'root/header.php'; ?>
            
            
            <div class="main_content">
                
            
                <!---------------- CONTACTS ---------------->
                <section class="section_contact">
                    <div class="section_contact_content">
                        <div class="section_contact_title">
                            <h1 class="section_contact_h1">CONTATTACI</h1>
                            <p class="section_contact_p">Compila il seguente modulo per essere ricontattato gratuitamente dal nostro ufficio tecnico.</p>
                        </div>
                        <form class="contact_form">
                            <div class="contact_form_info">
                                <input type="text" class="contact_form_info_input" name="contact_form_name" spellcheck="false" autocomplete="off" maxlength="" placeholder="Nome">
                                <input type="text" class="contact_form_info_input" name="contact_form_surname" spellcheck="false" autocomplete="off" maxlength="" placeholder="Cognome">
                                <input type="text" class="contact_form_info_input" name="contact_form_telephone" spellcheck="false" autocomplete="off" maxlength="" placeholder="Telefono">
                                <input type="text" class="contact_form_info_input" name="contact_form_email" spellcheck="false" autocomplete="off" maxlength="" placeholder="Email">
                            </div>
                            <div class="contact_form_message">
                                <div class="contact_form_message_object">
                                    <select class="contact_form_message_object_select" name="contact_form_object">
                                        <option value="" disabled selected hidden>Oggetto</option>
                                        <option value="RQI">Richiesta Informazioni</option>
                                        <option value="BKA">Prenota Appuntamento</option>
                                        <option value="RCD">Rendering Personalizzato</option>
                                        <option value="CAR">Assistenza Clienti</option>
                                        <option value="WUS">Lavora con Noi</option>
                                    </select>
                                    <svg class="contact_form_message_object_svg" viewBox="0 0 86.603 46.25"><path d="M43.301 46.25 86.603 0H0l43.301 46.25z"/></svg>
                                </div>
                                <div class="contact_form_message_text_wrapper">
                                    <textarea class="contact_form_message_text" name="contact_form_message" spellcheck="false" autocomplete="off" maxlength="250" id="contact_form_textfield" placeholder="Scrivi qui il tuo Messaggio Brevemente."></textarea>
                                    <span class="contact_form_message_text_counter">0 / 250</span>
                                </div>
                                <div class="contact_form_message_availability">
                                    <select class="contact_form_message_availability_select" name="contact_form_availability">
                                        <option value="" disabled selected hidden>Quando sei disponibile ?</option>
                                        <option value="mor">09:30 - 12:30</option>
                                        <option value="brk">12:30 - 14:30</option>
                                        <option value="aft">14:30 - 18:30</option>
                                        <option value="eve">18:30 - 22:30</option>
                                        <option value="alw">Tutto il giorno</option>
                                    </select>
                                    <svg class="contact_form_message_availability_svg" viewBox="0 0 86.603 46.25"><path d="M43.301 46.25 86.603 0H0l43.301 46.25z"/></svg>
                                </div>
                            </div>
                            <label class="contact_form_privacy_label">
                                <input type="checkbox" class="contact_form_privacy_checkbox">
                                <div class="contact_form_privacy_tick_div"><svg class="contact_form_privacy_tick_svg" viewBox="0 0 32 23.45"><path d="M29.94 0 11.09 19.2l-8.98-9.15L0 12.15l11.09 11.3L32 2.15 29.94 0z"/></svg></div>
                                <p class="contact_form_privacy_paragraph">Acconsento al trattamento dei dati secondo la normativa sulla privacy</p>
                            </label>
                            <button type="submit" class="contact_form_submit">CONFERMA</button>
                        </form>
                    </div>
                </section>
                <!---------------- CONTACTS ---------------->


            <?php include_once 'root/footer.php'; ?>
