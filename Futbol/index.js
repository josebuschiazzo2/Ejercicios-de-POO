var Person = /** @class */ (function () {
    function Person(pname, plastname, ppassport, pdbirth) {
        this.name = pname;
        this.lastname = plastname;
        this.passport = ppassport;
        this.dbirth = pdbirth;
    }
    Person.prototype.setName = function (Pname) {
        this.name = Pname;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setLastName = function (Plastname) {
        this.lastname = Plastname;
    };
    Person.prototype.getLastName = function () {
        return this.lastname;
    };
    Person.prototype.setPassport = function (Ppassport) {
        this.passport = Ppassport;
    };
    Person.prototype.getPassport = function () {
        return this.passport;
    };
    Person.prototype.getDbirth = function () {
        return this.dbirth;
    };
    return Person;
}()); // FIN Clase Person
var Soccer = /** @class */ (function () {
    function Soccer(pperson, pteam, pjnumber) {
        this.person = pperson;
        this.team = pteam;
        this.jnumber = pjnumber;
    }
    Soccer.prototype.getPerson = function () {
        return this.person.getName() + " " + this.person.getLastName();
    };
    Soccer.prototype.getTeam = function () {
        return this.team;
    };
    Soccer.prototype.setTeam = function (Pteam) {
        this.team = Pteam;
    };
    Soccer.prototype.getJersey = function () {
        return this.jnumber;
    };
    Soccer.prototype.setJersey = function (Pjnumber) {
        this.jnumber = Pjnumber;
    };
    return Soccer;
}()); // FIN Clase Soccer
var CoucherSoccer = /** @class */ (function () {
    function CoucherSoccer(pperson, pteam) {
        this.person = pperson;
        this.team = pteam;
    }
    CoucherSoccer.prototype.getPerson = function () {
        return this.person.getName() + " " + this.person.getLastName();
    };
    CoucherSoccer.prototype.getTeam = function () {
        return this.team;
    };
    CoucherSoccer.prototype.setTeam = function (Pteam) {
        this.team = Pteam;
    };
    return CoucherSoccer;
}()); // FIN Clase CoucherSoccer
var Therapist = /** @class */ (function () {
    function Therapist(pperson, pteam) {
        this.person = pperson;
        this.team = pteam;
    }
    Therapist.prototype.getPerson = function () {
        return this.person.getName() + " " + this.person.getLastName();
    };
    Therapist.prototype.getTeam = function () {
        return this.team;
    };
    Therapist.prototype.setTeam = function (Pteam) {
        this.team = Pteam;
    };
    return Therapist;
}()); // FIN Class Therapist
//Instancia de Clases
var person = new Array(); //Para hacerlo generico
person[0] = new Person("Juan1", "Perez1", "AAA1230", new Date("1984-1-30"));
person[1] = new Person("Raul2", "Perez2", "AAA1231", new Date("1984-2-15"));
person[2] = new Person("Raul3", "Perez3", "AAA1232", new Date("1984-3-30"));
person[3] = new Person("Raul4", "Perez4", "AAA1233", new Date("1984-5-30"));
person[4] = new Person("Raul5", "Perez5", "AAA1234", new Date("1984-6-30"));
person[5] = new Person("Juan6", "Perez6", "AAA1235", new Date("1984-7-30"));
person[6] = new Person("Raul7", "Perez7", "AAA1236", new Date("1984-8-30"));
person[7] = new Person("Raul8", "Perez8", "AAA1237", new Date("1984-9-30"));
person[8] = new Person("Raul9", "Perez9", "AAA1238", new Date("1984-10-30"));
person[9] = new Person("Raul10", "Perez10", "AAA1239", new Date("1984-11-30"));
console.log("--------------Personas Registradas -----------------------------");
for (var i = 0; i < person.length; i++) {
    console.log("Nombre: " + person[i].getName() + " " + person[i].getLastName() + ", Passaporte: " + person[i].getPassport() + " - Cumplea\u00F1os: " + person[i].getDbirth());
}
console.log("----------------------------------------------------------------");
//Voy a asignar a estas personitas su rol
var soccer = new Array();
var coucher = new Array();
var therapist = new Array();
coucher[0] = new CoucherSoccer(person[0], "River");
coucher[1] = new CoucherSoccer(person[1], "Boca");
therapist[0] = new Therapist(person[2], "River");
therapist[1] = new Therapist(person[3], "Boca");
//voy a meterlo en river y el otro boca, porque es free, la versión paga te permite asiganar a tus jugadores :-P
for (var i = 4; i < person.length; i += 2) {
    soccer[i - 4] = new Soccer(person[i], "River", i - 3); // acá empieza en i=0, en prox es i=2
    soccer[i - 3] = new Soccer(person[i + 1], "Boca", i - 2); // y acá en i=1, en el prox es i=3
}
console.log("------------------Equipo de River-------------------------------");
console.log("------------------DT de River-----------------------------------");
for (var i = 0; i < coucher.length; i++) {
    if (coucher[i].getTeam() === "River")
        console.log(coucher[i].getPerson());
}
console.log("------------------Terapista de River----------------------------");
for (var i = 0; i < therapist.length; i++) {
    if (therapist[i].getTeam() === "River")
        console.log(therapist[i].getPerson());
}
console.log("------------------Jugadores de River----------------------------");
for (var i = 0; i < soccer.length; i++) {
    if (soccer[i].getTeam() === "River")
        console.log(soccer[i].getPerson());
}
console.log("------------------Equipo de Boca--------------------------------");
console.log("------------------DT de Boca------------------------------------");
for (var i = 0; i < coucher.length; i++) {
    if (coucher[i].getTeam() === "Boca")
        console.log(coucher[i].getPerson());
}
console.log("------------------Terapista de Boca-----------------------------");
for (var i = 0; i < therapist.length; i++) {
    if (therapist[i].getTeam() === "Boca")
        console.log(therapist[i].getPerson());
}
console.log("------------------Jugadores de Boca-----------------------------");
for (var i = 0; i < soccer.length; i++) {
    if (soccer[i].getTeam() === "Boca")
        console.log(soccer[i].getPerson());
}
