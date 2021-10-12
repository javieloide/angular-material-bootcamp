import { Curso } from "src/models/curso";

export const CURSOS: Curso[] = [
  {
    id: 1,
    nombre: "Curso1",
    alumnos: [
      {
        id: 1,
        name:"Alumno1",
        id_curso: 1
      },
      {
        id: 2,
        name:"Alumno2",
        id_curso: 1
      },
      {
        id: 3,
        name:"Alumno3",
        id_curso: 1
      },
      {
        id: 4,
        name:"Alumno4",
        id_curso: 1
      },
    ]
  },
  {
    id: 2,
    nombre: "Curso2",
    alumnos: [
      {
        id: 5,
        name:"Alumno5",
        id_curso: 2
      },
      {
        id: 6,
        name:"Alumno6",
        id_curso: 2

      },
      {
        id: 7,
        name:"Alumno7",
        id_curso: 2
      },
      {
        id: 8,
        name:"Alumno8",
        id_curso: 2
      },
    ]
  },
  {
    id: 3,
    nombre: "Curso3",
    alumnos: [
      {
        id: 9,
        name:"Alumno10",
        id_curso: 3,
      },
      {
        id: 11,
        name:"Alumno11",
        id_curso: 3
      },
      {
        id: 12,
        name:"Alumno12",
        id_curso: 3
      },
      {
        id: 13,
        name:"Alumno13",
        id_curso: 3
      },
    ]
  },
  {
    id: 4,
    nombre: "Curso4",
    alumnos: [
      {
        id: 14,
        name:"Alumno14",
        id_curso: 4
      },
      {
        id: 15,
        name:"Alumno15",
        id_curso: 4
      },
      {
        id: 16,
        name:"Alumno16",
        id_curso: 4
      },
      {
        id: 17,
        name:"Alumno17",
        id_curso: 4
      }
    ]
  }
]
