function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}
function frameIt(){
  $('img').on("load", function(){
    $(this).addClass("tasty");
    $(this).css('border', "solid 2px red");
  });
}
function pressIt(){
  $('#typing').on("keydown", function(key){
    if(key.which === 13){
     return alert('G was pressed');
      }
  });
}
function submitIt(){
  $(':submit').on('submit', function(){
    alert('Your form is going to be submitted now.');
    return;
  });
}
$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();
});
