
document.querySelector(".crd1").onclick = function() {
    window.location.href='3d.html';
}

document.querySelector(".crd2").onclick = function() {
    window.location.href='drawing.html';
}

document.querySelector(".crd3").onclick = function() {
    window.location.href='ill.html';
}


 let hideCover = document.querySelector(".cover");
 window.addEventListener("click", (e) => {
        hideCover.parentNode.removeChild(hideCover); 
        
        console.log(e);
 });


        
 


  



   

    





