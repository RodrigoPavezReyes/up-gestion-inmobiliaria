//Modifico el Dom para mostrar las Propiedades

const contenedorPropiedades = document.getElementById("contenedorPropiedades");
contenedorPropiedades.className="contenedorProp";


//Funcion para mostrar las Propiedades

const mostrarPropiedades = () =>{

    arrayPropiedades.forEach( (itemPropiedad) =>{

        const card = document.createElement("div");
        card.className = "card"
        card.innerHTML = 
        
        `<img src="${itemPropiedad.img}">
        <div class="cardContent">
            <h3>${itemPropiedad.nombre}</h3>
            <p>${itemPropiedad.descripcion}</p>
            <p>$${itemPropiedad.precio}</p>
            <button id="botonVer ${itemPropiedad.id}">Ver más </button>
        </div>`

        contenedorPropiedades.appendChild(card);

        //Ver cada propiedad con boton "ver mas"

        const botonVer = document.getElementById(`botonVer ${itemPropiedad.id}`);
        botonVer.addEventListener("click", ()=>{
            window.location.href= "../pages/detalle.html"
        })

    } )
};

mostrarPropiedades();