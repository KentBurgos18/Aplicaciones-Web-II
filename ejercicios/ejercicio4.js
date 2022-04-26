const {comidita} = require ('./ejercicio3')

let i = 0;

// Do - While
do{
    console.log(comidita[i])
    i++;
    console.log(comidita);
}while(i<=comidita.length)

//While
while(i<comidita.length){
    console.log(comidita);
    i++;
}

//For
for (let i = 0; i < comidita.length; i++) {
    console.log(comidita);
    
}
//Foreach
comidita.forEach(function(comidin) {
    console.log(comidin);  
});