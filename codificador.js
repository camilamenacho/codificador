//(codigoDaLetra + desloc) % tamDoAlfabeto => (codigoDaLetra + 7) % 26

//((codigoDaLetraASC - codigoDaLetra + desloc) % tamDoAlfabeto) + codigoDaLetra
//
//                -65         +65         %26           +65
//codigoASC => codigo0a25 => desloco => giro => codigoASC

var codificar = document.getElementById('codificar')
var decodificar = document.getElementById('decodificar')
var botao = document.querySelector('#botao')
var metodo = document.getElementById("metodo")
var mensagem = document.getElementById('mensagem').value

function cifraDeCesar(mensagem) {

    var deslocamento = Number(document.getElementById('deslocamento').value)
    var mensagemCriptografada = ''
    var mensagemDecodificada = ''

    if (codificar.checked) {
        for (i=0; i < mensagem.length; i++) {
            var conversao = mensagem.charCodeAt(i) + deslocamento
            var charcodeToString = String.fromCharCode(conversao);
            mensagemCriptografada += charcodeToString
        }
            return mensagemCriptografada

    } else if (decodificar.checked) {
        for (i = 0; i < mensagem.length; i++) {
            var conversao = mensagem.charCodeAt(i) - deslocamento
            var charcodeToString = String.fromCharCode(conversao);
            mensagemDecodificada += charcodeToString
        }
            return mensagemDecodificada
    }

}


function base64() {
    var mensagem = document.getElementById("mensagem").value
    if (codificar.checked) {
        var codificarB64 = btoa(mensagem)
        return codificarB64
    } 
    else if (decodificar.checked) {
        let decodificarB64 = atob(mensagem)
        return decodificarB64
    }
    
}

// Exibe resultado dependendo do método escolhido pelo usuário e previne comportamento padrão do botão
botao.addEventListener("click", function(event) {
    event.preventDefault()
    var resultado = document.getElementById("resultado")
    if (metodo.value === "cifraCesar") {
        resultado.innerHTML = cifraDeCesar()
        
    }
    else if (metodo.value === "base64") {
        resultado.innerHTML = base64()
    }
})


function selecaoMetodo() {
    var chave = document.getElementById("divchave")
        if (metodo.value === "cifraCesar") {
            chave.style.display = "block"
        }
        else {
            chave.style.display = "none"
        }
}

//função que muda a mensagem do botao


var divmetodo = document.getElementById('divmetodo') 
divmetodo.addEventListener('click', function(){
    if (codificar.checked) {
        botao.innerText = "Codificar!"
    }
    else if (decodificar.checked) {
        botao.innerText = "Decodificar!"
    }
    
})

