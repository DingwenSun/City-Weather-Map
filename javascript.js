
$(document).ready(function() {
var gridContainer = document.querySelector("gridContainer")});

var providence = {
  jan:[14,20,31,32,24,13,19,36,42,37,51,62,63,26,23,36,36,34,37,51,51,40,57,44,32,37,53,52,42,33,32],
  feb:[45,38,29,46,46,35,51,35,33,54,58,59,37,52,53,56,38,44,51,66,64,62,43,60,44,52,55,59,63,45,45],
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
  name:"2018 Providence RI"
};

$.each(providence.jan, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.feb, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.mar, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.apr, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.may, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.june, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.july, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.aug, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.sep, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.oct, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.nov, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});
$.each(providence.dec, function(idx, value){
  var newtd = $('<td>',{class:'gridItem', text:value + "℉"});
  $('body').append( newtd );
});

/*
function addInfo () {
  $("body").append(`<p>${providence.name}</p>`);
};

addInfo();
*/

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
})

$("td").click(function() {
  $(this).css("fontSize","10px");
});

/*
console.log(tem);

var freeze = $.each(tem).filter(function(){
  return parseInt($(tem).map(function () { return $(this).text(); }).get()) <= 32;
});

console.log(freeze);
*/




/*
var freeze = $(tem.innerText),filter(function(idx){
  return tem.innerText <= 32;
});

$.each(freeze, function(idx, value){
  var newdiv = $('<div>',{class:'freeze', text:value});
  $('body').append( newdiv );
});
*/
