function copyDiv() {
  var firstDivContent = document.getElementById('img-desc');
  var secondDivContent = document.getElementById('img-desc-show');
  secondDivContent.innerHTML = firstDivContent.innerHTML;
}
