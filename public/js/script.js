document.addEventListener("DOMContentLoaded", function () {
  var changeColorButton = document.getElementById("changeColorButton");

  changeColorButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
  });
});
