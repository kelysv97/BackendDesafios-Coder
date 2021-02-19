class Suma
{
    // declaracion de variables
    private aa: number;
    private bb: number;

    // metodo constructor
    constructor(a:number, b:number) 
    {
        this.aa = a;
        this.bb = b;
    }

    //metodo para restar
    getResultado()
    {
        return (this.aa + this.bb);
    }
}
module.exports = Suma;