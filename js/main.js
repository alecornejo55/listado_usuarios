const usuarios = [];
// Generamos el modal
let myModal = new bootstrap.Modal(document.getElementById('modalUsuario'));
class Usuario {
    constructor(usuario, nombre, email, edad){
        this.usuario = usuario;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
    }
}

// Función que elimina el usuario
function eliminarUsuario(indice){
    if(confirm(`¿Estás seguro que deseas eliminar el usuario?`)){
        usuarios.splice(indice, 1);
        armarTabla();
    }
}

// Función que abre la edición de un usuario
function editarUsuario(indice){
    document.getElementById('modalUsuarioLabel').innerHTML = 'Editar usuario';
    document.getElementById('inputUsuario').value=usuarios[indice].usuario;
    document.getElementById('inputNombre').value=usuarios[indice].nombre;
    document.getElementById('inputEmail').value=usuarios[indice].email;
    document.getElementById('inputEdad').value=usuarios[indice].edad;
    document.getElementById('accionUsuario').value = 'editar';
    document.getElementById('indiceUsuario').value = indice;
    // Abrimos el modal
    myModal.show();
}
// Función que arma la tabla de los usuarios
function armarTabla(){
    let table = '';
    if(usuarios.length > 0 ){
        usuarios.map((usuario, indice) => {
            table += `
            <tr class="usuarioCargado">
                <td>${usuario.usuario}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.edad}</td>
                <td>
                    <a href="#" onClick="editarUsuario(${indice})">Editar</a>
                    <a href="#" onClick="eliminarUsuario(${indice})">Eliminar</a>
                </td>
            </tr>`;
        });
    }
    else {
        table += `
        <tr>
            <td colspan="5" class="text-center">
                <span class="text-black">No existen usuarios</span>
            </td>
        </tr>
        `;
    }
    document.getElementById('datosUsuarios').innerHTML = table;
}

// Evento al hacer click en nuevo usuario
document.getElementById('nuevoUsuario').addEventListener('click', function(){
    document.getElementById('modalUsuarioLabel').innerHTML = 'Agregar nuevo usuario';
    document.getElementById('accionUsuario').value = 'nuevo';
    // Abrimos el modal
    myModal.show();
});

// Evento al hacer click en guardar un usuario
document.getElementById('guardarUsuario').addEventListener('click', function(){
    let elementos = document.getElementsByClassName('form-control');
    let validador = true;
    let mensajeAlert = '';
    for(const elemento of elementos){
        if(elemento.value == ''){
            validador = false;
            break;
        }
    }
    if(!validador){
        alert("Todos los datos son obligatorios. Por favor verifique");
        return false;
    }
    let usuario = document.getElementById('inputUsuario').value;
    let nombre = document.getElementById('inputNombre').value;
    let email = document.getElementById('inputEmail').value;
    let edad = document.getElementById('inputEdad').value;
    let accionUsuario = document.getElementById('accionUsuario').value;
    if(accionUsuario == 'nuevo'){
        usuarios.push(new Usuario(usuario, nombre, email,edad))
        mensajeAlert = '¡Usuario creado correctamente!';
    }

    if(accionUsuario == 'editar'){
        let indiceUsuario = document.getElementById('indiceUsuario').value;
        usuarios[indiceUsuario].usuario = usuario;
        usuarios[indiceUsuario].nombre = nombre;
        usuarios[indiceUsuario].email = email;
        usuarios[indiceUsuario].edad = edad;
        mensajeAlert = '¡Usuario guardado correctamente!';
    }
    alert(mensajeAlert);
    armarTabla();
    myModal.hide();
});


// Evento al escribir en el buscador
document.getElementById('inputBuscar').addEventListener('keyup', function(){
    // Texto del campo
    let textoBuscar = document.getElementById('inputBuscar').value;
    if(textoBuscar){
        textoBuscar = textoBuscar.toLowerCase().trim();
    }
    // las filas de la tabla
    const listadoTabla = document.getElementsByClassName('usuarioCargado');
    let encontrado = 0 ;
    for(const tr of listadoTabla){
        let texto = tr.innerHTML.toLowerCase().trim();
        if(texto.indexOf(textoBuscar) > -1){
            tr.style.display = "";
            encontrado++;
        }
        else {
            tr.style.display = "none";
        }
    };
    if(encontrado == 0){
        if(!document.getElementById('noExistentes') && listadoTabla.length > 0){
            table = `
            <tr id="noExistentes">
                <td colspan="5" class="text-center">
                    <span class="text-black">No se encontraron coincidencias</span>
                </td>
            </tr>
            `;
            document.getElementById('datosUsuarios').innerHTML += table;
        }
    }
    else {
        document.getElementById('noExistentes').remove();
    }
});
// Cada vez que se cierra el modal se eliminan los datos del mismo
modalUsuario = document.getElementById('modalUsuario')
modalUsuario.addEventListener('hidden.bs.modal',function(event){
    let elementos = document.getElementsByClassName('form-control');
    for(const elemento of elementos){
        elemento.value = '';
    }
    // Elimino los hidden
    document.getElementById('accionUsuario').value = '';
    document.getElementById('indiceUsuario').value = '';
});
// Armo la tabla la primera vez
armarTabla();