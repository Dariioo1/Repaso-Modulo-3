import { Punto } from "./punto";
import { Triangulo } from './triangulo';

let coordenada1:Punto = new Punto(3,5);
let coordenada2:Punto = new Punto(4,1)
console.log(coordenada1);

console.log(coordenada1.getX());
console.log(coordenada1.getY());

console.log(coordenada1.calcularDistancia(coordenada2));

console.log(coordenada1.distanciaAlOrigen());

console.log(coordenada1.calcularCuadrante());

let coordenada3:Punto = new Punto(1,7)
let coordenada4:Punto = new Punto(3,6)

let CoordenadasArray = [coordenada3,coordenada4];

console.log(coordenada1.calcularMasCercano(CoordenadasArray));

let NuevoTriangulo:Triangulo = new Triangulo(coordenada1, coordenada2, coordenada3);

console.log(NuevoTriangulo.calcularLongitudLados());







