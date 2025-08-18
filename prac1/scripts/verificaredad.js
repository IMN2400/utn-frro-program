function verificaredad()
{
    do
        var edad = prompt("Ingrese su edad: ");
    while (Number.isInteger(parseInt(edad))==false)
    let ans = new String();
    edad > 17 ? ans = "Usted es mayor de edad." : ans = "Usted es menor de edad.";
    return ans
}

function clasificarnro(n)
{
    nro = parseFloat(n)
    let ans = new String();
    Number.isNaN(nro)==true ? ans = "Error. Por favor ingrese un número." : 0
    nro > 0 ? ans = "Es positivo" : (nro < 0 ? ans = "Es negativo" : ans = "Es cero")
    return ans
}