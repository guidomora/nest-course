// no hay que poner entity al final del nombre pq sino con un orm 
// va a crear el nombre de la tabla con la palabra entity
export class Brand {
    id:string
    name:string

    createdAt:number
    updatedAt?:number
}
