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
function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
    return;
  });
}
function pressIt(){
  $('#typing')
}
$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();
});
