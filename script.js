var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var output = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  return serverURL + "?" + "text=" + text;
}

function handleError(err) {
  alert(
    "Something went wrong with the server!, Please try again after sometime"
  );
}

function clickEventHandler() {
  var input = inputText.value;
  fetch(getTranslationUrl(input))
    .then((res) => res.json())
    .then((data) => {
      output.innerText = data.contents.translated;
    })
    .catch(handleError);
}

btnTranslate.addEventListener("click", clickEventHandler);
