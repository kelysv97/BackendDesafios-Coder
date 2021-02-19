"use strict";
exports.__esModule = true;
exports.Resta = void 0;
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
exports.Resta = Resta;
//module.exports = Resta;
