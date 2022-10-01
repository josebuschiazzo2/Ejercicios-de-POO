var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pDominio, pColorActual, pEncendido, pVelocidad, pDireccion) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.dominio = pDominio;
        this.colorActual = pColorActual;
        this.estaPrendido = pEncendido;
        this.velocidadActual = pVelocidad;
        this.direccionActual = pDireccion;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual = this.velocidadActual++;
    };
    Auto.prototype.frenar = function () {
        this.velocidadActual = 0;
    };
    Auto.prototype.doblarDerecha = function () {
        this.direccionActual = "derecha";
    };
    Auto.prototype.doblarIzquierda = function () {
        this.direccionActual = "Izquierda";
    };
    return Auto;
}());
var autoUno = new Auto("Fiat", "Palio", "AC86FF", "Gris", false, 0, "izquierda");
var autoDos = new Auto("Volkswagen", "Gol", "AB05PL", "Verde", true, 120, "derecha");
console.log("Auto " + autoDos.marca + " - " + autoDos.modelo + ", dominio: " + autoDos.dominio);
