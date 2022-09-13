let containerNotFound = document.querySelector(".container-notfound");
let btnCopiar = document.querySelector(".btn-copiar");
let textoFinal = document.getElementById("texto-final");

function criptografar() {
    let texto = document.getElementById("texto").value.split("");
    esconder();
    textoFinal.textContent = texto.join("").replace(/i/g,"imes").replace(/e/g,"enter").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    document.getElementById("texto").value = "";
}


function descriptografar() {
    let texto = document.getElementById("texto").value;
    esconder();  
    textoFinal.textContent = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.getElementById("texto").value = "";
}

function copiar() {
    textoFinal.select()
    document.execCommand('copy');
}

function esconder(){
    containerNotFound.style.display = "none";
    btnCopiar.style.display = "initial";
}
