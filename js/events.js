function getIt(){
  $('p').on("click", function(){
    alert("Hey!");
  });
}
function frameIt(){
  $('img').on("load", function(){
    $(this).addClass("tasty");
  });
}
function pressIt(){
  $(':text').on("keydown", function(key){
    if(key.which === 13){
     return alert('G was pressed');
      }
  });
}
function submitIt(){
  $('form').on('submit', function(){
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
