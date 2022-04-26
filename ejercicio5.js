//5.	Crear una función flecha que reciba un arreglo de comidas 
//      y lo devuelva en mayúsculas y mejoras en su formato de presentación.

const masComidaFav = [
    "Pescado apanado",
    "Maduro con huevo",
    "Hamburguesa",
    "Salchipapas"
];

const comidaF = (masComidaFav) => {console.log(masComidaFav);}
comidaF(masComidaFav[3].toUpperCase());

console.log("*****Las comidas Favoritas*****");
console.log(comidaF(masComidaFav+ '\n')+'\n');
