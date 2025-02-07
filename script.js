const formEl = document.getElementById("signup-form");
const emailEL = document.getElementById("email-id")
const pageEl = document.getElementById("default-page")
const succesEl = document.getElementById("success-page-sec")
const emailSpan = document.getElementById("email-element")
const labelEL = document.getElementById("input-label")
const submitBtn = document.getElementById("submit-btn")
const dismissBtn = document.getElementById("dismiss-btn")

formEl.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", clearMessage)
emailEL.addEventListener("input", handleInput)

function handleInput(e) {
  e.preventDefault(e);
  
  if (!validateEmail(emailEL.value) && (!emailEL.classList.contains("error"))) {
    emailEL.classList.add("error")
    const paragraph = document.createElement("span")
    paragraph.innerText = "Valid email required"
    paragraph.style.color = "red"
    labelEL.appendChild(paragraph)
  }
  if (validateEmail(emailEL.value)) {
   
    emailEL.classList.remove("error")
    labelEL.remove(labelEL.lastElementChild)
}}


function handleSubmit(e) {
  e.preventDefault(e);
  
  if (validateEmail(emailEL.value)) {
   
    pageEl.classList.add("hidden")
    succesEl.classList.remove("hidden")
    emailSpan.innerText = emailEL.value
    emailEL.value = ""
    emailEL.classList.remove("error")
  } else {
      if (!emailEL.classList.contains("error")) {
        emailEL.classList.add("error")
        const paragraph = document.createElement("span")
        paragraph.innerText = "Valid email required"
        paragraph.style.color = "red"
        labelEL.appendChild(paragraph)
      }
  }
}

function clearMessage() {
  succesEl.classList.add("hidden")
  pageEl.classList.remove("hidden")
 
}


// email validation
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  