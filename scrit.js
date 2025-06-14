let enlances = ["https://th.bing.com/th/id/OIP.XIc10tUdbE2wK5dR373DUgHaOV?w=115&h=184&c=7&r=0&o=7&pid=1.7&rm=3","https://th.bing.com/th/id/OIP.egAQrG5heksW74AEHfb7ygHaM8?w=112&h=180&c=7&r=0&o=7&pid=1.7&rm=3","https://th.bing.com/th/id/OIP.RbmdMFkt1FKGbnDwx2TvQAHaHa?w=148&h=180&c=7&r=0&o=7&pid=1.7&rm=3","https://th.bing.com/th/id/OIP._u2RV9p-HIQbEaeMeV_F0wHaI1?w=142&h=180&c=7&r=0&o=7&pid=1.7&rm=3"]
let descripciones = ["SONIC","SHADOW","TAILS","KNUCLES"]
let button = document.querySelector(".agregar")

function mostrarGaleria(){
    let imagenes = document.querySelector(".imagenes");
    imagenes.innerHTML = ""
    for(let indice in enlances ){
        let contenedor = document.createElement("div");
        let palabra = document.createElement("p");
        let foto = document.createElement("img");
        foto.src = enlances[indice]
        palabra.innerHTML = descripciones[indice]
        contenedor.append(foto)
        contenedor.append(palabra)
        imagenes.append(contenedor)
    }
}
mostrarGaleria()

function añadirElemento(){
    let inputDes = document.querySelector(".descripciones");
    let inputUrl = document.querySelector(".enlace")

    if(inputDes.value.trim() === "" || inputUrl.value.trim () === ""){
        alert("Por favor completar todos los campos");
        return;
    } 

    enlances.push(inputUrl.value);
    descripciones.push(inputDes.value)

    inputDes.value="";
    inputUrl.value="";

    mostrarGaleria()
}

    mostrarGaleria()

