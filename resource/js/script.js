$(document).ready(function() {
    // sticky nav
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
           $('nav').removeClass('sticky');
        }
        }, {
        offset:'60px;'
    });  
    //scroll on buttons
    $('.js--scroll-to-plan-btn').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},2000);       
    });
    $('.js--scroll-to-start-btn').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);       
    });
     // navigation scroll   
       $("a").on('click', function(event) {     
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
            window.location.hash = hash;
          });
        } 
      });
      //animation on scroll
      $('.js--wp-1').waypoint(function(direction) {
          $('.js--wp-1').addClass('animate__animated animate__fadeIn');
      }, {
          offset:'65%'
      });
      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInLeftBig');
    }, {
        offset:'50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset:'50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset:'50%'
    });
});
