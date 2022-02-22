export interface Clinica {
   nume:string;
   adresa:string;
}

export interface Doctori {
    nume:string;
    prenume:string;
    codParafa:number;
    parola:string;

}
export interface Transporturi{
    data:string;
    efectuat:boolean;
}
export interface StareRobot{
    ocupat:string;
}

export interface Asistenta {
    nume:string;
    prenume:string;
    parola:number;
    numeUtilizator:string;
}

export interface Tratament {
    pacientId:number;//schimbat cu pacientId
    medicament:string;
    pat:number;
    diagnostic:string;
}