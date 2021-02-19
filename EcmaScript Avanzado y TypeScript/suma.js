var Suma = /** @class */ (function () {
    // metodo constructor
    function Suma(a, b) {
        this.aa = a;
        this.bb = b;
    }
    //metodo para restar
    Suma.prototype.getResultado = function () {
        return (this.aa + this.bb);
    };
    return Suma;
}());
module.exports = Suma;
