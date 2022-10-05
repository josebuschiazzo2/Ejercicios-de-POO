// Clase para armar rectangulos
class Rectangle
{
private base:number;
private height: number;

constructor(paramBase:number , paramHeight:number)
    {
        this.base=paramBase;
        this.height=paramHeight;
    }

public getBase():number
    {
        return this.base;
    }

public setBase(pBase:number):void
    {
        this.base=pBase;
    }

public getHeight():number
    {
        return this.height;
    }

public setHeight(pHeight:number):void
    {
        this.height=pHeight;
    }

} // FIN Clase para armar rectangulos

// Clase de Area (Usando los rectangulos creados)
class AreaRectangle {
private rectangle: Rectangle;

constructor(paramRectangle:Rectangle){
    this.rectangle=paramRectangle;
}

public getArea(/*pRectangle:Rectangle <- ya lo saco antes*/):number
{
    return this.rectangle.getBase()*this.rectangle.getHeight();
}

}

// Clase de Comparaciones (Usando los rectangulos creados)

class CompareRectangle {
    private rectangle: Rectangle;
    
    constructor(paramRectangle:Rectangle){
        this.rectangle=paramRectangle;
    }
    
    public greaterThan(prectangle2:Rectangle):number
    {
        let status:number;
        let rectangle2:Rectangle = prectangle2;
        let AreaR1= new AreaRectangle(this.rectangle);
        let AreaR2= new AreaRectangle(rectangle2);
        
        if (AreaR1.getArea()===AreaR2.getArea())
        {
            status=0;
        } else 
            {
                if (AreaR1.getArea() < AreaR2.getArea())
                {
                    status=-1;
                } else status=1;
            }
    return status;
    }
 
    public isSquare():boolean 
    {
        if (this.rectangle.getBase() === this.rectangle.getHeight()) {return true;
        }else return false; 
    }

    public isVertical():boolean
    {
        if (this.rectangle.getBase() < this.rectangle.getHeight()) {return true;
        }else return false; 
    } 

}
    
//Instancia de Clases
let RectangleOne= new Rectangle (4,3);
let RectangleTwo= new Rectangle (3,3);

let AreaOne = new AreaRectangle(RectangleOne);
let AreaTwo = new AreaRectangle(RectangleTwo);

let CompareRectangle1= new CompareRectangle(RectangleOne);
let CompareRectangle2= new CompareRectangle(RectangleTwo);

console.log("----------------------------------------------------------------");
console.log("Area del Primer Rectangulo (base: " + RectangleOne.getBase() + " y alto: " + RectangleOne.getHeight() + "): " + AreaOne.getArea());
//console.log(CompareRectangle1.isSquare());
if (CompareRectangle1.isSquare()) {console.log("Es un Cuadrado");
} else {
        if (CompareRectangle1.isVertical()) {console.log("Esta Vertical");
        } else console.log("Esta Horizontal");
    }
    console.log("----------------------------------------------------------------");
console.log("Area del Segundo Rectangulo (base: " + RectangleTwo.getBase() + " y alto: " + RectangleTwo.getHeight() + "): " + AreaTwo.getArea());
if (CompareRectangle2.isSquare()) {console.log("Es un Cuadrado");
} else {
        if (CompareRectangle2.isVertical()) {console.log("Esta Vertical");
        } else console.log("Esta Horizontal");
    }
console.log("----------------------------------------------------------------");
console.log("Comparativa si es Mayor(1), Igual(0) o Menor(-1): " + CompareRectangle1.greaterThan(RectangleTwo));
console.log(" ");

console.log("***************   Cambio el Rectangulo 1     *******************");
RectangleOne.setBase(3);
console.log("Area del Primer Rectangulo (base: " + RectangleOne.getBase() + " y alto: " + RectangleOne.getHeight() + "): " + AreaOne.getArea());
//console.log(CompareRectangle1.isSquare());
if (CompareRectangle1.isSquare()) {console.log("Es un Cuadrado");
} else {
        if (CompareRectangle1.isVertical()) {console.log("Esta Vertical");
        } else console.log("Esta Horizontal");
    }
console.log("----------------------------------------------------------------");
console.log("Area del Segundo Rectangulo (base: " + RectangleTwo.getBase() + " y alto: " + RectangleTwo.getHeight() + "): " + AreaTwo.getArea());
if (CompareRectangle2.isSquare()) {console.log("Es un Cuadrado");
} else {
        if (CompareRectangle2.isVertical()) {console.log("Esta Vertical");
        } else console.log("Esta Horizontal");
    }
console.log("----------------------------------------------------------------");
console.log("Comparativa si es Mayor(1), Igual(0) o Menor(-1): " + CompareRectangle1.greaterThan(RectangleTwo));
console.log(" ");

console.log("***************   Cambio el Rectangulo 1 again  ****************");
RectangleOne.setBase(2);
console.log("Area del Primer Rectangulo (base: " + RectangleOne.getBase() + " y alto: " + RectangleOne.getHeight() + "): " + AreaOne.getArea());
//console.log(CompareRectangle1.isSquare());
if (CompareRectangle1.isSquare()) {console.log("Es un Cuadrado");
} else {
        if (CompareRectangle1.isVertical()) {console.log("Esta Vertical");
        } else console.log("Esta Horizontal");
    }
console.log("----------------------------------------------------------------");
console.log("Area del Segundo Rectangulo (base: " + RectangleTwo.getBase() + " y alto: " + RectangleTwo.getHeight() + "): " + AreaTwo.getArea());
if (CompareRectangle2.isSquare()) {console.log("Es un Cuadrado");
} else {
        if (CompareRectangle2.isVertical()) {console.log("Esta Vertical");
        } else console.log("Esta Horizontal");
    }
console.log("----------------------------------------------------------------");
console.log("Comparativa si es Mayor(1), Igual(0) o Menor(-1): " + CompareRectangle1.greaterThan(RectangleTwo));
console.log("----------------------------------------------------------------");
