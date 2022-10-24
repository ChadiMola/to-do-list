var rems = document.getElementsByClassName("fas fa-times text-primary")
for(let el of rems){
    el.addEventListener("click",function(){el.parentNode.parentNode.remove()})
}
var checks =document.getElementsByClassName("form-check-input");
for(let el of checks){
    el.addEventListener("click",function(){el.nextElementSibling.classList.toggle("done")})
}
document.getElementsByTagName("button").addEventListener("submit",function(){})