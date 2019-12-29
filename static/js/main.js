function changeValue(elementName, newValue){
  document.getElementsByName(elementName)[0].value=newValue;
  window.location.hash = "#comment-form";
};

if(window.location.hash) {
  var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
  alert (hash);
}
