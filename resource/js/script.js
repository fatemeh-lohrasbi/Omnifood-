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
     /* Navigation scroll */    
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
});
