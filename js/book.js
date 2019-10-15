

$(function() {




  function init() {

setTimeout(function(){

  $(".loadingpage").fadeOut(600)

  }, 5000);

clicks=0;
animationlistleftbox=["greenbackgroundzoom.gif","waterdroplet.gif","waterdropstwo.gif","water.jpg"]
    // Toggle bg colour on and off
    $('.leftbox-top').on('click', function (e) {
      e.preventDefault();
    //  $('.leftbox-top').toggleClass('leftbox-top-still leftbox-top-gif');
    $('.leftbox-top').css('background',"url(assets/"+animationlistleftbox[clicks]+")");

      clicks = clicks+1;
      console.log(animationlistleftbox[clicks]);

      if(clicks>animationlistleftbox.length-1){
        clicks=0
      }


// copy and paste - change clicks 1 change name clicks 1 etc on to next box - change name animation rightbox change all instances/tags and then change the 'leftbox'to right box or whatever.

    })
/*
//this tells me the left box top on 'click' function targets leftboxtop to toggle the two classes i want to action.
*/



    // Toggle bg colour on and off
    $('.rightbox').on('click', function (e) {
      e.preventDefault();
      $('.rightbox').toggleClass('rightbox-still rightbox-gif');
    })

  }//End of init
  init();

});

