var textarea = document.getElementById("inptext");
var uppercaseButton = document.getElementById("uppercase");
var lowercaseButton = document.getElementById("lowercase");
var removespace = document.getElementById("removespace");
var removenewline = document.getElementById("removenewline");

var chars = document.getElementById("chars");
var words = document.getElementById("words");

uppercaseButton.addEventListener("click", function () {
  textarea.value = textarea.value.toUpperCase();
});

lowercaseButton.addEventListener("click", function () {
  textarea.value = textarea.value.toLowerCase();
});

removespace.addEventListener("click", function () {
    textarea.value = textarea.value.replace(/\s+/g,' ').trim();
});

removenewline.addEventListener("click", function () {
    textarea.value = textarea.value.replace(/\s+/g,'\n').trim();
});

textarea.addEventListener("input", function () {
  chars.innerText = textarea.value.length;
  words.innerText = textarea.value.trim().split(/\s+/).length;
});

