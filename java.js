/* global $ */ 

var games= ["League Of Legends", "Overwatch" , "Vain Glory"];

$(document).ready(function(){
    
 
 $("#games").click(function(){
     var x = Math.floor(Math.random()*games.length); 
     console.log(x);

$("#gameDisplay").html(games[x]); 
 }); 
 
 
 $("#addGm").click(function(){
     var mvp = $("#popGm").val();
     games.push( mvp );
     $("#popGm").html(mvp);
     $("input").val(''); 
    $("addGm").html("Want to add more?");
 console.log(games);
     
 });
 
});