// Clase Alumnos
class Alumnos {
    private nombre :string;
    private apellido : string;
    private notaMatematicas : number;
    private notaLiteratura: number;
    private estado : boolean;

    constructor(pNombre :string, pApellido :string,pNotaMatematicas :number, pNotaLiteratura :number, pEstado :boolean){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.notaMatematicas = pNotaMatematicas;
        this.notaLiteratura = pNotaLiteratura;
        this.estado = pEstado;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre (sNombre:string){
        this.nombre = sNombre;
    }
    getApellido():string{
        return this.apellido;
    }
    setApellido (sApellido:string){
        this.apellido = sApellido;
    }
    getEstado():void{
        if(this.estado === true){
            console.log("El Alumno esta: Matriculado");
        }else{
            console.log("El Alumno esta: Expulsado")
        }
    }
    setNotaMatematicas (sNota:number){
        this.notaMatematicas = sNota;
    }
    setNotaLiteratura (sNota:number){
        this.notaLiteratura = sNota;
    }
    getEvaluacionMatematicas():string {
        if (this.notaMatematicas >= 7){
            let estado : string = "Aprobado";
            return estado
        }else{
            let estado : string = "Desaprobado"
            return estado
        }
    }
    getEvaluacionLiteratura():string {
        if (this.notaLiteratura >= 7){
            let estado : string = "Aprobado";
            return estado
        }else{
            let estado : string = "Desaprobado"
            return estado
        }
    }
    changeEstado ():void {
        if (this.estado === true){
            this.estado = false;
            console.log("Se Expulso Alumno");
        }else{ 
            this.estado = true;
            console.log("Se Matriculo Alumno");
        }
    }
}

//Clase maestros
class Maestros {
    private nombre :string;
    private apellido : string;
    private materia :string;
    private estado : boolean;
    private listaAlumnos:Alumnos[];

    constructor(pNombre :string, pApellido :string,pMateria, pEstado:boolean,pListadoAlumnos:Alumnos[] ){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
        this.estado = pEstado;
        this.listaAlumnos = pListadoAlumnos;

    }
    getNombre():string{
        return this.nombre;
    }
    setNombre (sNombre:string){
        this.nombre = sNombre;
    }
    getApellido():string{
        return this.apellido;
    }
    setApellido (sApellido:string){
        this.apellido = sApellido;
    }
    getMateria():string{
        return this.materia;
    }
    getListaAlumnos ():Alumnos[]{
        return this.listaAlumnos;
    }
    getEstado():void{
        if(this.estado === true){
            console.log("El Maestro esta: Contratado");
        }else{
            console.log("El Maestro esta: Despedido");
        }
    }

    changeEstado ():void {
        if (this.estado === false){
            this.estado = true;
            console.log("Se Contrato Maestro");
        }else{ 
            this.estado = false;
            console.log("Se Despidio Maestro");
        }
    }
}
//Clase escuela
class Escuela {
    private nombreEscuela:string;
    private listadoAlumnos:Alumnos[];
    private listadoMaestros:Maestros[];

    constructor(pNombre:string,pListadoAlumnos:Alumnos[],pListadoMaestros:Maestros[]) {
        this.nombreEscuela = pNombre;
        this.listadoAlumnos = pListadoAlumnos;
        this.listadoMaestros = pListadoMaestros;
    }

    public getNombreEscuela():string{
        return this.nombreEscuela;
    }
    public setNombreEscuela(pNombre):void{
        this.nombreEscuela = pNombre;
    }

    public changeEstadoMaestro(pMaestro:Maestros):void{
        for (let i:number=0; i<this.listadoMaestros.length; i++){
            if(pMaestro.getApellido() === this.listadoMaestros[i].getApellido()){
                this.listadoMaestros[i].changeEstado();
            }
        }

    }
    public chageEstadoAlumno(pAlumno:Alumnos):void{
        for (let i:number=0; i<this.listadoAlumnos.length; i++){
            if(pAlumno.getApellido() === this.listadoAlumnos[i].getApellido()){
                this.listadoAlumnos[i].changeEstado();
            }
        }

    }

}

// Instancias de clases

let AlumnoUno = new Alumnos("Juan","Perez",5,4,true);
let AlumnoDos = new Alumnos("Juan","Carlos",8,6,true);
let AlumnoTres = new Alumnos("Juan","Lopez",9,2,true);

let listadoAlumnosUno : Alumnos[] = [AlumnoUno,AlumnoDos,AlumnoTres];

let MaestroUno = new Maestros ("Daniel","Gonazalez","Literatura",true,listadoAlumnosUno);
let MaestroDos = new Maestros ("Fabian","Chavez","Matematicas",true,listadoAlumnosUno);

let listadoMaestrosUno : Maestros[] = [MaestroUno,MaestroDos];

let EscuelaUno = new Escuela ("NormalUno",listadoAlumnosUno,listadoMaestrosUno)

console.log("----------------------------------------------------------------")
console.log(AlumnoDos.getNombre());
console.log(AlumnoDos.getApellido());
console.log(AlumnoDos.getEvaluacionLiteratura());
console.log(AlumnoDos.getEvaluacionMatematicas());
AlumnoDos.getEstado();
console.log("----------------------------------------------------------------")

console.log("----------------------------------------------------------------")
console.log(MaestroUno.getNombre());
console.log(MaestroUno.getApellido());
console.log(MaestroUno.getListaAlumnos());
MaestroUno.getEstado();
console.log("----------------------------------------------------------------")

console.log("----------------------------------------------------------------")
console.log(EscuelaUno.getNombreEscuela());
console.log("----------------------------------------------------------------")

console.log("****************************************************************")
EscuelaUno.chageEstadoAlumno(AlumnoDos);
console.log("****************************************************************")

console.log("****************************************************************")
EscuelaUno.changeEstadoMaestro(MaestroDos);
console.log("****************************************************************")