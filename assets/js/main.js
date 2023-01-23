
const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDecrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");
const txtArea = document.querySelector("#txtArea");
const txtDisplay = document.querySelector("#txt-display");
const picture = document.querySelector(".picture");
const information = document.querySelector(".informations");
const feedback = document.createElement("p");
const secondSection = document.querySelector("section:last-child")


const isValidText = (text) => {
  const regEx = /^[a-z\s]{1,}$/
  return  regEx.test(text);
}

const displayResult = () => {
  txtDisplay.style.display = "block";
  btnCopy.style.display ="block";
  picture.style.display ="none";
  information.style.display ="none";
  secondSection.style.justifyContent = "space-between";
  txtArea.value = "";
}


const handleClickToEncrypt = ()=>{
  if ( isValidText( txtArea.value.trim() ) ) {
    txtDisplay.value =  txtArea.value.trim()
      .replaceAll("e","enter")
      .replaceAll("i","imes")
      .replaceAll("a","ai")
      .replaceAll("o","ober")
      .replaceAll("u","ufat");
    displayResult();
  } 
}

const handleClickToDecrypt = ()=>{
  if (  isValidText( txtArea.value.trim() ) ) {
    txtDisplay.value =  txtArea.value.trim()
      .replaceAll("enter","e")
      .replaceAll("imes","i")
      .replaceAll("ai","a")
      .replaceAll("ober","o")
      .replaceAll("ufat","u");
    displayResult();
  }
}

const handleClickToCopyText = () => {
  const text = txtDisplay.value;
  navigator.clipboard.writeText(text);
  txtDisplay.value = "";
}

const handleKeyupFeedback = () => {
  if ( !isValidText( txtArea.value.trim() ) ) {
    feedback.textContent = "Invalid text!";
    feedback.style.color = "red";
    txtArea.insertAdjacentElement("afterend", feedback);
    return 
  } 
  feedback.textContent = "";
}

btnEncrypt.addEventListener("click", handleClickToEncrypt)
btnDecrypt.addEventListener("click", handleClickToDecrypt)
btnCopy.addEventListener("click", handleClickToCopyText)
txtArea.addEventListener("keyup", handleKeyupFeedback)