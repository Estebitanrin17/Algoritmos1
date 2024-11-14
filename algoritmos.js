function saludar (){
    console.log('hola mundo');
    alert('wello wordl');

}

//algoritmo que realice una suma entre dos valores ingresados por el usuario 

function suma(){
    //1  declarar las variales necesarios para la ejecucion del algoritmo 
    let n1 =0;
    let n2 =0;
    let suma = 0;
    //solicitar y capturar los valores captados por el usuario 
    n1 = parseInt(prompt('por favor ingrese el primer numero a sumar'))
    n2 = parseInt(prompt('ingrese el segundo valor'))
    //reaalizar el procedimiento 
    suma = n1 + n2 
    // mostrar el resultado 
    console.log('el resultado de la suma es'  + suma);
    alert('el resultado de la suma es '   + suma);
}

// algoritmo realice una suma, resta, multiplicacion y divicion entre dos valores que ingresen por el usuario 
function operaciones(){
    let numero1 = 0;
    let numero2 = 0;
    let resultadosuma = 0;
    let resultadoresta = 0;
    let resultadomulti = 0;
    let resultadodivicion = 0;


    // solicitar los valores de la suma, resta, divicion o multiplicacion
    suma1 = parseInt(prompt('ingrese el primer numero para sumar, res '  + numero1));
    suma2 = parseInt(prompt('ingrese el numero para sumar'  + numero2));
    // realizar el resultado de la suma 
    resultadosuma = numero1 + numero2
    resultadoresta = numero1 - numero2
    resultadomulti = numero1 * numero2 
    resultadodivicion = numero1 / numero2
    console.log('el resultado de la suma es'  + resultadosuma + 'resultado de la resta es '  + resultadoresta + 'resultado de la multiplicacion es ' + resultadomulti +  'el resultado de la divicion es ' + resultadodivicion);
    alert ('los resultados de la sumaes  '  + resultadosuma + 'resultado de la resta es ' + resultadoresta + 'el resultado de la multiplicacion es' + resultadomulti + 'el resultado de la divicion es ' + resultadodivicion)
}



    //realizar el algoritmo que determine el cuadrado de un numero }

    function cuadrado (){
        let numero3 = 0; 
        let resultadocuadrado = 0;

    }


    //solicitar los valores a los cuales se le saque el cuadrado 

    numero3 = parseInt(prompt('ingrese el numero que queiere saber su cuadrado'))
    resultadocuadrado = numero3 * numero3 
    console.log('el resultado es ' + resultadocuadrado)
    alert  ('el resultado es'  + resultadocuadrado)



    // realzar el algoritmo que determine el area de un cuadrado 
    function triangulo(){
        let base =0
        let altura =0
        let resultado =0
        base = parseInt(prompt('Ingrese la base del triangulo'))
        altura = parseInt(prompt('Ingrese la altura del triangulo'))
        resultado = (base * altura)/2
        console.log('El area de su triangulo con base ' + base + ' y altura ' +  altura + ' es: ' + resultado)
        alert('El area de su triangulo con base ' + base + ' y altura ' +  altura + ' es: ' + resultado)
    }



    //realizar un algoritmo que determine la salida en kilometros, metros y sentimetros de un valor dado en pulgadas
    function conversionUnidades(){

        let M, P, CM, KM = 0
    
        alert("Este algoritmo convierte en centimetros, pulgadas y kilometros un valor dado en metros")
    
        M = parseInt(prompt("Ingrese el valor en metros a convertir"))
    
        P = M * 39.37;
        CM = M * 100;
        KM = M / 1000;
    
        alert(M + " metros en pulgadas son: " + P);
        alert(M + " metros en centimetros son: " + CM);
        alert(M + " metros en kilometros son: " + KM);
    
    }
    
    // realizar un algoritmo que pregunte al usuario a que moneda quiere convertir al peso colombiano entre dolar, euro,llenes con swich case

function conversionMoneda() {
    
    //Objeto como dato de aprtida
    let tasaCambio = {
        USD : 0.00023,
        EUR : 0.00024,
        YEN : 0.035,
    }

    alert("Realiza la conversión de dinero en pesos Colombianos a dolares, euros y yenes");

    let cantidadPesos = parseFloat(prompt("Ingrese la cantidad a convertir"));
    let tasa = parseInt(prompt("Seleccione la divisa a cambiar: USD = 1, EUR = 2, YEN = 3"));
    let conversion;
    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasaCambio.USD;
            alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Dolares");
            break;
        case 2:
            conversion = cantidadPesos * tasaCambio.EUR;
            alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Euros");
        case 3:
                conversion = cantidadPesos * tasaCambio.YEN;
                alert(cantidadPesos + " Pesos Colombianos son " + conversion + "Yenes");
            
            break;

        default:
        alert("Tase de cambia no permitida");
            break;
    }

}



// algoritmo si un numero es par o impar 

function paroImpar() {

    let X = 0;

    alert("Determinar si un número es par o impar");

    X = parseInt(prompt("Ingrese el número a verificar"));

    if (X % 2 === 0){
        alert(X + " es un número par");
    }else{
        alert(X + " es un número impar");
    }


}


// algoritmo que determine el amyor entre 2 numeros ingresados por el usuario :)iffffff

function entreDosNum(){

    alert ("Este algoritmo determina el mayor entre dos numeros")

    let numero1 = 0
    let numero2 = 0

    numero1 = parseFloat(prompt("Ingrese el primer numero"));
    numero2 = parseFloat(prompt("Ingrese el segundo numero"));

    if (numero1 === numero2){
        console.log("El numero es igual" + numero1 === numero2)
        alert("El numero es igual")
    }

    else if (numero1 > numero2) {
        console.log ("El numero mayor es: " + numero1);
        alert ("El numero mayor es " + numero1)
    }else {
        console.log("El numero mayor es: " + numero2)
        alert ("El numero mayor es " + numero2)
    }
    
    
}


//algoritmo que determine el menor entre 3 numeros 

function numMenor(){

        alert ("Este algoritmo determina el menor entre tres numeros")
        let numero1 = 0
        let numero2 = 0
        let numero3 = 0

        numero1 = parseFloat(prompt("Ingrese el primer numero"));
        numero2 = parseFloat(prompt("Ingrese el segundo numero"));
        numero3 = parseFloat(prompt("Ingrese el tercer numero"));

        let menor 

        if (numero1 < numero2 && numero1 < numero3) {
            menor = numero1;
        } else if (numero2 < numero1 && numero2 < numero3){
            menor = numero2;
        }else{
            menor = numero3;
        }   
        alert ("El numero menor es " + menor);

}


//el colegio abc requiere un sistema que le permita validad x estudiante si aprovo o reprovo una materia teniendo en cuenta 9 notas del 1-10 y se aprueba con una nota de 6.1

function validarnotascol(){
let sumanotas = 0; 
let cantidadnotas = 0;
for ( let i = 0; i <= 8; i++){
    let nota = parseFloat(prompt("ingrese sus notas" ));
    sumanotas = nota + sumanotas
    no = 0
}
let promedio = sumanotas / 10

if (promedio < 6.1){
    console.log("reprobaste la materia" + promedio);
    alert("reprobaste la materia" + promedio);
} else {
    console.log("aprovo la materia" + promedio);
    alert("aprovo la materia" + promedio);
}

}


//un indibuduo decide invertir su capital en un banco y requieresaber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes mensual de 0,7%

function invcapital(){
const porcentaje = 8.4;
let yearsdeinv = 0 ;
let cantidadcapital = 0;
let resultado = 0;
let resulfinal = 0 ;
yearsdeinv = parseFloat(prompt("ingrese los años que quiere dejar su dinero" ));
cantidadcapital = parseFloat(prompt("ingrese la cantidad que quiere invertir"));
resultado= porcentaje * yearsdeinv;
resulfinal = resultado * cantidadcapital;
console.log("su inversion final es"+ resulfinal);
alert("su inversion final es"+ resulfinal); 
}
 

