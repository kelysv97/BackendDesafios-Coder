"use strict";
exports.__esModule = true;
exports.Suma = void 0;
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
exports.Suma = Suma;
//module.exports = Suma;
