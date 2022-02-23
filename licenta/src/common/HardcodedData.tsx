import { Doctori, Clinica, StareRobot, Transporturi } from "./common";

export const mockedClinici:Clinica[] =[
{
    nume:"Popa",
    adresa:"Revolutiei 192"
},
{
    nume:"Centru",
    adresa:"albabala 12"
}
]
export const mockedDoctori:Doctori[] =[
    {nume:"Piscot",
    prenume:"Iscot",
    parola:"565",
    codParafa:1111}
]

export const mockedTransport:Transporturi[]=[
    {data:"12 mai 2021",
    efectuat:true},
    {data:"14 mai 2021",
    efectuat:true},
    {data:"13 mai 2021",
    efectuat:true},
    {data:"13 mai 2021",
    efectuat:true},
    {data:"13 mai 2021",
    efectuat:true}
]
export const stareRobotMocked:StareRobot[]=[
    {
        ocupat:"Online"
    }
]