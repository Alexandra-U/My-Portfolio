
document.querySelector(".btn1").onclick = function() {
    window.location.href='3d.html';
}

document.querySelector(".btn2").onclick = function() {
    window.location.href='drawing.html';
}

document.querySelector(".btn3").onclick = function() {
    window.location.href='ill.html';
}

// modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".test");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// modal end


// window.onbeforeunload = function() {
//     document.querySelector(".cover").onclick = function(e) {
//         document.querySelector(".cover").style.display = "none";
    
  
// }
//    }

 let hideCover = document.querySelector(".cover");
 window.addEventListener("click", () => {
        hideCover.remove();    
        
        document.querySelector('.cover').addEventListener('click', () => {
            history.back();
          });

    
    
 });


  

  



   

    





