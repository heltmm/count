$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    var num1 = parseInt($("#num1").val());
    var num2 = parseInt($("#num2").val());

    if (!num1){
      alert("please enter a number!")
    }else if (num1 <0 || num2< 0){
      alert("Please use positive numbers!")
    }else if ( num1 < num2){
      alert("Make sure count to is larger than count by!")
    }

    function countUpBy(countUpBy, countTo){
      for (var i = countUpBy; i <= countTo; i += countUpBy){
        $("#output").append("<li>" + i + "</li>");
      }
    }
    countUpBy(num1, num2);
  });
});
