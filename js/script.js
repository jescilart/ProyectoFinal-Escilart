//FUNCIONES - CALCULADORAS DE COMISIÓN, SELLADO Y GASTOS DE INGRESO

function calculadoraComision() {
    let montoAlquiler = document.getElementById("montoAlquiler").value;
    let tipoPropiedad = document.getElementById("tipoPropiedad").options[document.getElementById("tipoPropiedad").selectedIndex].value;
    let mesesContrato = document.getElementById("mesesContrato").value;
    let flag = true;

    if (isNaN(montoAlquiler) || isNaN(mesesContrato)) {
        alert("Solo se permiten números enteros");
        flag = false;
    }

    if (flag) {
        let comision;

        switch (tipoPropiedad) {
            case "Vivienda":
                comision = (((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100;
                document.getElementById("resultadoComision").innerHTML = "El costo de la comisión (con IVA) es de : $ " + comision;
                break;
            case "vivienda":
                comision = (((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100;
                document.getElementById("resultadoComision").innerHTML = "El costo de la comisión (con IVA) es de: $ " + comision;
                break;
            case "Comercio":
                comision = (((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100;
                document.getElementById("resultadoComision").innerHTML = "El costo de la comisión (con IVA) es de: $ " + comision;
                break;
            case "comercio":
                comision = (((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100;
                document.getElementById("resultadoComision").innerHTML = "El costo de la comisión (con IVA) es de: $ " + comision;
                break;
            default:
                document.getElementById("resultadoComision").innerHTML = "Las unicas opciones válidas son:  Vivienda o Comercio";
                break;
        }
    }
}


function calculadoraSellado() {
    let montoAlquiler = document.getElementById("montoAlquiler").value;
    let tipoPropiedad = document.getElementById("tipoPropiedad").options[document.getElementById("tipoPropiedad").selectedIndex].value;
    let mesesContrato = document.getElementById("mesesContrato").value;
    let flag = true;

    if (isNaN(montoAlquiler) || isNaN(mesesContrato)) {
        alert("Solo se permiten números enteros");
        flag = false;
    }

    if (flag) {
        let sellado;

        switch (tipoPropiedad) {
            case "Vivienda":
                sellado = (((montoAlquiler * mesesContrato) * 0.6) / 100);
                document.getElementById("resultadoSellado").innerHTML = "El costo del sellado es de : $ " + sellado;
                break;
            case "vivienda":
                sellado = (((montoAlquiler * mesesContrato) * 0.6) / 100);
                document.getElementById("resultadoSellado").innerHTML = "El costo del sellado es de : $ " + sellado;
                break;
            case "Comercio":
                sellado = (((montoAlquiler * mesesContrato) * 1) / 100);
                document.getElementById("resultadoSellado").innerHTML = "El costo del sellado es de : $ " + sellado;
                break;
            case "comercio":
                sellado = (((montoAlquiler * mesesContrato) * 1) / 100);
                document.getElementById("resultadoSellado").innerHTML = "El costo del sellado es de : $ " + sellado;
                break;
            default:
                document.getElementById("resultadoSellado").innerHTML = "Las unicas opciones válidas son:  Vivienda o Comercio";
                break;
        }
    }
}

function calculadoraTotal() {
    let montoAlquiler = document.getElementById("montoAlquiler").value;
    let tipoPropiedad = document.getElementById("tipoPropiedad").options[document.getElementById("tipoPropiedad").selectedIndex].value;
    let mesesContrato = document.getElementById("mesesContrato").value;
    let flag = true;

    if (isNaN(montoAlquiler) || isNaN(mesesContrato)) {
        alert("Solo se permiten números enteros");
        flag = false;
    }

    if (flag) {
        let total;

        switch (tipoPropiedad) {
            case "Vivienda":
                total = (((((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100) + (((montoAlquiler * mesesContrato) * 0.6) / 100)) ;
                document.getElementById("restultadoTotal").innerHTML = "El costo total de los gastos de ingreso es de : $ " + total;
                break;
            case "vivienda":
                total = (((((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100) + (((montoAlquiler * mesesContrato) * 0.6) / 100)) ;
                document.getElementById("restultadoTotal").innerHTML = "El costo total de los gastos de ingreso es de : $ " + total;
                break;
            case "Comercio":
                total = (((((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100) + (((montoAlquiler * mesesContrato) * 1) / 100)) ;
                document.getElementById("restultadoTotal").innerHTML = "El costo total de los gastos de ingreso es de : $ " + total;
                break;
            case "comercio":
                total = (((((montoAlquiler * mesesContrato) * 5) / 100) + ((((montoAlquiler * mesesContrato) * 5) / 100) * 21) / 100) + (((montoAlquiler * mesesContrato) * 1) / 100)) ;
                document.getElementById("restultadoTotal").innerHTML = "El costo total de los gastos de ingreso es de : $ " + total;
                break;
            default:
                document.getElementById("restultadoTotal").innerHTML = "Las unicas opciones válidas son:  Vivienda o Comercio";
                break;
        }
    }
}

//FUNCION PARA ACTIVAR LAS 3 FUNCIONES A LA VEZ
function calculadoras(){
    calculadoraComision();
    calculadoraSellado();
    calculadoraTotal();
}


//CONSULTOR DE PROPIEDADES


//OBJETO CONSTRUCTOR
function Propiedad(direccion, tipo, precio, imagen) {
    this.direccion = direccion;
    this.tipo = tipo;
    this.precio = precio;
    this.imagen = imagen;
    
}


//ARRAY PROPIEDADES
let propiedades = [
    new Propiedad("Alem 725", "Alquiler", "$50.000", "../img/gallery/1.jpg"),
    new Propiedad("Rioja 145", "Venta", "U$D 125.000", "../img/gallery/2.jpg"),
    new Propiedad("Perú 1234", "Venta", "U$D 112.000", "../img/gallery/3.jpg"),
    new Propiedad("San Martin 124", "Alquiler", "$ 85.000", "../img/gallery/4.jpg"),
];


//PARA QUE APAREZCAN LAS PROPIEDADES EN EL SITIO

let contenedorPropiedades = document.getElementById("contenedor-propiedades");
  
for (let i = 0; i < propiedades.length; i++) {
    let propiedad = propiedades[i];

    let propiedadObjeto = document.createElement("div");
    propiedadObjeto.classList.add("propiedad");
    propiedadObjeto.classList.add("border");
    propiedadObjeto.classList.add("border-dark");

    let nombrePropiedad = document.createElement("h3");
    nombrePropiedad.textContent = propiedad.direccion;

    let descripcionPropiedad = document.createElement("p");
    descripcionPropiedad.textContent = propiedad.tipo;

    let precioPropiedad = document.createElement("p");
    precioPropiedad.textContent = propiedad.precio;

    let imagenPropiedad = document.createElement("img");
    imagenPropiedad.src = propiedad.imagen;
    imagenPropiedad.alt = propiedad.direccion;

    let botonPropiedad = document.createElement("button");
    botonPropiedad.textContent = "Consultar";
    botonPropiedad.classList.add("btn-primary");
    
    //SWEET ALERT - Framework
botonPropiedad.addEventListener("click", function() {
    console.log("El botón fue presionado");
        const swalInput = document.createElement("input");
        swalInput.type = "text";
        swalInput.placeholder = "Nombre completo";
        swalInput.id = "nombre";
        swalInput.classList.add("swal2-input");
    
        const swalEmail = document.createElement("input");
        swalEmail.type = "email";
        swalEmail.placeholder = "Email";
        swalEmail.id = "email";
        swalEmail.classList.add("swal2-input");
    
        const swalTextarea = document.createElement("textarea");
        swalTextarea.placeholder = "Mensaje";
        swalTextarea.id = "mensaje";
        swalTextarea.classList.add("swal2-textarea");
    
        Swal.fire({
          title: "Consulta",
          html: swalInput.outerHTML + swalEmail.outerHTML + swalTextarea.outerHTML,
          showCancelButton: true,
          confirmButtonText: "Enviar",
          cancelButtonText: "Cancelar",
          preConfirm: () => {
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;
    
            if (!nombre || !email || !mensaje) {
              Swal.showValidationMessage("Por favor, complete todos los campos.");
            }
    
            return { nombre: nombre, email: email, mensaje: mensaje };
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: "success",
              title: "¡Enviado!",
              text: "Su consulta ha sido enviada con éxito.",
            });
          }
        });
      });

    propiedadObjeto.appendChild(nombrePropiedad);
    propiedadObjeto.appendChild(descripcionPropiedad);
    propiedadObjeto.appendChild(precioPropiedad);
    propiedadObjeto.appendChild(imagenPropiedad);
    propiedadObjeto.appendChild(botonPropiedad);

    contenedorPropiedades.appendChild(propiedadObjeto);
  }


  //PARA CONVERTIR LAS PROPIEDADES A JSON Y ALMACENARLO EN EL LOCALSTORAGE

const enJSON = JSON.stringify(propiedades)
console.log(enJSON)
localStorage.setItem("propiedades", enJSON);

//FILTRO PROPIEDADES


//EN PROCESO.......


// USO DE LOCALSTORAGE PARA ALMACENAR EL NOMBRE DEL USUARIO Y MOSTRARLO EN EL DOM

function guardarNombre() {
	const nombre = document.getElementById('inputNombre').value;
	localStorage.setItem('nombre', nombre);
	document.getElementById('nombre').textContent = nombre;
}

const nombreGuardado = localStorage.getItem('nombre');
if (nombreGuardado) {
	document.getElementById('nombre').textContent = nombreGuardado;
}

