"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setx = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.toString = function () {
        var convertir = "(" + this.x.toString() + "," + this.y.toString() + ")";
        return convertir;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distancia = Math.sqrt(Math.abs(Math.pow((otroPunto.getX() - this.x), 2)) + (Math.pow((otroPunto.getY() - this.y), 2)));
        return distancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        var punto;
        if (this.x === 0 || this.y === 0) {
            punto = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            punto = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            punto = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            punto = 3;
        }
        else {
            punto = 4;
        }
        return punto;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var cercano;
        var distancia2 = this.calcularDistancia(puntos[0]);
        for (var i = 0; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) <= distancia2) {
                distancia2 = this.calcularDistancia(puntos[i]);
                cercano = puntos[i];
            }
            return cercano;
        }
    };
    return Punto;
}());
exports.Punto = Punto;
