//define functions here
function submitIt(){
  $("form").on("submit", function(){
      alert("Your form is going to be submitted now.");
  });
}

function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
      $('img').addClass('tasty');
  });
}

function pressIt(){
  $().on('keydown', function(e){
      if(e.which == 'G'){
          alert('asds');
      }
  });
}



$(document).ready(function(){

// call functions here






});
