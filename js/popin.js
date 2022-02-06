$(".close").click(closePop);

$(window).click(function (eve){
  obj = eve.target;

  if(!$(obj).hasClass("popin") && obj.id != "linkSoins" && obj.id != "linkPropos" && obj.id != "linkContact"){
    closePop();
  }
  else if (obj.id == "linkSoins"){
    popSoins();
  }
  else if (obj.id == "linkPropos"){
    popPropos();
  }
  else if (obj.id == "linkContact"){
    popContact();
  }
});

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
