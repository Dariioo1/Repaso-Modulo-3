import { Punto } from './punto';
export class Triangulo
{
    private vector1:Punto;
    private vector2:Punto;
    private vector3:Punto;

    constructor(vector1:Punto, vector2:Punto, vector3:Punto)
    {
        this.vector1=vector1
        this.vector2=vector2
        this.vector3=vector3
    }
    public getVector1(vector1:Punto)
    {
        this.vector1=vector1;
    }
    public getVector2(vector2:Punto)
    {
        this.vector2=vector2;
    }
    public getVector3(vector3:Punto)
    {
        this.vector3=vector3;
    }
    public setVector1():Punto
    {
        return this.vector1;
    }
    public setVector2():Punto
    {
        return this.vector2;
    }
    public setVector3():Punto
    {
        return this.vector3;
    }
    public calcularLongitudLados():number[]
    {
        let longitud:number[]

        let posicion1:number=this.vector1.calcularDistancia(this.vector2)
        let posicion2:number=this.vector2.calcularDistancia(this.vector3)
        let posicion3:number=this.vector3.calcularDistancia(this.vector1)
        longitud =[posicion1,posicion2, posicion3]
        return longitud
    }



}