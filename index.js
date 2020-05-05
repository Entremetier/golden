jQuery(document).ready(function($){
    $("#toggle-mobile-nav").click(function(){
        $("#header-move").toggleClass("mobile-nav-opened");
    });

    $("#header-move").click(function(e){
        let target = e.target;
        let isMobileNavButtonClicked = (
            $(target).hasClass("navbar-toggler") ||
            $(target).parent().hasClass("navbar-toggler")
        );

        if(isMobileNavButtonClicked){
            return;
        }

        $("#header-move").removeClass("mobile-nav-opened");
    });
})