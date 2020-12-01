/* This JavaScript need jQuery to run */
$(document).ready(function() { //JavaScriptet nedan körs när HTML-sidan har laddat klart. 

    //Döljer alla sidor när sidan laddas
    function hidePageSections() { 
        $("#Start-Page").hide();
        $("#Presentation-Page").hide();
        $("#Services-Page").hide();
        $("#References-Page").hide();
        $("#Products-Page").hide();
        $("#Contact-Page").hide();
    }

    hidePageSections(); //Vid första laddning av webbsidan döljs alla sidor med hidePageSections()
    $("#Start-Page").show(); //Visar startsida vid första laddning
    $("#Start-Page").animate({opacity: '1'}, 1500);


    /*    <~~~ Navigering start ~~~~   */

    //Anropas när man klickar på navigeringslänkarna.
    //Döljer alla sidor, uppdaterar vilken sida som är aktiv just nu, samt
    //visar och uppdaterar Page-Title i mobilvyn, visar och döljer navbar i mobilvyn
        function loadPage(clickedId){ 
            hidePageSections(); 
            $('#' + clickedId + '-Page').show();
            $('.menuBtn').removeClass('activePage');
            $('#'+clickedId).addClass('activePage');
            if(clickedId == "Start"){
                $('#navBar-pageTitle').html("Start");
                classToggle();
            }
            else if(clickedId == "Presentation"){
                $('#navBar-pageTitle').html("Presentation");
                classToggle();
            }
            else if(clickedId == "Services"){
                $('#navBar-pageTitle').html("Tjänster");
                classToggle();
            }
            else if(clickedId == "References"){
                $('#navBar-pageTitle').html("Referenser");
                classToggle();
            }
            else if(clickedId == "Products"){
                $('#navBar-pageTitle').html("Produkter");
                classToggle();
            }
            else if(clickedId == "Contact"){
                $('#navBar-pageTitle').html("Kontakt");
                classToggle();
            }
        }

        //Anropas när man klickar på loggan.
        $('#header-logo').click(function (event) {
            event.preventDefault();
            hidePageSections(); 
            $('#Start-Page').show();
            $('.menuBtn').removeClass('activePage');
            $('#Start').addClass('activePage');
        
            $('#navBar-pageTitle').html('Start');
            $('nav').removeClass('navBar-show');
            $("#Start-Page").css({"opacity": "0"});
            $("#Start-Page").animate({opacity: '1'}, 1500);
        });

        //Anropas när man klickar på Start
        $('#Start').click(function (event) {
            event.preventDefault();
            hidePageSections(); 
            loadPage('Start');
            $("#Start-Page").css({"opacity": "0"});
            $("#Start-Page").animate({opacity: '1'}, 1500);
        });

        //Anropas när man klickar på Presentation
        $('#Presentation').click(function (event) {
            event.preventDefault();
            loadPage('Presentation');
        });

        //Anropas när man klickar på Services
        $('#Services').click(function (event) {
            event.preventDefault();
            loadPage('Services');
        });

        //Anropas när man klickar på References
        $('#References').click(function (event) {
            event.preventDefault();
            loadPage('References');
        });

        //Anropas när man klickar på Products
        $('#Products').click(function (event) {
            event.preventDefault();
            loadPage('Products');
        });
        
        //Anropas när man klickar på Contact
        $('#Contact').click(function (event) {
            event.preventDefault();
            loadPage('Contact');
        });

        //Lägger till/tar bort navBar-show, dvs. döljer eller visar navigerings-menyn
        function classToggle() {
            const navs = document.querySelectorAll('nav');
            navs.forEach(nav => nav.classList.toggle('navBar-show'));
        }

        //Vid klick på hamburgermenu-knappen i mobil-vy anropas funktionen ovanför.
        document.querySelector('#navButton-toggle').addEventListener('click', classToggle);

        /*    ~~~~ Navigering end ~~~>   */

        //Visar swe-logo när man trycker på uk-logo
        $("#header-flag").on("click", "#uk-logo", function(event){
            $("#swe-logo").css({"visibility": "visible"});
            $("#uk-logo").css({"visibility": "hidden"});
        });

        //Visar uk-logo när man trycker på swe-logo
        $("#header-flag").on("click", "#swe-logo", function(event){
            $("#uk-logo").css({"visibility": "visible"});
            $("#swe-logo").css({"visibility": "hidden"});
        });

        /*    <~~~ Products start ~~~~   */

        //Visar pil upp när man trycker på pil ned
        $("#xylon-arrows").on("click", "#arrow-down", function(event){
            $("#arrow-up").css({"visibility": "visible"});
            $("#arrow-down").css({"visibility": "hidden"});
            $("#xylon-info").css({"display": "inline-block"});
        });
        //Visar pil ned när man trycker på pil upp
        $("#xylon-arrows").on("click", "#arrow-up", function(event){
            $("#arrow-down").css({"visibility": "visible"});
            $("#arrow-up").css({"visibility": "hidden"});
            $("#xylon-info").css({"display": "none"});
        });
        //Visar pil upp när man trycker på pil ned
        $("#xylon-remote-arrows").on("click", "#arrow-down2", function(event){
            $("#arrow-up2").css({"visibility": "visible"});
            $("#arrow-down2").css({"visibility": "hidden"});
            $("#xylon-remote-info").css({"display": "inline-block"});
        });
        //Visar pil ned när man trycker på pil upp
        $("#xylon-remote-arrows").on("click", "#arrow-up2", function(event){
            $("#arrow-down2").css({"visibility": "visible"});
            $("#arrow-up2").css({"visibility": "hidden"});
            $("#xylon-remote-info").css({"display": "none"});
        });

        /*    ~~~~ Products end ~~~>   */

        /*    <~~~~ Footer start ~~~   */
        $('#Products-footer').click(function (event) {
            event.preventDefault();
            loadPage('Products');
        });

        $('#Contact-footer').click(function (event) {
            event.preventDefault();
            loadPage('Contact');
        });

        $('#FindUs-footer').click(function (event) {
            event.preventDefault();
            loadPage('Contact');
        });

        /*    ~~~~ Footer end ~~~>   */
});