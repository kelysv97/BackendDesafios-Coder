const operacion = (tipoOperacion:string , a:number, b:number) => {
	  if(tipoOperacion == "suma") 
    {
      import('./suma.js').then(({Suma})=> {
        const sumas = new Suma(a,b);
        console.log("La suma es: "+ sumas.getResultado());
      });
		}
    else if(tipoOperacion == "resta")
    {
      import('./resta.js').then(({Resta})=> {
        const restas = new Resta(a,b);
        console.log("La resta es: "+ restas.getResultado());
      });
		}
    else
    {
      console.log("No ingreso la operacion correcta");
    }
}
const operaciones = async(tipoOperacion:string , a:number, b:number) => {
	try 
  {
		const result = await operacion (tipoOperacion, a, b);
		console.log(result);
	} catch (error) {
		console.error(error);
	}
} 
operaciones("resta", 4, 5);

