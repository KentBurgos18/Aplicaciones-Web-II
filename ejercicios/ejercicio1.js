const tablaMultiplicar =function(N,i=1){
    if(i<=10){
        console.log(`${N} * ${i} = ${N*i}`)
        i++;
        return tablaMultiplicar(N,i=i)
    }
}
tablaMultiplicar(7);