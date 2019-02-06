
$(document).ready(function() {
var gridContainer = document.querySelector("gridContainer")});

var providence = {
  jan:[14,20,31,32,24,13,19,36,42,37,51,62,63,26,23,36,36,34,37,51,51,40,57,44,32,37,53,52,42,33,32],
  feb:[45,38,29,46,46,35,51,35,33,54,58,59,37,52,53,56,38,44,51,66,64,62,43,60,44,52,55,59],
  mar:[63,35,35,45,45,42,40,40,40,44,48,46,37,40,45,41,46,37,41,43,40,46,50,51,41,45,52,53,56,64,57],
  apr:[53,54,54,54,55,55,56,56,56,57,57,57,58,58,58,69,69,60,60,60,61,63,66,62,56,70,60,73,60,52],
  may:[70,89,91,82,75,63,70,70,71,73,73,73,54,59,67,65,67,63,59,78,75,69,80,77,88,91,67,66,86,78,73],
  june:[72,84,66,56,72,67,67,81,81,72,70,75,74,83,69,85,87,86,86,84,81,79,65,79,80,78,79,72,90,88],
  july:[95,86,89,93,90,83,78,82,89,94,81,85,80,78,85,88,89,85,83,83,79,78,83,84,82,85,89,85,85,85,85],
  aug:[84,93,91,83,91,94,92,90,90,89,76,81,74,85,89,90,88,88,76,79,75,86,78,82,79,82,88,95,95,92,77],
  sep:[80,79,93,90,83,95,73,69,65,64,84,72,72,75,77,81,82,79,69,70,71,73,65,59,71,79,71,60,74,70],
  oct:[71,69,67,70,69,65,78,60,77,83,77,64,54,58,69,68,63,48,60,64,49,50,59,50,51,46,52,58,60,51,58],
  nov:[67,68,67,57,51,65,63,57,52,51,45,50,58,40,33,42,49,44,47,40,42,24,32,46,48,46,45,44,45,41],
  dec:[45,59,59,43,38,42,38,32,35,39,36,38,36,47,52,43,42,37,41,49,59,54,41,36,40,40,40,56,56,37,45],
  name:"Providence, RI"
};

var miami = {
  jan:[80,72,69,60,64,70,73,79,78,79,81,84,76,74,76,76,74,64,73,77,80,81,84,82,75,78,80,82,84,73,74],
  feb:[79,82,75,80,84,79,83,84,83,84,85,84,85,83,82,83,84,84,84,84,83,83,82,82,82,84,85,81],
  mar:[84,88,80,79,76,78,83,73,72,78,87,78,74,73,75,77,80,86,86,89,81,73,77,76,80,84,78,79,80,82,83],
  apr:[83,83,83,83,83,83,88,88,91,91,86,82,83,86,87,82,80,82,84,88,84,86,84,91,85,83,83,86,84,84],
  may:[83,83,84,83,84,86,88,86,86,84,85,80,81,84,87,86,82,85,78,80,81,84,84,86,86,81,78,83,81,86,88],
  june:[86,89,92,92,93,94,89,88,86,85,85,87,88,88,89,89,90,89,88,92,94,94,91,90,90,90,89,92,90,87],
  july:[90,91,89,89,90,90,90,91,92,90,90,91,93,91,91,91,92,93,93,92,94,93,94,88,92,92,90,93,87,85,90],
  aug:[90,90,90,90,90,91,90,90,92,94,91,88,89,90,91,90,91,90,90,91,90,90,90,90,88,90,90,89,89,87,89],
  sep:[89,87,81,89,89,88,85,85,89,86,89,92,92,90,91,90,91,90,90,91,90,89,90,91,90,91,90,90,90,90],
  oct:[90,88,87,88,88,87,86,87,86,90,89,90,90,88,89,89,88,88,87,89,91,85,85,87,86,89,88,81,83,84,84],
  nov:[85,88,83,85,85,85,85,86,85,88,85,84,86,86,84,74,77,82,84,84,83,80,81,83,84,85,73,64,73,77],
  dec:[83,86,87,85,75,77,79,82,84,73,66,75,80,82,82,79,71,77,78,83,74,69,74,76,76,77,81,82,83,81,82],
  name:"Miami, FL"
};


var washington = {
  jan:[26,35,27,21,21,23,39,51,43,62,64,62,28,32,43,37,47,51,63,61,65,68,48,42,50,63,57,48,41,41],
  feb:[54,43,36.37,39,43,43,38,46,50,68,65,43,53,74,67,44,51,50,78,82,67,48,53,54,53,58,64],
  mar:[59,54,53,53,49,46,51,46,46,49,52,46,47,44,55,47,46,59,56,43,36,49,51,52,48,50,48,58,78,77,61],
  apr:[67,50,56,73,56,72,67,51,46,55,57,78,86,85,69,62,49,62,59,61,63,67,69,69,63,67,73,64,78,58,73],
  may:[83,91,90,90,76,73,77,78,80,83,85,90,73,81,89,75,69,72,89,82,80,83,83,87,86,87,85,72,83,81,86],
  june:[90,86,75,80,84,78,79,84,86,81,67,79,85,87,85,89,89,92,95,86,86,77,81,91,85,84,82,89,93,91],
  july:[93,95,97,93,92,89,82,85,88,96,94,92,89,91,88,98,92,88,88,86,75,83,85,83,86,89,91,87,87,78,84],
  aug:[89,86,84,90,91,91,91,94,92,92,91,87,88,87,92,90,94,90,87,82,82,86,81,84,82,88,91,94,94,93,90],
  sep:[89,89,93,95,93,93,91,77,67,76,77,86,82,78,83,83,80,84,84,87,83,78,80,66,68,82,87,73,77,80,76],
  oct:[81,84,87,90,77,75,82,85,83,84,83,70,62,60,74,67,70,59,66,69,56,58,72,58,55,51,54,62,62,65,69],
  nov:[76,73,61,59,58,61,66,61,52,50,48,50,50,46,41,54,51,52,59,56,55,42,35,48,60,52,45,40,42,47],
  dec:[45,58,62,48,41,45,44,40,35,41,47,47,54,49,55,50,58,47,51,62,67,53,49,48,44,47,53,57,58,47,51],
  name:"Washington, DC"
};

var sanfrancisco = {
  jan:[61,58,63,64,59,52,56,59,56,60,59,63,58,61,60,59,56,57,57,57,58,58,60,58,56,60,66,63,65,67],
  feb:[71,73,74,75,77,75,71,74,76,68,61,57,63,58,63,65,67,53,50,52,55,52,52,54,59,51,56,55],
  mar:[58,53,53,55,61,66,69,60,60,58,68,67,61,58,56,54,57,56,64,59,64,60,59,55,55,61,68,76,81,79,60],
  apr:[65,63,59,60,61,61,62,61,74,63,60,57,63,68,60,55,61,57,60,65,71,72,70,59,58,58,63,63,61,60],
  may:[62,60,58,62,56,59,68,60,62,66,68,69,61,58,63,63,62,60,59,59,61,57,59,61,63,63,70,77,69,58,60],
  june:[68,78,73,64,63,60,61,64,63,65,67,71,75,64,59,67,66,63,60,59,69,71,80,73,64,64,58,71,68,67],
  july:[62,63,68,64,68,73,67,67,74,77,68,66,68,64,65,65,65,66,66,71,66,68,65,64,64,61,59,65,61,61,61],
  aug:[60,63,71,68,66,69,59,68,72,66,69,67,61,63,67,66,65,66,64,61,64,67,66,66,65,66,68,68,71,68,66],
  sep:[64,65,65,66,62,61,66,68,69,70,73,69,63,65,65,62,66,62,64,68,83,64,61,66,66,64,74,60,65,70,70],
  oct:[72,78,71,68,66,69,79,79,65,64,66,78,64,64,81,71,69,65,72,64,60,61,62,66,72,72,67,67,67,68,75],
  nov:[81,73,76,67,70,76,74,71,68,62,69,69,63,65,63,66,57,61,65,65,59,62,60,59,65,65,59,63,60,61],
  dec:[57,57,57,55,55,60,61,59,52,57,59,61,62,62,62,60,60,62,60,55,58,59,59,58,60,59,59,60,60,59,56],
  name:"San Francisco, CA"
};


function addInfo () {
  $("body").append(`<div class="providence"><p>${providence.name}</p></div>`);
  $("body").append(`<div class="miami"><p>${miami.name}</p></div>`);
  $("body").append(`<div class="washington"><p>${washington.name}</p></div>`);
  $("body").append(`<div class="sanfrancisco"><p>${sanfrancisco.name}</p></div>`);

};

addInfo();

function addData(city) {

$.each(city.jan, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.feb, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.mar, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.apr, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.may, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.june, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.july, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.aug, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.sep, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.oct, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.nov, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(city.dec, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$("body").append(`<foot class="back">BACK</foot>`);
};





$(".providence").click(function() {
  $("p, div").css("display","none");
  addData(providence);
  $(document).ready(function(){
    $('td').each(function() {
      var text = parseInt($(this).text());
      if (text <= 32) {
        $(this).toggleClass('gridItem freeze');
      } else if (32 < text && text <= 50) {
        $(this).toggleClass('gridItem cold');
      } else if (50 < text && text <= 68) {
        $(this).toggleClass('gridItem cool');
      } else if (68 < text && text <= 78) {
        $(this).toggleClass('gridItem warm');
      } else if (78 < text && text <= 88) {
        $(this).toggleClass('gridItem hot');
      } else if (88 < text) {
        $(this).toggleClass('gridItem burn');
      }
      })
    });
      $("td").click(function() {
      $(this).css("fontSize","10px");
    });
      $(".back").click(function() {
      window.location.reload();
    });
});



$(".miami").click(function() {
  $("p, div").css("display","none");
  addData(miami);
  $(document).ready(function(){
    $('td').each(function() {
      var text = parseInt($(this).text());
      if (text <= 32) {
        $(this).toggleClass('gridItem freeze');
      } else if (32 < text && text <= 50) {
        $(this).toggleClass('gridItem cold');
      } else if (50 < text && text <= 68) {
        $(this).toggleClass('gridItem cool');
      } else if (68 < text && text <= 78) {
        $(this).toggleClass('gridItem warm');
      } else if (78 < text && text <= 88) {
        $(this).toggleClass('gridItem hot');
      } else if (88 < text) {
        $(this).toggleClass('gridItem burn');
      }
      })
    });
      $("td").click(function() {
      $(this).css("fontSize","10px");
    });
      $(".back").click(function() {
      window.location.reload();
  });
});


$(".washington").click(function() {
  $("p, div").css("display","none");
  addData(washington);
  $(document).ready(function(){
    $('td').each(function() {
      var text = parseInt($(this).text());
      if (text <= 32) {
        $(this).toggleClass('gridItem freeze');
      } else if (32 < text && text <= 50) {
        $(this).toggleClass('gridItem cold');
      } else if (50 < text && text <= 68) {
        $(this).toggleClass('gridItem cool');
      } else if (68 < text && text <= 78) {
        $(this).toggleClass('gridItem warm');
      } else if (78 < text && text <= 88) {
        $(this).toggleClass('gridItem hot');
      } else if (88 < text) {
        $(this).toggleClass('gridItem burn');
      }
      })
    });
      $("td").click(function() {
      $(this).css("fontSize","10px");
    });
      $(".back").click(function() {
      window.location.reload();
  });
});


$(".sanfrancisco").click(function() {
  $("p, div").css("display","none");
  addData(sanfrancisco);
  $(document).ready(function(){
    $('td').each(function() {
      var text = parseInt($(this).text());
      if (text <= 32) {
        $(this).toggleClass('gridItem freeze');
      } else if (32 < text && text <= 50) {
        $(this).toggleClass('gridItem cold');
      } else if (50 < text && text <= 68) {
        $(this).toggleClass('gridItem cool');
      } else if (68 < text && text <= 78) {
        $(this).toggleClass('gridItem warm');
      } else if (78 < text && text <= 88) {
        $(this).toggleClass('gridItem hot');
      } else if (88 < text) {
        $(this).toggleClass('gridItem burn');
      }
      })
    });
      $("td").click(function() {
      $(this).css("fontSize","10px");
    });
      $(".back").click(function() {
      window.location.reload();
  });
});
