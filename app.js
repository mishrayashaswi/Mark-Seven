var translateBtn = document.querySelector("#translate");
var inputText = document.querySelector("#input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/klingon.json";

function getTranslateURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errrorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server !! try again after sometime");
}

function clickEventHandler() {
  var innerText = inputText.value;

  fetch(getTranslateURL(innerText))
    .then(newFunction())
    .then((json) => {
      var translateText = json.contents.translated;
      output.innerText = translateText;
    })
    .catch(errrorHandler);

  function newFunction() {
    return (response) => response.json();
  }
}

translateBtn.addEventListener("click", clickEventHandler);