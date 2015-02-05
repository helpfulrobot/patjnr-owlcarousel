$(document).ready(function() {

    var owl = $(".owlPanelCarousel");
    owl.owlCarousel({
        items : 3,
        itemsDesktop : [1000,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [990,2], // betweem 900px and 601px
        itemsTablet: [620,1], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        scrollPerPage:false,
        slideSpeed:2000,
        stopOnHover:true,
        autoPlay : 8000
    });
 
});