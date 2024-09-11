// se creo la funcion para crear el personaje
function crearPersonaje (nombre, raza, clase, habilidad){
    return {
        nombre: nombre,
        raza: raza,
        clase: clase,
        habilidad: habilidad,
        detallesDelPersonaje: function() { //Se creo un metodo dentro del objeto 
            console.log(`nombre: ${this.nombre}\nraza: ${this.raza}\nclase: ${this.clase}\nhabilidad: ${this.habilidad}`);
        }
    }
}
// se crearon las variables con arrays para crear el personaje pero al no saber como usarlas no sirven de nada.
/*
let clases = ["Humano","Elfo","Demonio","Orco"];
let razas = ["Barbaro","Picaro","Arquero","Mago"];
let habilidades = ["Fuerza","Magia","Destreza","Curacion"];
*/

// se le pide al usuario la informacion para su personaje
let nombre = prompt ("Escribe tu nombre de heroe");

let clase;
do{
    clase = prompt("Escribe la clase de tu héroe:\nHumano\nElfo\nDemonio\nOrco");
    if (clase!=="Humano" && clase!=="Elfo" && clase!=="Demonio" && clase!=="Orco") {
        alert("Esa clase no existe o esta mal escrita, prueba de nuevo");
    }
} while (clase !== 'Humano' && clase !== 'Elfo' && clase !== 'Demonio' && clase !== 'Orco');

let raza;
do{
    raza = prompt ("Escribe la raza de tu heroe \nBarbaro\nPicaro\nArquero\nMago");
    if (raza!=="Barbaro" && raza!=="Picaro" && raza!=="Arquero" && raza!=="Mago") {
        alert ("Esa raza no existe o esta mal escrita, prueba de nuevo");
    }
} while (raza!=="Barbaro" && raza!=="Picaro" && raza!=="Arquero" && raza!=="Mago");

let habilidad
do{
    habilidad = prompt("Escribe la habilidad de tu heroe \nFuerza\nMagia\nDestreza\nCuracion");
    if (habilidad!=="Fuerza" && habilidad!=="Magia" && habilidad!=="Destreza" && habilidad!=="Curacion") {
        alert ("Esa habilidad no existe o esta mal escrita, prueba de nuevo");
    }
} while (habilidad!=="Fuerza" && habilidad!=="Magia" && habilidad!=="Destreza" && habilidad!=="Curacion")

//se creo la variable del personaje donde se llama a la funcion para crear el personaje
let personaje = crearPersonaje (nombre, raza, clase, habilidad)

//se muestra al usuario el personaje creado
alert("¡tu Heroe esta listo para la aventura!\nRevisa la consola para ver los detalles");
console.log("¡Este es tu heroe!")
personaje.detallesDelPersonaje();