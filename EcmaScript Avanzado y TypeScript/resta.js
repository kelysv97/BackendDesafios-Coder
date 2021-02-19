var Resta = /** @class */ (function () {
    //metodo constructor
    function Resta(a, b) {
        this.aa = a;
        this.bb = b;
    }
    //metodo para restar
    Resta.prototype.getResultado = function () {
        return (this.aa - this.bb);
    };
    return Resta;
}());
module.exports = Resta;
