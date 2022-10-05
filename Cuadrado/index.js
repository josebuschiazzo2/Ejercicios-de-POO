// Clase para armar rectangulos
var Rectangle = /** @class */ (function () {
    function Rectangle(paramBase, paramHeight) {
        this.base = paramBase;
        this.height = paramHeight;
    }
    Rectangle.prototype.getBase = function () {
        return this.base;
    };
    Rectangle.prototype.setBase = function (pBase) {
        this.base = pBase;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.setHeight = function (pHeight) {
        this.height = pHeight;
    };
    return Rectangle;
}()); // FIN Clase para armar rectangulos
// Clase de Area (Usando los rectangulos creados)
var AreaRectangle = /** @class */ (function () {
    function AreaRectangle(paramRectangle) {
        this.rectangle = paramRectangle;
    }
    AreaRectangle.prototype.getArea = function ( /*pRectangle:Rectangle <- ya lo saco antes*/) {
        return this.rectangle.getBase() * this.rectangle.getHeight();
    };
    return AreaRectangle;
}());
// Clase de Comparaciones (Usando los rectangulos creados)
var CompareRectangle = /** @class */ (function () {
    function CompareRectangle(paramRectangle) {
        this.rectangle = paramRectangle;
    }
    CompareRectangle.prototype.greaterThan = function (prectangle2) {
        var status;
        var rectangle2 = prectangle2;
        var AreaR1 = new AreaRectangle(this.rectangle);
        var AreaR2 = new AreaRectangle(rectangle2);
        if (AreaR1.getArea() === AreaR2.getArea()) {
            status = 0;
        }
        else {
            if (AreaR1.getArea() < AreaR2.getArea()) {
                status = -1;
            }
            else
                status = 1;
        }
        return status;
    };
    CompareRectangle.prototype.isSquare = function () {
        if (this.rectangle.getBase() === this.rectangle.getHeight()) {
            return true;
        }
        else
            return false;
    };
    CompareRectangle.prototype.isVertical = function () {
        if (this.rectangle.getBase() < this.rectangle.getHeight()) {
            return true;
        }
        else
            return false;
    };
    return CompareRectangle;
}());
//Instancia de Clases
var RectangleOne = new Rectangle(4, 3);
var RectangleTwo = new Rectangle(3, 3);
var AreaOne = new AreaRectangle(RectangleOne);
var AreaTwo = new AreaRectangle(RectangleTwo);
var CompareRectangle1 = new CompareRectangle(RectangleOne);
var CompareRectangle2 = new CompareRectangle(RectangleTwo);
console.log("----------------------------------------------------------------");
console.log("Area del Primer Rectangulo (base: " + RectangleOne.getBase() + " y alto: " + RectangleOne.getHeight() + "): " + AreaOne.getArea());
//console.log(CompareRectangle1.isSquare());
if (CompareRectangle1.isSquare()) {
    console.log("Es un Cuadrado");
}
else {
    if (CompareRectangle1.isVertical()) {
        console.log("Esta Vertical");
    }
    else
        console.log("Esta Horizontal");
}
console.log("----------------------------------------------------------------");
console.log("Area del Segundo Rectangulo (base: " + RectangleTwo.getBase() + " y alto: " + RectangleTwo.getHeight() + "): " + AreaTwo.getArea());
if (CompareRectangle2.isSquare()) {
    console.log("Es un Cuadrado");
}
else {
    if (CompareRectangle2.isVertical()) {
        console.log("Esta Vertical");
    }
    else
        console.log("Esta Horizontal");
}
console.log("----------------------------------------------------------------");
console.log("Comparativa si es Mayor(1), Igual(0) o Menor(-1): " + CompareRectangle1.greaterThan(RectangleTwo));
console.log(" ");
console.log("***************   Cambio el Rectangulo 1     *******************");
RectangleOne.setBase(3);
console.log("Area del Primer Rectangulo (base: " + RectangleOne.getBase() + " y alto: " + RectangleOne.getHeight() + "): " + AreaOne.getArea());
//console.log(CompareRectangle1.isSquare());
if (CompareRectangle1.isSquare()) {
    console.log("Es un Cuadrado");
}
else {
    if (CompareRectangle1.isVertical()) {
        console.log("Esta Vertical");
    }
    else
        console.log("Esta Horizontal");
}
console.log("----------------------------------------------------------------");
console.log("Area del Segundo Rectangulo (base: " + RectangleTwo.getBase() + " y alto: " + RectangleTwo.getHeight() + "): " + AreaTwo.getArea());
if (CompareRectangle2.isSquare()) {
    console.log("Es un Cuadrado");
}
else {
    if (CompareRectangle2.isVertical()) {
        console.log("Esta Vertical");
    }
    else
        console.log("Esta Horizontal");
}
console.log("----------------------------------------------------------------");
console.log("Comparativa si es Mayor(1), Igual(0) o Menor(-1): " + CompareRectangle1.greaterThan(RectangleTwo));
console.log(" ");
console.log("***************   Cambio el Rectangulo 1 again  ****************");
RectangleOne.setBase(2);
console.log("Area del Primer Rectangulo (base: " + RectangleOne.getBase() + " y alto: " + RectangleOne.getHeight() + "): " + AreaOne.getArea());
//console.log(CompareRectangle1.isSquare());
if (CompareRectangle1.isSquare()) {
    console.log("Es un Cuadrado");
}
else {
    if (CompareRectangle1.isVertical()) {
        console.log("Esta Vertical");
    }
    else
        console.log("Esta Horizontal");
}
console.log("----------------------------------------------------------------");
console.log("Area del Segundo Rectangulo (base: " + RectangleTwo.getBase() + " y alto: " + RectangleTwo.getHeight() + "): " + AreaTwo.getArea());
if (CompareRectangle2.isSquare()) {
    console.log("Es un Cuadrado");
}
else {
    if (CompareRectangle2.isVertical()) {
        console.log("Esta Vertical");
    }
    else
        console.log("Esta Horizontal");
}
console.log("----------------------------------------------------------------");
console.log("Comparativa si es Mayor(1), Igual(0) o Menor(-1): " + CompareRectangle1.greaterThan(RectangleTwo));
console.log("----------------------------------------------------------------");
