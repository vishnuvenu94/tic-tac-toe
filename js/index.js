$(document).ready(function(){
 var hplayer="x";
 var cplayer="o";
 var ticboard=[0,1,2,3,4,5,6,7,8];
  var counted=0;
  var select;
  var spot="";
  var winit=true;
  var tie=0;
  var playchange=true;
     
  
  function reset(){
    setTimeout(function(){
      
    
    $(".cube").text("");
    ticboard=[0,1,2,3,4,5,6,7,8];
    counted=0;
    winit=true;
    tie=0;
    if(playchange===false){
       var omove=(Math.random()*10).toFixed(); 
          $("#"+omove).text(cplayer);
          ticboard[omove]=cplayer;
           tie++;
          
  }  
    },300);
  }
  function win(board,playerid){
    if(
      (board[0]===playerid&&board[1]===playerid&&board[2]===playerid)||(board[3]===playerid&&board[4]===playerid&&board[5]===playerid)||(board[6]===playerid&&board[7]===playerid&&board[8]===playerid)||(board[0]===playerid&&board[3]===playerid&&board[6]===playerid)||(board[1]===playerid&&board[4]===playerid&&board[7]===playerid)||(board[2]===playerid&&board[5]===playerid&&board[8]===playerid)||(board[0]===playerid&&board[4]===playerid&&board[8]===playerid)||(board[2]===playerid&&board[4]===playerid&&board[6]===playerid)
    ){ setTimeout(function(){ 
       if(playchange===true){
      
      if(playerid==="x"){
        
      alert("You Won!!");
      winit=false;
      }
      else if(playerid==="o"){
         alert("You Lost!!");
      winit=false;
        
      }
    }
      else if(playchange===false){
        if(playerid==="o"){
           alert("You Won!!");
            winit=false;
        }
        else if(playerid==="x"){
           alert("You Lost!!");
           winit=false;
        }
        
      }
    },300);
      winit=false;
    }
    
  }
  function wincheck(boards,players){
    if((boards[1]===players&&boards[2]===players)||(boards[3]===players&&boards[6]===players)||(boards[4]===players&&boards[8]===players)){
     
        
       if($("#0").html()==""){
       spot=0;}
       
       }
    if((boards[0]===players&&boards[2]===players)||(boards[4]===players&&boards[7]===players)){
       
      if($("#1").html()==""){ 
       spot=1;}
       
       }
    if((boards[0]===players&&boards[1]===players)||(boards[5]===players&&boards[8]===players)||(boards[4]===players&&boards[6]===players)){
       
     if($("#2").html()==""){
      spot=2;}
       
       }
    if((boards[0]===players&&boards[6]===players)||(boards[4]===players&&boards[5]===players)){
       if($("#3").html()==""){
      spot=3;} 
       }
      
  if((boards[1]===players&&boards[7]===players)||(boards[3]===players&&boards[5]===players)||(boards[0]===players&&boards[8]===players)||(boards[2]===players&&boards[6]===players)){
      if($("#4").html()==""){
      spot=4;}
       }
        if((boards[2]===players&&boards[8]===players)||(boards[3]===players&&boards[4]===players)){
      if($("#5").html()==""){ 
      spot=5;}
        }
    if((boards[0]===players&&boards[3]===players)||(boards[7]===players&&boards[8]===players)||(boards[4]===players&&boards[2]===players)){
      if($("#6").html()==""){
      spot=6;}
        }
    if((boards[1]===players&&boards[4]===players)||(boards[6]===players&&boards[8]===players)){
      if($("#7").html()==""){
      spot=7;}
       
       }
    if((boards[2]===players&&boards[5]===players)||(boards[6]===players&&boards[7]===players)||(boards[4]===players&&boards[0]===players)){
     
       if($("#8").html()==""){
      spot=8;}
       }
  }
   
  $(".select1").click(function(){
    hplayer="x";
    cplayer="o";
    playchange=true;
    $(".select2").removeClass("btn-primary");
    $(".select1").addClass("btn-primary");
    $(".select2").addClass("bord");
    $(".select1").removeClass("bord");
    reset();  
  });
  $(".select2").click(function(){
    hplayer="o";
    cplayer="x";
    playchange=false;
    $(".select1").removeClass("btn-primary");
    $(".select2").addClass("btn-primary");
    $(".select2").removeClass("bord");
    $(".select1").addClass("bord");
    reset(); 
  });  
  function playerselect(sel,player){
    ticboard[sel]=player;
    counted++;
    tie++;
 }
  function compplay(){
   wincheck(ticboard,hplayer);
    var change=false;
    if(typeof spot!=="string"){
      
      if($("#"+spot).html()==""){
      $("#"+spot).text(cplayer);
      ticboard[spot]=cplayer;
      spot="";  
        
      }
    }
    else if(typeof spot==="string"){
      
      while(change===false&&counted!==5){
        var cmove=    (Math.random()*10).toFixed(); 
        
        if ($('#'+cmove).html()==""){
          $("#"+cmove).text(cplayer);
          ticboard[cmove]=cplayer;
          change=true;
        }
      }
      
    }
    tie++; 
  }
  $(".cube").on("click",function(){
    select=$(this).attr("id");
   
    if ($('#'+select).html()==""){
      $(this).text(hplayer);
     playerselect(select,hplayer);
    win(ticboard,hplayer);
      
     if(winit===true){
      compplay();
      win(ticboard,cplayer);
       if(winit===false){
         reset();
       }
     }
      else if(winit===false){
        reset();
      }
    }
   
   if(tie>=9&&winit===true){
     setTimeout(function(){
       
     
      alert("Game Tied");
      reset();
     },300);
    }
    
  }); 
  
});