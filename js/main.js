$(document).ready(function() {

    //var tofix1_height = $('#tofix1').offset().top; //Reserve the original height
    //var tofix2_height = $('#tofix2').offset().top; //Reserve the original height
    var zoomed=false;
    var menuShowed=false;
    
    $(window).scroll(function() {
        var max_scroll = $(document).height() - $(window).height();
        var win_w = $(window).width();
        var current_pos = $(window).scrollTop();
        console.log(current_pos);

        

        
        if(current_pos>200){
            $('#nav').fadeOut();
        }
        if(current_pos<200){
            $('#nav').fadeIn();
        }
        


        if(current_pos<1000 && menuShowed){
            
            menuShowed = false;
        }
        if(current_pos>=1000 && !zoomed){
            $('#iphone').animate({height:"530vh",marginTop:"-80vh"});
            zoomed=true;
            console.log('zoomed in')
            $("html, body").animate({scrollTop: $("#menu").offset().top }, {duration: 500,easing: "swing"});
            
            menuShowed=true;
        }

        if(current_pos<=600 && zoomed){
            $('#iphone').animate({height:"90vh",marginTop:"0vh"});
            zoomed=false;
            console.log('zoomed back')
        }

        var new_width = win_w * current_pos / max_scroll;
        $('#scroll').text(current_pos);
        //$('#statusbar').css({
         //   'width': new_width
        //});



    });
});