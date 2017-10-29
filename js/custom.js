$(document).ready(function(){
  $(".txt_center").each(function(){
    var elem_width = $(this).width();
    $(this).css({
      "left":"50%",
      "margin-left": elem_width / 2 * (-1)
    })
  });
  $(".box h1").each(function(){
    var elem_height = $(this).height();
    var elem_margin_top = $(this).css("margin-top");
    var elem_margin_top_new =  +elem_margin_top.substr(0, elem_margin_top.length - 2);
    $(this).css("top", (elem_height + elem_margin_top_new) * (1));
  });

  var number_all = $(".box h1").length;
  var number = 1;

  function counter(i){
      if (!i){
        $(".box h1").eq(number-1).addClass("active");
      }
      else if (i == 1){
        if (number > 1){
          number = number-1;
          $(".box h1").css("top","100px");
          $(".active").addClass("active-exit-bot");
          $(".active").removeClass("active");
          setTimeout(function() {
            $(".box h1").eq(number-1).addClass("active");
          }, 10);
          setTimeout(function() {
            $(".box h1").removeClass("active-exit-bot");
          }, 600);
          $("body").css("background-position","0 -100vh");
        }
      }
      else if (i == 2){
        if (number < number_all){
          number = number+1;
          $(".box h1").css("top","100px");
          $(".active").addClass("active-exit-bot");
          $(".active").removeClass("active");
          setTimeout(function() {
            $(".box h1").eq(number-1).addClass("active");
          }, 10);
          setTimeout(function() {
            $(".box h1").removeClass("active-exit-bot");
          }, 600);
          $("body").css("background-position","0 0vh");
        }
      }
      if(number==1){
        $("#btn_prev").css("opacity",0.3);
      }
      else{
        $("#btn_prev").css("opacity",1);
      };
      if(number==number_all){
        $("#btn_next").css("opacity",0.3);
      }
      else{
        $("#btn_next").css("opacity",1);
      };
  }


  $("#btn_prev").click(function(){
    counter(1);
  });
  $("#btn_next").click(function(){
    counter(2);
  });
  counter();
});
