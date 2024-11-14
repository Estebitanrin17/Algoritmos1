// variables y tipos de datos 

// Tipos de datos primitivos 
let nombres = 'Esteban Rincon Martinez';
let edad ='17';
let Mayoredad = true;
let estatura;

console.log(typeof nombres);
console.log(typeof Mayoredad);
console.log(typeof estatura);
console.log(typeof edad);


// tipos de datos complejos 

let frutas =['peras','melon', 'mango' ]



let auto = {
    placa: 'mth24c',
    modelo: 2024,
    marca :' mazda',
    tipo:'automovil',
    unicodueño: true,
    kilometraje: 20000

}


//concatenando variables

console.log('Bievenido usuario ' + nombres + ' su edad es ' +  edad  + ' su fruta favorita es ' +  frutas [2]);


//estructuras de control condicional 


let edad2 = 16;
let genero = 'femenino';

if (edad2>17 && edad2<26){
   

if(genero=='masculino'){
    console.log(' pal caminon mi socio ');
}

else{
    console.log(' No eres apto ');
}

}else{
    console.log(' se salvo de la trasquilada o por cucho ');
}



let tiposuscripcion = 'gold';
switch (tiposuscripcion) {
    case 'bronce':
        console.log('pobre no le alcanza')
        break;
        case 'silver':
            console.log('Bien pero pagueme mas xd');
            break;
            case'gold' :
            console.log('eres rico brou');
            break;

    default:
        console.log('no existe suscripcion bobardo')
        break;
}


//estructura de control de blucles 

let contador = 0;
while (contador<11){
    console.log(' el contador es el numero ' + contador);
    contador = contador + 1;
}


for(let i=100; i>1; i=i - 10   ){ 
    console.log('el contador con for es '  + i);


}