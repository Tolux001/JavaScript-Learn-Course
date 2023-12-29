<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.slim.min.js"></script>
 

jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 300) {
        jQuery('#header_frame').css('background-color', '#FFFFFF');
    } else {
       jQuery('#header_frame').css('background-color', '#EFF2F4');
    }
});


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

.active { background-color: #fff}


//Testing as we know it is making sure a piece of code or large junk of code works as expected type of testing
//e2e => webdriver js || Protractor || Cypress
//Integration => React testing library || Enzyme
//unit
