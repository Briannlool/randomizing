/* global $ */ 

var games= ["League Of Legends", "Overwatch" , "Vain Glory"];

function add_name( name, isGame ){
    if ( name.length !== 0 ) {
            games.push( name );
    }
    else {
        alert('please give a name');
    }
}

$(document).ready(function(){
    
 
 $("#games").click(function(){
     var x = Math.floor(Math.random()*games.length); 
     console.log(x);

$("#gameDisplay").html(games[x]); 
 }); 
 
 
 $("#addGm").click(function(){
     var mvp = $("#popGm").val();
    add_name (mvp ,false);
     $("#popGm").html(mvp);
     console.log(games);
     $("input").val(" "); 
     $("#addGm").html("Add Another One!"); 
     }); 
}); 