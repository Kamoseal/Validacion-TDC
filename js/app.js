//Funcion pintar color rojo el dato no ingresado BOOTSTRAP
(function(validate) {
    'use strict';
    window.addEventListener('load', function() {
      let forms = document.getElementsByClassName('needs-validation');
      let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
//Trayendo elementos DOM a JS
const form = document.querySelector('form');
const arrayOfElements = Array.from(form);
let cn = arrayOfElements.find(cn => cn.id === "cn");
let name = arrayOfElements.find(name => name.id === "name");
let cD = arrayOfElements.find(cD => cD.id === "cD");

console.log(cD)
//Validacion TDC
cn.addEventListener('keyup', e =>{
    let cnValue = cn.value;
    let cnValueInArray = cnValue
    .toString()
    .split("")
    .reverse()
    .map(number => parseInt(number))
    console.log(cnValueInArray);
    let multiplyOddCN = cnValueInArray.map((number, index)=>{
        if (index % 2 == 1){
            return number * 2;
        }else{
            return number
        }
    });
    console.log(multiplyOddCN); 
    let sumOddifLengthTen = multiplyOddCN.map(number =>{
        if (number >=10){
            return number - 9;
        }else{
            return number
        }
    })
    console.log(sumOddifLengthTen); 
    let sumAllNumbers= sumOddifLengthTen.reduce((a,b)=>{
        return a + b;
    })
    console.log(sumAllNumbers);
    
    if (sumAllNumbers % 10 === 0){
        return cn.className ="was-validated form-control";
    }else{
        return cn.className = "noValide form-control";
    }
});
//Validacion nombre
name.addEventListener('keyup', e =>{
    let nameValue = name.value;
    console.log(nameValue)
    function validateName (string){
        let delateSpacesNameValueFirstEnd = string.trim();
        let arrayOfWords = delateSpacesInNameValueFirstEnd.split(" ");
        if (delateSpacesInNameValueFirstEnd.length >=2 ){
            return name.classList.add =("was-validated form-control");
        }else{
            return name.classList.add = ("noValide form-control");
        }
    }
});
//Validacion de Digito verificador
cD.addEventListener('keyup', e =>{
    let cDValue = cD.value;
    function validatecD (number){
        if (number > 000 ){
            return cD.classList.add =("was-validated");
        }else {
            return cD.classList.add = ("noValide");
        }
    }
});

  

//let cD = arrayOfElements.find(cD => cD.id === "cD");
//let cnValueNumber = parseInt(cn.value);
  //  function valueCn(cnValue){
        
  //      console.log(cnValueNumber)
  //  }

//const inputs = form.getElementsByTagName('input');
//const selects = form.getElementsByTagName('select');
//const cn = inputs[0];
//const month = selects[0];
//const