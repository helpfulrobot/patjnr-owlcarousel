<?php

class OwlCarousel extends Object
{

    public static function include_code()
    {
        Requirements::javascript(OWL_CAROUSEL_DIR . '/js/owl.carousel.js');
        Requirements::javascript(OWL_CAROUSEL_DIR . '/js/owl.carousel.init.js');
        Requirements::css(OWL_CAROUSEL_DIR . '/css/owl.carousel.css');
        Requirements::css(OWL_CAROUSEL_DIR . '/css/owl.theme.css');
        Requirements::css(OWL_CAROUSEL_DIR . '/css/owl.transitions.css');
        Requirements::css(OWL_CAROUSEL_DIR . '/css/owl.carousel.custom.css');
    }
}
