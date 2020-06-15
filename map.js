var mapbutton = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapclose = document.querySelector(".modal-close2");
console.log(mapclose);

 mapbutton.addEventListener("click", function (evt) {
     evt.preventDefault();
     mapPopup.classList.add("modal-show");
 });
 mapclose.addEventListener ("click", function (evt) {
     evt.preventDefault();
     console.log(mapclose);
     mapPopup.classList.remove("modal-show");
 });

 window.addEventListener("keydown", function (evt){
     if (evt.keyCode === 27){
         if (mapPopup.classList.contains("modal-show")){
             mapPopup.classList.remove("modal-show");
         }}});