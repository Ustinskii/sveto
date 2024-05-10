const story1 =document.getElementById("story1");
const modal1 = document.getElementById("modal1");

story1.addEventListener("click", function(){
    modal1.classList.add("open")
});
modal1.addEventListener("click", function(){
    modal1.classList.remove("open")
});
const story2 =document.getElementById("story2");
const modal2 = document.getElementById("modal2");

story2.addEventListener("click", function(){
    modal2.classList.add("open")
});
modal2.addEventListener("click", function(){
    modal2.classList.remove("open")});