document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    add();
  });
function add() {
  let txt = document.getElementById("form2").value;
  console.log(txt);
  if (txt == "") {
    alert("add a new task fisrt ");
    return false;
  } else {
    let ul = document.getElementsByClassName("list-group", "mb-0");
    var li = document.createElement("li");
    var div = document.createElement("div");
    var inpt = document.createElement("input");
    var p = document.createElement("p");
    var a = document.createElement("a");
    a.innerHTML = '<i class="fas fa-times text-primary"></i>';
    p.innerText = document.getElementById("form2").value;
    inpt.classList.add("form-check-input", "me-2");
    inpt.type = "checkbox";
    div.classList.add("d-flex", "align-items-center");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "border-start-0",
      "border-top-0",
      "border-end-0",
      "border-bottom",
      "rounded-0",
      "mb-2"
    );
    div.appendChild(inpt);
    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(a);
    ul[ul.length - 1].appendChild(li);

    var rems = document.getElementsByClassName("fas fa-times text-primary");
    for (let el of rems) {
      el.addEventListener("click", function () {
        el.parentNode.parentNode.remove();
      });
    }
    var checks = document.getElementsByClassName("form-check-input");
    for (let el of checks) {
      el.addEventListener("click", function () {
        el.nextElementSibling.classList.toggle("done");
      });
    }
  }
}
