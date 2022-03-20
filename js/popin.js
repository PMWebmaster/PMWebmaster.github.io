$(".close").click(closePop);

$(window).click(function (eve){
  obj = eve.target;

  if(obj.id == "backgroundPopin"){
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
  $("#backgroundPopin").removeClass("hidePopin");
  $("#backgroundPopin").addClass("showPopin");
}

function popPropos(){
  $("#popinPropos").removeClass("hidePopin");
  $("#popinPropos").addClass("showPopin");
  $("#backgroundPopin").removeClass("hidePopin");
  $("#backgroundPopin").addClass("showPopin");
}

function popContact(){
  $("#popinContact").removeClass("hidePopin");
  $("#popinContact").addClass("showPopin");
  $("#backgroundPopin").removeClass("hidePopin");
  $("#backgroundPopin").addClass("showPopin");
}

function closePop(){
    $(".popin").each(
      function (){
        $(this).removeClass("showPopin");
        $(this).addClass("hidePopin");
      }
    );
    $("#backgroundPopin").removeClass("showPopin");
    $("#backgroundPopin").addClass("hidePopin");
}
