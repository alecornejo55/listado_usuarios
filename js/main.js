const usuarios = [];
// Generamos el modal
const myModal = new bootstrap.Modal(document.getElementById('modalUsuario'));
class Usuario {
    constructor(usuario, nombre, email, edad){
        this.usuario = usuario;
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.id = usuarios.length + 1;
    }
}

// Función que arma la tabla de los usuarios
const armarTabla = (usuarios) => {
    const table = document.getElementById('datosUsuarios');
    if(usuarios.length > 0 ){
        usuarios.map((usuario, indice) => {
            table.innerHTML += `
            <tr class="usuarioCargado">
                <td>${usuario.usuario}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.edad}</td>
                <td>
                    <a href="#" id="btnEditar${usuario.id}">Editar</a>
                    <a href="#" id="btnEliminar${usuario.id}">Eliminar</a>
                </td>
            </tr>`;
            // Función que elimina el usuario
            const btnEliminar = document.getElementById(`btnEliminar${usuario.id}`);
            btnEliminar.addEventListener('click', () => {
                if(confirm(`¿Estás seguro que deseas eliminar el usuario?`)){
                    usuarios.splice(indice, 1);
                    armarTabla(usuarios);
                }
            });

            // Función que abre la edición de un usuario
            const btnEditar = document.getElementById(`btnEditar${usuario.id}`);
            btnEditar.addEventListener('click', () => {
                document.getElementById('modalUsuarioLabel').innerHTML = 'Editar usuario';
                document.getElementById('inputUsuario').value=usuario.usuario;
                document.getElementById('inputNombre').value=usuario.nombre;
                document.getElementById('inputEmail').value=usuario.email;
                document.getElementById('inputEdad').value=usuario.edad;
                document.getElementById('accionUsuario').value = 'editar';
                document.getElementById('indiceUsuario').value = indice;
                // Abrimos el modal
                myModal.show();
            });
        });
    }
    else {
        table.innerHTML += `
        <tr>
            <td colspan="5" class="text-center">
                <span class="text-black">No existen usuarios</span>
            </td>
        </tr>
        `;
    }
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
        console.log(usuarios);
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
    armarTabla(usuarios);
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
modalUsuario = document.getElementById('modalUsuario');
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
armarTabla(usuarios);