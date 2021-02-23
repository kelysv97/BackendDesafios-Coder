const finish = function (total){
    console.log('Proceso Completo');
    console.log(`La cantidad de palabras es = ${total.length}`);
}

function mostrarLetras(palabra, arreglo, retardo, callback) {
    let arrayDeCadenas=palabra.split(" ");
    let array=arreglo.concat(arrayDeCadenas);
    for (let i=0; i<arrayDeCadenas.length; i++)
    {
        setTimeout(function () {
            console.log(arrayDeCadenas[i]);
            if (i == arrayDeCadenas.length - 1) {
                callback(array);
            }
        }, retardo * (Number(i) + 1));
    }
}

mostrarLetras('Hola mi nombre es',[], 1000,function(arrays) {
    mostrarLetras('Kely', arrays, 1000, function(arrays) {
        mostrarLetras('Segundo Villa', arrays, 1000, finish);
    })
})

