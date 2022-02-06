$(".close").click(closePop);

$("#linkSoins").click(popSoins);
$("#linkPropos").click(popPropos);
$("#linkContact").click(popContact);

function popSoins(){
  $("#popinSoins").removeClass("hidePopin");
  $("#popinSoins").addClass("showPopin");
}

function popPropos(){
  $("#popinPropos").removeClass("hidePopin");
  $("#popinPropos").addClass("showPopin");
}

function popContact(){
  $("#popinContact").removeClass("hidePopin");
  $("#popinContact").addClass("showPopin");
}

function closePop(){
  $(".popin").each(
    function (){
      $(this).removeClass("showPopin");
      $(this).addClass("hidePopin");
    }
  );
}
