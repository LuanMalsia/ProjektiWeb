const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
CpField = form.querySelector(".Cpassword"),
CpInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (CpInput.value == "") ? CpField.classList.add("shake", "error") : checkCPass();

  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    CpField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();}
  pInput.onkeyup = ()=>{checkPass();} 
  CpInput.onkeyup = ()=>{checkCPass();} 

  function checkEmail(){ 
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Shkruaj një adresë Email-i të vleshme" : errorTxt.innerText = "Fusha e Email-it duhet te plotesohet";
    }else{ 
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){
    if(pInput.value == ""){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function checkCPass(){
   if(CpInput.value == ""){ 
     CpField.classList.add("error");
     CpField.classList.remove("valid");
   }else{ 
     CpField.classList.remove("error");
     CpField.classList.add("valid");
   }
 }

  if(!eField.classList.contains("error"), !CpField.classList.contains("error"), !pField.classList.contains("error")){
    window.location.href ="login.html"; 
 }
}