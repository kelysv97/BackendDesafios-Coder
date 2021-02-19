const operacion = (tipoOperacion:string, a:number, b:number) => {
  return new Promise ((resolve, reject) => {
	  if(tipoOperacion == "suma") 
    {
      const Suma = require("./suma.js");
      let suma = new Suma(a,b);
		  resolve("La suma es: "+ suma.getResultado());
		}
    else if(tipoOperacion == "resta")
    {
      const Resta = require("./resta.js");
      let resta = new Resta(a,b);
      resolve("La resta es: "+ resta.getResultado());
		}
    else
    {
      reject("No se puede sumar ni restar");
    }
	})
}
const operaciones = async() => {
  try 
  {
    console.log(await operacion ("suma", 8, 4));
    console.log(await operacion ("resta", 8, 4));
    console.log(await operacion ("division", 4, 2));
	} catch (error) {
		console.error(error);
	}
} 
operaciones();

