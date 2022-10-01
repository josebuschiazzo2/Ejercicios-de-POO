class Auto 
{
    public marca: string;
    public modelo: string;
    public dominio: string;
    public colorActual: string;
    public estaPrendido: boolean;
    public velocidadActual: number;
    public direccionActual: string;


    constructor (pMarca:string,pModelo:string,pDominio:string,pColorActual:string,pEncendido:boolean,pVelocidad:number,pDireccion:string) 
    {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.dominio = pDominio;
        this.colorActual = pColorActual;
        this.estaPrendido = pEncendido;
        this.velocidadActual = pVelocidad;
        this.direccionActual = pDireccion;
    }
    
    encenderApagar (): void 
    {
        if (this.estaPrendido===true){
            this.estaPrendido=false;
        }else{
            this.estaPrendido=true;
        }
    }
    
    acelerar (): void 
    {
        this.velocidadActual = this.velocidadActual++
    }
    
    frenar (): void 
    {
        this.velocidadActual = 0;
    }
    
    doblarDerecha (): void 
    {
        this.direccionActual = "derecha";
    }
    
    doblarIzquierda (): void 
    {
        this.direccionActual = "Izquierda";
    }
}

let autoUno = new Auto ("Fiat","Palio","AC86FF","Gris",false,0,"izquierda");
let autoDos = new Auto ("Volkswagen","Gol","AB05PL","Verde",true,120,"derecha");

console.log(`Auto ${autoDos.marca} - ${autoDos.modelo}, dominio: ${autoDos.dominio}`);