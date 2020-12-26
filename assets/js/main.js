(function($) {
    "use strict";
    
    // price slider
    var priceSlider = document.getElementById("myPriceRange");
    var priceSliderOutput = document.getElementById("myPriceOutput");

    priceSliderOutput.innerHTML = priceSlider.value;

    priceSlider.oninput = function() {
      priceSliderOutput.innerHTML = this.value;
    }


    jQuery(document).ready(function($) {

      // banner slider
     $('.slider-area').slick({
        autoplay: true,
        speed: 800,
        arrows:false,
        dots: true,
        fade:true
     });

    });

    
}(jQuery));