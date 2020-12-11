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


        /*    <~~~ References start ~~~~   */
        $("#buntlinje-up").hide();
        $("#buntlinje-down").show();
        $('#buntlinje-show-hide').click(function (event) {
            event.preventDefault();
            $( "#buntlinje" ).toggle();
            $( "#buntlinje-down" ).toggle();
            $( "#buntlinje-up" ).toggle();
        });
        $("#fingerskarvslinje-up").hide();
        $("#fingerskarvslinje-down").show();
        $('#fingerskarvslinje-show-hide').click(function (event) {
            event.preventDefault();
            $( "#fingerskarvslinje" ).toggle();
            $( "#fingerskarvslinje-down" ).toggle();
            $( "#fingerskarvslinje-up" ).toggle();
        });

        $("#hyvellinje-up").hide();
        $("#hyvellinje-down").show();
        $('#hyvellinje-show-hide').click(function (event) {
            event.preventDefault();
            $( "#hyvellinje" ).toggle();
            $( "#hyvellinje-down" ).toggle();
            $( "#hyvellinje-up" ).toggle();
        });

        $("#justerverk-up").hide();
        $("#justerverk-down").show();
        $('#justerverk-show-hide').click(function (event) {
            event.preventDefault();
            $( "#justerverk" ).toggle();
            $( "#justerverk-down" ).toggle();
            $( "#justerverk-up" ).toggle();
        });

        $("#klyvlinje-up").hide();
        $("#klyvlinje-down").show();
        $('#klyvlinje-show-hide').click(function (event) {
            event.preventDefault();
            $( "#klyvlinje" ).toggle();
            $( "#klyvlinje-down" ).toggle();
            $( "#klyvlinje-up" ).toggle();
        });

        $("#kombiverk-up").hide();
        $("#kombiverk-down").show();
        $('#kombiverk-show-hide').click(function (event) {
            event.preventDefault();
            $( "#kombiverk" ).toggle();
            $( "#kombiverk-down" ).toggle();
            $( "#kombiverk-up" ).toggle();
        });

        $("#målningslinje-up").hide();
        $("#målningslinje-down").show();
        $('#målningslinje-show-hide').click(function (event) {
            event.preventDefault();
            $( "#målningslinje" ).toggle();
            $( "#målningslinje-down" ).toggle();
            $( "#målningslinje-up" ).toggle();
        });

        $("#paketläggare-up").hide();
        $("#paketläggare-down").show();
        $('#paketläggare-show-hide').click(function (event) {
            event.preventDefault();
            $( "#paketläggare" ).toggle();
            $( "#paketläggare-down" ).toggle();
            $( "#paketläggare-up" ).toggle();
        });

        $("#panna-up").hide();
        $("#panna-down").show();
        $('#panna-show-hide').click(function (event) {
            event.preventDefault();
            $( "#panna" ).toggle();
            $( "#panna-down" ).toggle();
            $( "#panna-up" ).toggle();
        });

        $("#rotreducerare-up").hide();
        $("#rotreducerare-down").show();
        $('#rotreducerare-show-hide').click(function (event) {
            event.preventDefault();
            $( "#rotreducerare" ).toggle();
            $( "#rotreducerare-down" ).toggle();
            $( "#rotreducerare-up" ).toggle();
        });

        $("#råsortering-up").hide();
        $("#råsortering-down").show();
        $('#råsortering-show-hide').click(function (event) {
            event.preventDefault();
            $( "#råsortering" ).toggle();
            $( "#råsortering-down" ).toggle();
            $( "#råsortering-up" ).toggle();
        });

        $("#ströläggare-up").hide();
        $("#ströläggare-down").show();
        $('#ströläggare-show-hide').click(function (event) {
            event.preventDefault();
            $( "#ströläggare" ).toggle();
            $( "#ströläggare-down" ).toggle();
            $( "#ströläggare-up" ).toggle();
        });

        $("#säkerhet-up").hide();
        $("#säkerhet-down").show();
        $('#säkerhet-show-hide').click(function (event) {
            event.preventDefault();
            $( "#säkerhet" ).toggle();
            $( "#säkerhet-down" ).toggle();
            $( "#säkerhet-up" ).toggle();
        });

        $("#diverse-up").hide();
        $("#diverse-down").show();
        $('#diverse-show-hide').click(function (event) {
            event.preventDefault();
            $( "#diverse" ).toggle();
            $( "#diverse-down" ).toggle();
            $( "#diverse-up" ).toggle();
        });
               
        /*    ~~~~ References end ~~~>   */


        /*    <~~~ Products start ~~~~   */

        //Visar pil upp när man trycker på pil ned
        $('#xylon-arrow-down').click(function (event) {
            event.preventDefault();
            $("#arrow-up").css({"visibility": "visible"});
            $("#arrow-down").css({"visibility": "hidden"});
            $("#xylon-arrow-down").css({"display": "none"});
            $("#xylon-arrow-up").css({"display": "inline-block"});
            $("#xylon-info").css({"display": "inline-block"});
        });
        //Visar pil ned när man trycker på pil upp
        $('#xylon-arrow-up').click(function (event) {
            event.preventDefault();
            $("#arrow-up").css({"visibility": "hidden"});
            $("#arrow-down").css({"visibility": "visible"});
            $("#xylon-arrow-down").css({"display": "inline-block"});
            $("#xylon-arrow-up").css({"display": "none"});
            $("#xylon-info").css({"display": "none"});
        });
        //Visar pil upp när man trycker på pil ned
        $('#xylon-remote-arrow-down').click(function (event) {
            event.preventDefault();
            $("#arrow-up2").css({"visibility": "visible"});
            $("#arrow-down2").css({"visibility": "hidden"});
            $("#xylon-remote-arrow-down").css({"display": "none"});
            $("#xylon-remote-arrow-up").css({"display": "inline-block"});
            $("#xylon-remote-info").css({"display": "inline-block"});
        });
        //Visar pil ned när man trycker på pil upp
        $('#xylon-remote-arrow-up').click(function (event) {
            event.preventDefault();
            $("#arrow-up2").css({"visibility": "hidden"});
            $("#arrow-down2").css({"visibility": "visible"});
            $("#xylon-remote-arrow-down").css({"display": "inline-block"});
            $("#xylon-remote-arrow-up").css({"display": "none"});
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

        $('#xylon-footer').click(function (event) {
            event.preventDefault();
            loadPage('Products');
            $("#arrow-up").css({"visibility": "visible"});
            $("#arrow-down").css({"visibility": "hidden"});
            $("#xylon-arrow-down").css({"display": "none"});
            $("#xylon-arrow-up").css({"display": "inline-block"});
            $("#xylon-info").css({"display": "inline-block"});
        });
        $('#xylon-remote-footer').click(function (event) {
            event.preventDefault();
            loadPage('Products');
            $("#arrow-up2").css({"visibility": "visible"});
            $("#arrow-down2").css({"visibility": "hidden"});
            $("#xylon-remote-arrow-down").css({"display": "none"});
            $("#xylon-remote-arrow-up").css({"display": "inline-block"});
            $("#xylon-remote-info").css({"display": "inline-block"});

        });

        /*    ~~~~ Footer end ~~~>   */
});