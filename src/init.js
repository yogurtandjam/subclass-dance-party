$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction (
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.LineUpButton').on('click', function(event) {
    var top = 50;
    var middle = $('body').width()/2;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(top, middle);
      top += 30;
    }
  });

  $('.GoBack').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 50
      );
    }
  });
  $('.Fusion').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      for (var j = 0; j < window.dancers.length; j++) {
        if(i !== j){
          var first = $(window.dancers[i].$node).offset().top;  
          var second = $(window.dancers[j].$node).offset().top;
          var distance = `${parseInt(first) - parseInt(second)}`;
          if(Math.abs(distance) < 20) {
            console.log(Math.abs(distance))
            // $(window.dancers[i].$node).animate({'height':'200px'});
            $(window.dancers[i].$node).remove();
            console.log(window.dancers[i].$node);          
          }
        }
      }
    }
  })
  $(document).mousemove(function(e){
    $(".specialDancer").css({left:e.pageX, top:e.pageY + 50});
  });
});
