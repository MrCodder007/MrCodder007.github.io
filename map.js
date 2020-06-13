var mapbutton = document.querySelector (".button-map");
var mapPopup = document.querySelector (".modal-map");
var close = document.querySelector (".modal-close");
 mapbutton.addEventListener ("click", function (evt) {
     evt.preventDefault();
     mapPopup.classList.add("modal-show");
 });
 close.addEventListener ("click", function (evt) {
     evt.preventDefault();
     mapPopup.classList.remove("modal-show");
 });

 window.addEventListener("keydown", function (evt){
     if (evt.keyCode === 27){
         if (mapPopup.classList.contains("modal-show")){
             mapPopup.classList.remove("modal-show");
         }}});