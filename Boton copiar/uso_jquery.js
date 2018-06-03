function copyToClipboard(elemento) {
  var $temp = $("<div>")
  $("body").append($temp);
  $temp.val($(elemento).text()).select();
  document.execCommand("copy");
  $temp.remove();
}