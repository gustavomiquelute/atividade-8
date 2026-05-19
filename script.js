const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultado = document.getElementById("resultado");

//Função de validação
function validar(){
    if (num1.value === ""|| num2.value===""){
        resultado.innerText = "Erro: Preencha todos os campos!";
        return false;
    }

    if (isNaN(num1.value)||isNaN(num2.value)){
        resultado.innerText = "Erro: digite apenas numeros!";
        return false;
    }

    return true;
}

//Funções matemáticas
function somar(a, b){
    return a + b;
}

function subtrair (a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    if (b === 0){
        return "Erro: Não é possivel dividir por 0!";
    }
    return a / b;
}

document.getElementById("soma").addEventListener("click", () => {
    if (!validar()) return;
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    resultado.innerText = "Resultado: " + somar(a, b);
});

document.getElementById("subtracao").addEventListener("click", () => {
    if (!validar()) return;
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    resultado.innerText = "Resultado: " + subtrair(a, b);
});


document.getElementById("multiplicacao").addEventListener("click", () => {
    if(!validar()) return;
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    resultado.innerText = "Resultado" + multiplicar(a, b);
});

document.getElementById("divisao").addEventListener("click", () => {
    if(!validar()) return;
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    resultado.innerText = "Resultado" + dividir(a, b);
});

//Limpando
document.getElementById("limpar").addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    resultado.innerText = "Resultado";
});
