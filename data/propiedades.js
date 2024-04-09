//Propiedades Disponibles

class Propiedad {
    constructor(id, nombre, descripcion, precio, img){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.precio=precio;
        this.img=img;
    }
}


//Creacion de objetos

const propiedad1 = new Propiedad (1, "propiedad1", "lorem", 1, "../assets/img/prop1.png");
const propiedad2 = new Propiedad (2, "propiedad2", "lorem", 2, "../assets/img/prop2.png");
const propiedad3 = new Propiedad (3, "propiedad3", "lorem", 3, "../assets/img/prop3.png");
const propiedad4 = new Propiedad (4, "propiedad4", "lorem", 4, "../assets/img/prop4.png");
const propiedad5 = new Propiedad (5, "propiedad5", "lorem", 5, "../assets/img/prop5.png");
const propiedad6 = new Propiedad (6, "propiedad6", "lorem", 6, "../assets/img/prop6.png");


//Creacion de array de objtos

const arrayPropiedades = [propiedad1,propiedad2,propiedad3,propiedad4,propiedad5,propiedad6];

console.log(arrayPropiedades)




