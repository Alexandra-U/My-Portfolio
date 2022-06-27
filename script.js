
document.querySelector(".btn1").onclick = function() {
    window.location.href='3d.html';
}

document.querySelector(".btn2").onclick = function() {
    window.location.href='drawing.html';
}

document.querySelector(".btn3").onclick = function() {
    window.location.href='ill.html';
}

// window.onbeforeunload = function() {
//     document.querySelector(".cover").onclick = function(e) {
//         document.querySelector(".cover").style.display = "none";
    
  
// }
//    }

 let hideCover = document.querySelector(".cover");
 window.addEventListener("load", function(){
    hideCover.onclick = function(event) {
        hideCover.remove();


        
        event.preventDefault();
    }
 });


  

  



   

    





