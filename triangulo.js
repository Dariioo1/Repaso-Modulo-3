"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(vector1, vector2, vector3) {
        this.vector1 = vector1;
        this.vector2 = vector2;
        this.vector3 = vector3;
    }
    Triangulo.prototype.getVector1 = function (vector1) {
        this.vector1 = vector1;
    };
    Triangulo.prototype.getVector2 = function (vector2) {
        this.vector2 = vector2;
    };
    Triangulo.prototype.getVector3 = function (vector3) {
        this.vector3 = vector3;
    };
    Triangulo.prototype.setVector1 = function () {
        return this.vector1;
    };
    Triangulo.prototype.setVector2 = function () {
        return this.vector2;
    };
    Triangulo.prototype.setVector3 = function () {
        return this.vector3;
    };
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitud;
        var posicion1 = this.vector1.calcularDistancia(this.vector2);
        var posicion2 = this.vector2.calcularDistancia(this.vector3);
        var posicion3 = this.vector3.calcularDistancia(this.vector1);
        longitud = [posicion1, posicion2, posicion3];
        return longitud;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
