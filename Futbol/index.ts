class Person
{
    private name: string;
    private lastname: string;
    private passport: string;
    private dbirth: Date;

    constructor (pname:string , plastname:string , ppassport:string , pdbirth:Date)
    {
        this.name=pname;
        this.lastname=plastname;
        this.passport=ppassport;
        this.dbirth=pdbirth;
    }

    public setName(Pname:string):void
    {
           this.name=Pname;
    }
    public getName():string
    {
           return this.name;
    }

    public setLastName(Plastname:string):void
    {
           this.lastname=Plastname;
    }
    public getLastName():string
    {
           return this.lastname;
    }

    public setPassport(Ppassport:string):void
    {
           this.passport=Ppassport;
    }
    public getPassport():string
    {
           return this.passport;
    }

    public getDbirth():Date
    {
           return this.dbirth;
    }

} // FIN Clase Person

class Soccer
{
    private person: Person;
    private team: string; // para organizar por equipos ponele
    private jnumber: number; // para saber jersey number
    
    constructor(pperson:Person , pteam:string, pjnumber:number)
    {
        this.person=pperson;
        this.team=pteam;
        this.jnumber=pjnumber;
    }
    
    public getPerson():String
    {
        return this.person.getName() + " " + this.person.getLastName();
    }

    public getTeam():string 
    {
        return this.team;
    }
    public setTeam(Pteam:string):void
    {
        this.team=Pteam;
    }
    
    public getJersey():number 
    {
        return this.jnumber;
    }
    public setJersey(Pjnumber:number):void
    {
        this.jnumber=Pjnumber;
    }

} // FIN Clase Soccer


class CoucherSoccer
{
    private person: Person;
    private team: string; // para organizar por equipos ponele
     
    constructor(pperson:Person , pteam:string)
    {
        this.person=pperson;
        this.team=pteam;
    }
    
    public getPerson():String
    {
        return this.person.getName() + " " + this.person.getLastName();
    } 
    
    public getTeam():string 
    {
        return this.team;
    }
    public setTeam(Pteam:string):void
    {
        this.team=Pteam;
    }
} // FIN Clase CoucherSoccer

class Therapist
{
    private person: Person;
    private team: string; // para organizar por equipos ponele
     
    constructor(pperson:Person , pteam:string)
    {
        this.person=pperson;
        this.team=pteam;
    }
    
    public getPerson():String
    {
        return this.person.getName() + " " + this.person.getLastName();
    }

    public getTeam():string 
    {
        return this.team;
    }
    public setTeam(Pteam:string):void
    {
        this.team=Pteam;
    }
} // FIN Class Therapist

//Instancia de Clases

let person: Person[]= new Array(); //Para hacerlo generico
person[0]= new Person ("Juan1","Perez1","AAA1230",new Date("1984-1-30"));
person[1]= new Person ("Raul2","Perez2","AAA1231",new Date("1984-2-15"));
person[2]= new Person ("Raul3","Perez3","AAA1232",new Date("1984-3-30"));
person[3]= new Person ("Raul4","Perez4","AAA1233",new Date("1984-5-30"));
person[4]= new Person ("Raul5","Perez5","AAA1234",new Date("1984-6-30"));
person[5]= new Person ("Juan6","Perez6","AAA1235",new Date("1984-7-30"));
person[6]= new Person ("Raul7","Perez7","AAA1236",new Date("1984-8-30"));
person[7]= new Person ("Raul8","Perez8","AAA1237",new Date("1984-9-30"));
person[8]= new Person ("Raul9","Perez9","AAA1238",new Date("1984-10-30"));
person[9]= new Person ("Raul10","Perez10","AAA1239",new Date("1984-11-30"));



console.log("--------------Personas Registradas -----------------------------");
for (let i: number=0; i<person.length; i++)
{
    console.log(`Nombre: ${person[i].getName()} ${person[i].getLastName()}, Passaporte: ${person[i].getPassport()} - Cumpleaños: ${person[i].getDbirth()}`);
}
console.log("----------------------------------------------------------------");

//Voy a asignar a estas personitas su rol
let soccer: Soccer[]=new Array();
let coucher: CoucherSoccer[]=new Array();
let therapist: Therapist[]= new Array();

coucher[0]=new CoucherSoccer(person[0],"River");
coucher[1]=new CoucherSoccer(person[1],"Boca");
therapist[0]=new Therapist(person[2],"River");
therapist[1]=new Therapist(person[3],"Boca");

//voy a meterlo en river y el otro boca, porque es free, la versión paga te permite asiganar a tus jugadores :-P
for (let i: number=4; i<person.length; i+=2)
{
    soccer[i-4]= new Soccer(person[i],"River",i-3); // acá empieza en i=0, en prox es i=2
    soccer[i-3]= new Soccer(person[i+1],"Boca",i-2); // y acá en i=1, en el prox es i=3
}

console.log("------------------Equipo de River-------------------------------");
console.log("------------------DT de River-----------------------------------");
for (let i: number=0; i<coucher.length; i++)
{
 if (coucher[i].getTeam()==="River") console.log(coucher[i].getPerson());
}
console.log("------------------Terapista de River----------------------------");
for (let i: number=0; i<therapist.length; i++)
{
 if (therapist[i].getTeam()==="River") console.log(therapist[i].getPerson());
}
console.log("------------------Jugadores de River----------------------------");
for (let i: number=0; i<soccer.length; i++)
{
  if (soccer[i].getTeam()==="River") console.log(soccer[i].getPerson());
}

console.log("------------------Equipo de Boca--------------------------------");
console.log("------------------DT de Boca------------------------------------");
for (let i: number=0; i<coucher.length; i++)
{
 if (coucher[i].getTeam()==="Boca") console.log(coucher[i].getPerson());
}
console.log("------------------Terapista de Boca-----------------------------");
for (let i: number=0; i<therapist.length; i++)
{
 if (therapist[i].getTeam()==="Boca") console.log(therapist[i].getPerson());
}
console.log("------------------Jugadores de Boca-----------------------------");
for (let i: number=0; i<soccer.length; i++)
{
  if (soccer[i].getTeam()==="Boca") console.log(soccer[i].getPerson());
}
