export class Punto
{
   private x:number;
   private y:number;

   constructor(x:number, y:number)
   {
       this.x=x;
       this.y=y;
   }
   public getX():number
   {
       return this.x;
   }
   public getY():number
   {
       return this.y;
   }
   public setx(x:number)
   {
       this.x =x;
   }
   public setY(y:number)
   {
       this.y =y
   }
   public toString()
   {
       let convertir = "(" + this.x.toString() + "," + this.y.toString() + ")";

       return convertir;
   }
   public distanciaAlOrigen():number
   {
       let distancia=(Math.sqrt(this.x **2 + this.y**2));
       return distancia;
   }
   public calcularDistancia(otroPunto:Punto):number
   {
       let distancia = Math.sqrt(Math.abs((otroPunto.getX() - this.x)**2)+((otroPunto.getY()- this.y)**2));
       return distancia;
   }
   public calcularCuadrante():number
   {
       let punto:number;

       if(this.x===0 || this.y===0)
       {
           punto =0
       }
       else if(this.x > 0 && this.y > 0)
       {
           punto =1
       }
       else if(this.x < 0 && this.y > 0)
       {
           punto =2
       }
       else if(this.x < 0 && this.y < 0)
       {
           punto =3
       }
       else
       {
           punto =4
       }
       return punto;
   }
   public calcularMasCercano(puntos:Punto[]):Punto
   {
       let cercano:Punto
       let distancia2:number =this.calcularDistancia(puntos[0])

       for(let i=0; i<puntos.length;i++)
       {
           if(this.calcularDistancia(puntos[i]) <= distancia2)
           {
               distancia2=this.calcularDistancia(puntos[i])
               cercano=puntos[i]
           }
           return cercano;
        }
    }
}
